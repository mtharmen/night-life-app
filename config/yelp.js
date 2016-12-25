require('dotenv').config();
var Yelp = require('yelp');

module.exports = new Yelp({
  consumer_key    : process.env.Yelp_Consumer_Key,
  consumer_secret : process.env.Yelp_Consumer_Secret,
  token           : process.env.Yelp_Token,
  token_secret    : process.env.Yelp_Token_Secret
});