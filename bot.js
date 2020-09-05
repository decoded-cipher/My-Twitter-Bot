// console.log('The Bot starts running...!');
var Twit = require('twit')

var config = require('./config');
// console.log(config);
var T = new Twit(config);
// console.log(T);



// Get Tweets/Search from Twitter
// function getTweet() {
//     var params = {
//         q: '@MyCipherBot : since:2020-08-01',
//         count: 10
//     }

//     function getData(err, data, response) {
//         if (err) {
//             console.log('getData() - Cannot fetch details, something went Wrong!')
//         } else {
//             var tweets = data.statuses;
//             for (var i = 0; i < tweets.length; i++) {
//                 console.log(tweets[i].text);
//             }
//         }
//     }

//     T.get('search/tweets', params, getData);
// }

// getTweet();
// setInterval(postTweet, 1000*100);




// Post Tweets/Updates to Twitter
function postTweet() {

    var date = new Date();
    var presentTime = date.toLocaleTimeString();
    var presentDate = date.toLocaleDateString();
    console.log(presentTime, presentDate);

    var postParams = {
        status: 'Hello World! \nThis is just an another time tweet from @MyCipherBot. \n\nTime : '+ presentTime + '\nDate : '+ presentDate + ' on Heroku Server. \n\n I will update you in the next hour. \n Bye for now... \n\n #mytimebot #ciphercreations'
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
setInterval(postTweet, 1000 * 60 * 60);




// Follow User Event Trigger on Twitter

//     var stream = T.stream('user');
//     stream.on('follow', followed);

//     function followed(eventMsg) {
//         console.log('Follow event happens...')
//         var name = eventMsg.source.name;
//         var screenName = eventMsg.source.screen_name;
//         tweetIt('.@' + screenName + 'Thank you for following Me!');
//     }

// function tweetIt(txt) {
//     var tweet = {
//         status: txt
//     }

//     function tweeted(err, data, response) {
//         if (err) {
//             console.log('tweetIt() - Cannot post the tweet, something went Wrong!')
//         } else {
//             console.log('It worked!');
//         }
//     }

//     T.post('statuses/update', tweet, tweeted);
// }
