#!/usr/bin/env node

var FeedParser = require('feedparser')
  , request = require('request')
  , posts = []
  , colors = require('colors')
  , prompt = require('prompt')
  , exec = require('child_process').exec
  , platform = require('os').platform()
  , i = 1;

const shellOpenCommand = {
  'win32': 'start ',
  'linux': 'xdg-open ',
  'darwin': 'open '
}[platform];

request('https://news.layervault.com/?format=rss')
  .pipe(new FeedParser())
  .on('error', function(error) {
    console.log("An error occured");
  })
  .on('readable', function () {
    var stream = this, item;
    if(i < 29){
      while (item = stream.read()) {
      posts.push(item);
      console.log(i.toString().blue + ". " + item.title);
      i++;
    }
    }
  })
  .on('finish', function(){
    promptForPost();
  });

function promptForPost() {
  prompt.start();

  var schema = {
    properties: {
      post: {
        message: 'Type post number to open, or 0 to quit',
        required: true
      },
    }
  };

  prompt.get(schema, function (err, result) {
    if(result.post !== "0"){
      var i = parseInt(result.post);
      if(isNaN(i) || i > posts.length || i < 1) {
        console.log("Invalid post number");
      } else {
        exec(shellOpenCommand + posts[i - 1].link);
      }
      promptForPost();
    }
  });
}
