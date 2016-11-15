require('dotenv').config()
var yelp = require('../config/yelp');
var Bar  = require('../config/models/bar');

module.exports = function(app, jsonParser) {

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
              // If user, check if they are already going
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

  app.post('/api/add/:barName/:user', function(req, res) {
    var barName = req.params.barName;
    var userName = req.params.user;
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
  })

  app.post('/api/remove/:barName/:user', function(req, res) {
    var barName = req.params.barName;
    var userName = req.params.user;
    Bar.remove({ bar: barName, person: userName }, function(err) {
      if (err) {
        console.error(err);
        res.status(400).send(err)
      } else {
        console.log(userName + ' removed from ' + barName)
        res.send('removed')
      }
    })
  })

}

var parse = function(data) {
  return data.map(function(elm, i) {
    var obj = {
      name    : elm.name,
      rating  : elm.rating,
      yelpUrl : elm.url,
      phone   : elm.display_phone,
      snippet : elm.snippet_text,
      image   : elm.image_url,
      address : elm.location.display_address,
      people  : 0,
      going   : false
    }
    return obj
  })
}

var getPeople = function(bar) {
  var d = new Date()
  var expire = d.getTime()
  var query = Bar.find({ expire: {$gt: expire}, bar: bar.name })
  // TODO: Error handling
  return query.exec()
}