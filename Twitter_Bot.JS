console.log('the bot_event_tweet program is starting');

var Twit = require('twit');
//config is in a seperate javascript file and loads in or Twitter App
//security information and log in
var config = require('./config');
//make a new tweet from our log in information
var T = new Twit(config);

// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows the account
stream.on('follow', followed);

function followed(eventMsg) {
  console.log("Follow Event!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('purrrr @' + screenName);
}
function tweetIt(txt){
    var tweet = {
      status: txt
  }
    T.post('statuses/update', tweet, tweeted);
    function tweeted(err, data, response){
      if (err){
        console.log("Something went wrong!");
      } else {
        console.log("It worked!");
      }
    }
  }

