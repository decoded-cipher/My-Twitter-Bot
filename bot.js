// console.log('The Bot starts running...!');
var Twit = require('twit')

var config = require('./config');
// console.log(config);
var T = new Twit(config);
// console.log(T);



// Get Tweets/Search from Twitter
function getTweet() {
    var params = {
        q: '@MyCipherBot : since:2020-08-01',
        count: 10
    }

    function getData(err, data, response) {
        if (err) {
            console.log('getData() - Cannot fetch details, something went Wrong!')
        } else {
            var tweets = data.statuses;
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        }
    }

    T.get('search/tweets', params, getData);
}

// getTweet();


// Post Tweets/Updates to Twitter
function postTweet() {
    var r = Math.floor(Math.random()*100);
    var postParams = {
        // status: 'This is just a test tweet from @MyCipherBot!'
        status: 'Random Number: ' + r
    }

    function postData(err, data, response) {
        if (err) {
            console.log('postData() - Cannot post the tweet, something went Wrong!')
        } else {
            console.log('It worked!');
        }
    }

    T.post('statuses/update', postParams, postData);
}

postTweet();
setInterval(postTweet, 1000*20);

