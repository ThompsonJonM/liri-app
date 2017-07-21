// arguments
var inputOne = process.argv[2];
var inputTwo = process.argv[3];

// node.js variables
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fileSystem = require("fs");
var request = require("request");
var keys = require("./keys.js")

// keys
var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});

var spotify = new Spotify({
    id: keys.spotifyKeys.clientId_key,
    secret: keys.spotifyKeys.clientSecret_key
});

// omdb
var omdbURL = "http://www.omdbapi.com/?apikey=40e9cece&t=";

// spotify
function spotifyMe(){
        spotify.search({ type: 'track', query: inputTwo}, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } 
            for (var i = 0; i < 6; i++) {
                console.log("\n--------------------------------------------------------");
                console.log("Artist(s):" + ' ' + data.tracks.items[i].artists[0].name);
                console.log("Song Name:" + ' ' + data.tracks.items[i].name);
                console.log("Spotify Link:" + ' ' + data.tracks.items[i].preview_url);
                console.log("Album:" + ' ' + data.tracks.items[i].album.name);
                console.log("\n--------------------------------------------------------");
                console.log("\n");
            }
        });
}

// omdb
function omdbMe(body) {
    var omdbBody = JSON.parse(body);
    console.log("\n--------------------------------------------------------");
    console.log('Title:' + ' ' +omdbBody.Title);
    console.log('Year:' + ' ' +omdbBody.Year);
    // must fix
    //console.log('Rating:' + ' ' +omdbBody.Ratings[0].Source + ':' + ' ' + obj.Ratings[0].Value );
    //console.log('Rating:' + ' ' +omdbBody.Ratings[1].Source + ':' + ' ' + obj.Ratings[1].Value );
    console.log('Country:' + ' ' +omdbBody.Country);
    console.log('Language:' + ' ' +omdbBody.Language);
    console.log('Plot:' + ' ' +omdbBody.Plot);
    console.log('Actors:' + ' ' +omdbBody.Actors)
    console.log("\n--------------------------------------------------------");
    console.log("\n");
}

if (!inputOne){
    console.log("LIRI requires a function input to operate.");
    return;
}

switch(inputOne) {
  
    case 'tweetMe':
        if(inputOne && inputTwo){
            console.log("Please do not enter a parameter after tweetMe.");
            return;
        }
        client.get('https://api.twitter.com/1.1/statuses/user_timeline.json', function(error, tweets, response) {
            tweets.forEach(function(element) {
            console.log("\n--------------------------------------------------------");
            console.log(element.created_at + '     ' +  element.text);
            console.log("\n--------------------------------------------------------");
            console.log("\n");
        });
    });
    break;
    
    case 'spotifyMe':
        if (!inputTwo){
            spotify.search({ type: 'track', query: 'Thrice'}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("\n--------------------------------------------------------");
        console.log("Artist(s):" + ' ' + data.tracks.items[0].album.artists[0].name);
        console.log("Song Name:" + ' ' + data.tracks.items[0].name);
        console.log("Spotify Link:" + ' ' + data.tracks.items[0].preview_url);
        console.log("Album:" + ' ' + data.tracks.items[0].album.name);
        console.log("\n--------------------------------------------------------");
        console.log("\n");
        });
        return;
        }
        spotifyMe();
        break;
    
    case 'omdbMe':
        if (!inputTwo){
            request(omdbURL + 'Terminator', function (error, response, body){
                omdbMe(body);
        });
            return;
        }

        request(omdbURL + inputTwo, function (error, response, body){
            omdbMe(body);
        });
        break;
    
    case 'do-what-it-says':
        fileSystem.readFile('./random.txt','utf8', function(err, data){
            var dataArr = data.split(',');
            inputTwo = dataArr[1];
            
            if (dataArr[0] === "spotifyMe") {
                spotifyMe(dataArr[1]);
            } else if (dataArr[0] === "omdbMe") {
                omdbMe(dataArr[1]);
            }
        }); 

        break;
}
