hackernews cli
==========

###A command line tool to print out the latest posts on Hacker News to your terminal.

---

If you're anything like me, you visit Hacker news at least 4 times a day and you spend a lot of time in the terminal.

I usually open the Hacker News site in my browser and decide if any of the headlines catch my attention, I thought it would be cool if I could see a summary of the new featured posts in my terminal and only open them in a browser if I wanted to read them, so I made this simple tool.

![Preview](http://s3-eu-west-1.amazonaws.com/matt-github/hn.png)

##Installation

Before installation you will need node/npm installed.


    sudo npm install -g hacker-news-cli
    
##Usage

The global installation will symlink an executable script and place it in your PATH. To use with hacker news simply type:

    hn
    
or for designer news:

    dn
    
You will then be prompted to open a post. Type the number of the post to open a post or type 0 to quit and return to your terminal session.

Version history

0.1.0 - `stephenway` added dn command

0.2.0 - Support for Windows and Linux added