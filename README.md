# Language Interpretation and Recognition Interface (LIRI)

# What is LIRI?
LIRI is a command line node.js application which takes in user parameters and provides data.

# Setup

* Run NPM install
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This should install the following packages:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Twitter
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Spotify
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Request

# Using LIRI

LIRI functions by using a simple set of commands. Each command will appear as the following:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; node liri <function> <parameter>

* Spotify: node liri spotifyMe "song, artist, etc"
* omdb: node liri omdbMe "title, actor, etc"
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If the title is more than one word (eg. The Guardian) write the full title with spaces substituted with "+".
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; For example: "the+guardian"
* Twitter: node liri tweetMe 

# 