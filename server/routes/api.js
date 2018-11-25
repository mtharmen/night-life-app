const router = require('express').Router()

const my = require('./../helper')
const CONFIG = require('./../config')
const Bar = require('../models/bar')

const YelpFusion = require('yelp-fusion')

const yelp = YelpFusion.client(CONFIG.YELP_API_KEY)

router.get('/search/', my.verifyToken, (req, res, next) => {
  let location = req.query.location || ''

  yelp.search({ term: 'bars', location: location })
    .then(data => {
      data = JSON.parse(data.body)
      let bars = parse(data.businesses)
      req.bars = bars
      let barSearches = bars.map(getPeople)
      return Promise.all(barSearches)
    })
    .then(data => {
      data.forEach((reservation, i) => {
        // Number of people going to the bar
        req.bars[i].people = reservation.length
        // If user is logged in, check if they are already going
        let found = req.payload ? reservation.filter(elm => elm.person === req.payload._id.toString()) : []
        req.bars[i].going = !!found.length
      })
      res.json({ bars: req.bars, location: location })
    })
    .catch(err => {
      return next(err)
    })
})

router.post('/going', my.verifyToken, my.UserGuard, (req, res, next) => {
  if (req.body.going) {
    return addReservation(req, res, next)
  } else {
    return removeReservation(req, res, next)
  }
})

function addReservation (req, res, next) {
  let barName = req.body.barName
  let expire = Date.now() + 1000 * 60 * 60 * 8 // expire in 8 hours
  Bar.findOne({ bar: barName, person: req.user._id }).exec()
    .then(existing => {
      // NOTE: maybe keep all reservations instead reusing them?
      if (existing) {
        existing.expire = expire
        return existing.save()
      }
      let reserve = new Bar({ expire: expire, bar: barName, person: req.user._id })
      return reserve.save()
    })
    .then(saved => {
      res.json({ msg: 'saved' })
    })
    .catch(err => {
      return next(err)
    })
}

function removeReservation (req, res, next) {
  let barName = req.body.barName
  Bar.remove({ expire: { $gt: Date.now() }, bar: barName, person: req.user._id }).exec()
    .then(result => {
      // console.log(req.user._id + ' removed from ' + barName)
      res.json({ msg: 'removed' })
    })
    .catch(err => {
      return next(err)
    })
}

function parse (data) {
  return data.map((elm, i) => {
    let barInfo = {
      name: elm.name,
      stars: convertRating(elm.rating),
      rating: elm.rating,
      yelpUrl: elm.url,
      phone: elm.display_phone || '   No Phone Number Found',
      reviewCount: elm.review_count || 0,
      // TODO: Maybe save the image and feed that instead of using yelp
      image: elm.image_url,
      address: elm.location.display_address,
      people: 0,
      going: false
    }
    return barInfo
  })
}

// TODO: add distance parameter?

function getPeople (bar) {
  return Bar.find({ expire: { $gt: Date.now() }, bar: bar.name }).exec()
}

function convertRating (rating) {
  let wholeStars = Math.floor(rating)

  return Array.apply(null, Array(5)).map((x, i) => {
    let star = ''
    if (i + 1 <= wholeStars) {
      star = 'fa fa-star'
    } else if (i + 0.5 === rating) {
      star = 'fa fa-star-half-o'
    } else {
      star = 'fa fa-star-o'
    }
    return star
  })
}

module.exports = router
