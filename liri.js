// node.js variables
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fileSystem = require("fs");
var request = require("request");

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

// arguments
var inputOne = process.argv[2];
var inputTwo = process.argv[3];

