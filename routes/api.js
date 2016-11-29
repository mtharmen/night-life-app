require('dotenv').config()
var yelp = require('../config/yelp');
var Bar  = require('../config/models/bar');

module.exports = function(app) {

  app.get('/api/previous', function(req, res) { 
    res.send(req.session.location)
  })

  app.get('/api/search/:location', function(req, res) {
    var user = req.user ? req.user.twitter.username : '';
    var location = req.params.location;

    yelp.search({ term: 'bars', location: location })
      .then(function(data) {
        var bars = parse(data.businesses)
        var promises = bars.map(getPeople);

        Promise.all(promises)
          .then(function(data) {
            data.forEach(function(barInfo, i) {
              // Number of people going to the bar
              bars[i].people = barInfo.length 
              // If user is logged in, check if they are already going
              var found = user ? barInfo.filter(function(elm) { return elm.person === user }) : false
              bars[i].going = !!found.length
            })

            // Saving previous search
            req.session.searchResults = bars
            req.session.location = location
            res.send({ bars: bars, location: location })
          })
        .catch(function(err){
          console.error(err)
          res.status(400).send(err)
        })
      })
      .catch(function(err){
        console.error(err);
        res.status(400).send(err)
      }); 
  });

  app.post('/api/add/:barName', function(req, res) {
    var barName = req.params.barName;
    var userName = req.user ? req.user.twitter.username : '';
    if (!userName) {
      res.status(400).send('User not logged in.')
    } else {
      var d = new Date();
      var expire = d.getTime() + 1000 * 60 * 60 * 8; // expire in 8 hours
      var reserve = new Bar({ expire: expire, bar: barName, person: userName })
      reserve.save(function(err) {
        if (err) {
          console.error(err);
          res.status(400).send(err)
        } else {
          console.log(userName + ' reserved at ' + barName)
          res.send('saved')
        }
      })
    }
  })

  app.post('/api/remove/:barName', function(req, res) {
    var barName = req.params.barName;
    var userName = req.user ? req.user.twitter.username : '';
    if (!userName) {
      res.status(400).send('User not logged in.')
    } else {
      Bar.remove({ bar: barName, person: userName }, function(err) {
        if (err) {
          console.error(err);
          res.status(400).send(err)
        } else {
          console.log(userName + ' removed from ' + barName)
          res.send('removed')
        }
      })
    }
  })

}

var parse = function(data) {
  return data.map(function(elm, i) {
    var barInfo = {
      name    : elm.name,
      stars   : convertRating(elm.rating),
      rating  : elm.rating, 
      yelpUrl : elm.url,
      phone   : elm.display_phone,
      snippet : elm.snippet_text,
      image   : elm.image_url, // TODO: Maybe save the image and feed that instead of using yelp
      address : elm.location.display_address,
      people  : 0,
      going   : false
    }
    return barInfo
  })
}

// TODO: add distance parameter?

var getPeople = function(bar) {
  var d = new Date()
  var expire = d.getTime()
  var query = Bar.find({ expire: {$gt: expire}, bar: bar.name })
  return query.exec()
}

var convertRating = function(rating) {
  var wholeStars = Math.floor(rating);

  return Array.apply(null, Array(5)).map(function (x, i) {
    var star = ''
    if (i+1 <= wholeStars) {
      star = 'fa fa-star'
    } else if (i+0.5 === rating) {
      star = 'fa fa-star-half-o'
    } else {
      star = 'fa fa-star-o'
    }
    return star;
  }) 
}