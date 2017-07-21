# Language Interpretation and Recognition Interface (LIRI)

# What is LIRI?
LIRI is a command line node.js application which takes in user parameters and provides data.

# Setup

* Run NPM install
    + This should install the following packages:
        * Twitter
        * Spotify
        * Request

# Using LIRI

LIRI functions by using a simple set of commands. Each command will appear as the following:
* node liri <function> <parameter>
    + Spotify: node liri spotifyMe "song, artist, etc"
    + omdb: node liri omdbMe "title, actor, etc"
        * If the title is more than one word (eg. The Guardian) write the full title with spaces substituted with "+".
        * For example: "the+guardian"
    + Twitter: node liri tweetMe 

# 