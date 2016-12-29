require('dotenv').config();
var Yelp = require('yelp');

module.exports = new Yelp({
  consumer_key    : process.env.YELP_CONSUMER_KEY,
  consumer_secret : process.env.YELP_CONSUMER_SECRET,
  token           : process.env.YELP_TOKEN,
  token_secret    : process.env.YELP_TOKEN_SECRET
});
