const router = require('express').Router()

const my = require('./../helper')
var Bar = require('../models/bar')

var Yelp = require('yelp')
require('dotenv').config()
const yelp = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
})

router.get('/search/:location', my.verifyToken, (req, res, next) => {
  const location = req.params.location

  yelp.search({ term: 'bars', location: location })
    .then(data => {
      const bars = parse(data.businesses)
      req.bars = bars
      const barSearches = bars.map(getPeople)
      return Promise.all(barSearches)
    })
    .then(data => {
      data.forEach((reservation, i) => {
        // Number of people going to the bar
        req.bars[i].people = reservation.length
        // If user is logged in, check if they are already going
        const found = req.payload ? reservation.filter(elm => elm.person === req.payload._id.toString()) : []
        req.bars[i].going = !!found.length
      })
      res.send({ bars: req.bars, location: location })
    })
    .catch(err => {
      return next(err)
    })
})

router.put('/add/:barName', my.verifyToken, my.UserGuard, (req, res, next) => {
  var barName = req.params.barName
  var expire = Date.now() + 1000 * 60 * 60 * 8 // expire in 8 hours
  var reserve = new Bar({ expire: expire, bar: barName, person: req.user._id })
  reserve.save(err => {
    if (err) { return next(err) }
    console.log(req.user._id + ' reserved at ' + barName)
    res.send('saved')
  })
})

router.delete('/remove/:barName', my.verifyToken, my.UserGuard, (req, res, next) => {
  const barName = req.params.barName
  Bar.remove({ bar: barName, person: req.user._id }).exec()
    .then(result => {
      console.log(req.user._id + ' removed from ' + barName)
      res.send('removed')
    })
    .catch(err => {
      return next(err)
    })
})

function parse (data) {
  return data.map((elm, i) => {
    var barInfo = {
      name: elm.name,
      stars: convertRating(elm.rating),
      rating: elm.rating,
      yelpUrl: elm.url,
      phone: elm.display_phone || '   No Phone Number Found',
      snippet: elm.snippet_text || 'No Reviews Found',
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
  const wholeStars = Math.floor(rating)

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
