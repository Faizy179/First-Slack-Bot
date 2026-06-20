##  -First Slack Bot -- Riddle Bot
A fun, interactive Slack bot built with Node.js and the Slack Bolt framework. It features a custom riddle game, live API integration for cat facts, and a few fun utility commands. Currently deployed and running 24/7 on the hack club slack

## ---- Features -----
-- **/the-goat-riddle** -- generates a random riddle from the bank of pre defined riddles and displays it
-- **/the-goat-guess [your guess]** -- allows the user to guess the answer to the riddle
-- **/the-goat-ping** - checks the bots latency
-- **/the-goat-catfact** -- Fetches a random cat fact using an api and diplays it on slack
-- **/the-goat-pizza** -- the bot eats pizza because duh pizza
-- **/the-goat-help** -- displays a list of available commands

## ----- Tech Stack ------
**Node.js** - The runtime enviorment
**[@slack/bolt]** - The official slack javascript framework
**systemd** - used for 24/7 background task management

