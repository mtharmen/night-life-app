const router = require('express').Router()

// const User = require('./../models/user')
// const CONFIG = require('./../config')
const my = require('./../helper')
// const CustomError = my.CustomError

require('dotenv').config()
var yelp = require('../config/yelp')
var Bar = require('../config/models/bar')

router.get('/api/previous', (req, res, next) => {
  res.send(req.session.location)
})

router.get('/api/search/:location', my.verifyToken, (req, res, next) => {
  var user = req.payload.username || ''
  var location = req.params.location

  yelp.search({ term: 'bars', location: location })
    .then(data => {
      const bars = parse(data.businesses)
      return bars.map(getPeople)
    .then(data => {
      data.forEach((barInfo, i) => {
        // Number of people going to the bar
        bars[i].people = barInfo.length
        // If user is logged in, check if they are already going
        var found = user ? barInfo.filter(elm => { return elm.person === user }) : false
        bars[i].going = !!found.length
      })
      // Saving previous search
      req.session.searchResults = bars
      req.session.location = location
      console.log(bars[0])
      console.log(bars[1])
      res.send({ bars: bars, location: location })
    })
    })
    .catch(err => {
      return next(err)
    })
})

router.post('/api/add/:barName', my.verifyToken, my.UserGuard, (req, res, next) => {
  var barName = req.params.barName
  var d = new Date()
  var expire = d.getTime() + 1000 * 60 * 60 * 8 // expire in 8 hours
  var reserve = new Bar({ expire: expire, bar: barName, person: req.user.username })
  reserve.save(err => {
    if (err) { return next(err) }
    console.log(req.user.username + ' reserved at ' + barName)
    res.send('saved')
  })
})

router.post('/api/remove/:barName', my.verifyToken, my.UserGuard, (req, res, next) => {
  const barName = req.params.barName
  Bar.remove({ bar: barName, person: req.user.username }).exec()
    .then(result => {
      console.log(req.user.username + ' removed from ' + barName)
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
      phone: elm.display_phone,
      snippet: elm.snippet_text,
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
  var d = new Date()
  var expire = d.getTime()
  var query = Bar.find({ expire: {$gt: expire}, bar: bar.name })
  return query.exec()
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
