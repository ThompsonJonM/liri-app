// node.js variables
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fileSystem = require("fs");
var request = require("request");

// keys
var client = new Twitter(keys.twitterKeys);

var spotify = new Spotify(keys.spotifyKeys);

// omdb
var omdbURL = "http://www.omdbapi.com/?apikey=40e9cece&t=";

// arguments
var inputOne = process.argv[2];
var inputTwo = process.argv[3];

// switchboard
switch (action) {
    case "myTweets":
        myTweets();
        break;

    case "spotify":
        spotifyThis(value);
        break;
        
    case "omdb":
        omdbThis(value);
        break;
}
