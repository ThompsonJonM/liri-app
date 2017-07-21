# LIRI (Language Interpretation and Recognition Interface)

# What is LIRI?
LIRI is a command line node.js application which takes in user parameters and provides data.

# Setup

* Run NPM install
    + This should install the following packages:
        * Twitter
        * Spotify
        * Request

# Available Parameters
LIRI comes with four parameters out of the box. They are:
* spotifyMe
* omdbMe
* tweetMe
* do-what-it-says

# Using LIRI

LIRI functions by using a simple set of commands. Each command will appear as the following:
* node liri < function > < parameter > ( see above for a listing of parameters )
    + Spotify: node liri spotifyMe "song, artist, etc"
    + omdb: node liri omdbMe "title, actor, etc"
        * If the input is more than one word (eg. The Guardian) write the full input with spaces substituted with "+".
        * For example: "the+guardian" and "bruce+willis"
    + Twitter: node liri tweetMe 
        * This is the only node command which will not require a parameter input
        * Please make sure not to write anything after "tweetMe"
    + do-what-it-says: node liri do-what-it-says
        * This command will take input from the random.txt file found within the repository and output data based on the input.