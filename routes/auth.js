var passport = require('passport');

// Authenticating
module.exports = function(app) {

  app.get('/auth/user', function(req, res) {
    if (req.user) {
      res.json({
        user: req.user.twitter
      })
    } 
    else {
      res.json({})
    }
  });
  
  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      successRedirect : '/',
      failureRedirect : '/'
    }));

  app.get('/unlink/twitter', isLoggedIn, function(req, res) {
    var user           = req.user;
    user.twitter.token = undefined;
    user.save(function(err) {
      req.logout()
      res.redirect('/profile');
    });
  });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
}