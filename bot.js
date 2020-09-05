// console.log('The Bot starts running...!');
var Twit = require('twit')

var config = require('./config');
// console.log(config);
var T = new Twit(config);
// console.log(T);




// Get Tweets/Search from Twitter

// var params = {
//     q: '#testmytwitterbot : since:2020-08-01',
//     count: 10
// }

// function getData(err, data, response) {
//     var tweets = data.statuses;
//     for (var i = 0; i < tweets.length; i++) {
//         console.log(tweets[i].text);
//     }
// }

// T.get('search/tweets', params, getData);





var params = {
    status: '#testmytwitterbot from Decoded_Cipher'
}

function postData(err, data, response) {
    if (err) {
        console.log('Something went Wrong!')
    } else {
        console.log('It worked!');
    }
}

T.post('statuses/update', params, postData);