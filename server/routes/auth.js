const router = require('express').Router()
const OAuth = require('oauth').OAuth

const User = require('./../models/user')
const CONFIG = require('./../config')
const my = require('./../helper')
const CustomError = my.CustomError

// ****************************************************************************************************
//                                                TWITTER LOGIN
// ****************************************************************************************************
// https://gist.github.com/JuanJo4/e408d9349b403523aeb00f262900e768 for Oauth/Twitter reference
let oa = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  CONFIG.TWITTER_CONSUMER_KEY,
  CONFIG.TWITTER_CONSUMER_SECRET,
  '1.0A',
  CONFIG.CALLBACK_URL,
  'HMAC-SHA1'
)

const successRedirectUrl = CONFIG.successRedirectUrl || 'http://google.ca'
const failureRedirectUrl = CONFIG.failureRedirectUrl || 'http://youtube.com'

// Getting Request Token + Secret
router.get('/twitter/:id?', getOauthToken)

function getOauthToken (req, res, next) {
  oa.getOAuthRequestToken((err, oauthToken, oauthTokenSecret, result) => {
    if (err) {
      res.session.error = err
      console.error('Error getting OAuth request token')
      res.redirect(failureRedirectUrl)
      return
    }
    const authorize = req.session.oauthAccessToken ? 'authenticate' : 'authorize'
    const userAuthorizeUrl = 'https://api.twitter.com/oauth/' + authorize + '?oauth_token='

    req.session.oauthRequestToken = oauthToken
    req.session.oauthRequestTokenSecret = oauthTokenSecret
    res.redirect(userAuthorizeUrl + oauthToken)
  })
}

// Getting Access Token + Secret => Finding/Making User
router.get('/callback', handleTwitterCallback, getFullProfile)

function handleTwitterCallback (req, res, next) {
  const oauthRequestToken = req.session.oauthRequestToken
  const oauthRequestTokenSecret = req.session.oauthRequestTokenSecret
  const oauthVerifier = req.query.oauth_verifier

  if (!req.query.oauth_verifier) {
    console.error('Authorization Request denied')
    res.redirect(failureRedirectUrl)
    return
  }

  oa.getOAuthAccessToken(oauthRequestToken, oauthRequestTokenSecret, oauthVerifier,
    (err, oauthAccessToken, oauthAccessTokenSecret, result) => {
      if (err) {
        console.error('Error getting OAuth access token: ' + err.message)
        req.session.error = err
        res.redirect(failureRedirectUrl)
        return
      }

      delete req.session.oauthRequestToken
      delete req.session.oauthRequestTokenSecret

      req.session.oauthAccessToken = oauthAccessToken
      req.session.oauthAccessTokenSecret = oauthAccessTokenSecret
      User.findOne({ 'twitter.id': result.user_id }).exec()
        .then(user => {
          if (!user) {
            return next()
          }
          req.session.user = user
          return successRedirect(req, res)
        })
        .catch(err => {
          req.session.err = err
          return res.redirect(failureRedirectUrl)
        })
    })
}

function getFullProfile (req, res) {
  const verifyUrl = 'https://api.twitter.com/1.1/account/verify_credentials.json'
  const oauthAccessToken = req.session.oauthAccessToken
  const oauthAccessTokenSecret = req.session.oauthAccessTokenSecret

  oa.get(verifyUrl, oauthAccessToken, oauthAccessTokenSecret, (err, jsonData, response) => {
    if (err) {
      console.error('Error getting full profile from twitter: ' + err.message)
      req.session.error = err
      res.redirect(failureRedirectUrl)
      return
    }

    const data = JSON.parse(jsonData)
    const profile = {
      username: '@' + data.screen_name,
      twitter: {
        id: data.id,
        // token: oauthAccessToken,
        // tokenSecret: oauthAccessTokenSecret
        displayName: data.name
      }
    }
    const newUser = makeNewTwitterUser(profile)
    newUser.save()
      .then(user => {
        req.session.user = user
        return successRedirect(req, res)
      })
      .catch(err => {
        req.session.error = err
        return res.redirect(failureRedirectUrl)
      })
  })
}

function successRedirect (req, res) {
  res.redirect(successRedirectUrl)
}

// Route for client to call to get user after twitter login
router.get('/get-user', getUser, my.sendToken)

function getUser (req, res, next) {
  if (req.session.user) {
    req.user = req.session.user
    delete req.session.user
    return next()
  } else {
    return next(new CustomError('No User Found', 404))
  }
}

// Twitter my Functions
function makeNewTwitterUser (profile) {
  let newUser = new User()
  newUser.username = profile.username
  newUser.twitter.id = profile.twitter.id
  // newUser.twitter.token = profile.twitter.token
  // newUser.twitter.tokenSecret = profile.twitter.tokenSecret
  newUser.twitter.displayName = profile.twitter.displayName
  // NOTE: empty objects are not currently saved
  newUser.local = {}
  newUser.profile = {}
  newUser.role = 'guest'
  return newUser
}

// ****************************************************************************************************
//                                                    JWT LOGIN
// ****************************************************************************************************

router.get('/jwt/login', my.verifyToken, my.UserGuard, my.sendToken)

module.exports = router
