var TwitterStrategy = require('passport-twitter').Strategy;
require('dotenv').config()

var User = require('../config/models/user');

module.exports = function(passport, ip, port) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new TwitterStrategy({

    'consumerKey'     : process.env.consumerKey,
    'consumerSecret'  : process.env.consumerSecret,
    'callbackURL'     : 'http://' + ip + ':' + port + '/auth/twitter/callback',
    passReqToCallback : true

  },
  function(req, token, tokenSecret, profile, done) {

    process.nextTick(function() {

      if (!req.user) {

        User.findOne({ 'twitter.id' : profile.id }, function(err, user) {
            if (err) {
              return done(err);
            }
            if (user) {
              if (!user.twitter.token) {
                user.twitter.token       = token;
                user.twitter.username    = profile.username;
                user.twitter.displayName = profile.displayName;

                user.save(function(err) {
                  if (err)
                    return done(err);

                  return done(null, user);
                });
              }

              return done(null, user);
            } else {
              var newUser                 = new User();

              newUser.twitter.id          = profile.id;
              newUser.twitter.token       = token;
              newUser.twitter.username    = profile.username;
              newUser.twitter.displayName = profile.displayName;

              newUser.save(function(err) {
                if (err)
                  return done(err);

                return done(null, newUser);
              });
            }
        });
      } 
    });

  }));

}