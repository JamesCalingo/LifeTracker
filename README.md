# LifeTracker
A simple HP tracker for games where players have to track hit points, like CCGs and RPGs. Companion app:
(https://jamescalingo.com/ScoreKeeper)

# How it Works
First, the user has to select whether they are using the app just for themself or for a group of people (up to four; I don't foresee needing more than that). Then, if the user is playing multiplayer, the app will ask how many players are playing.

The single player version will prompt for a name and starting Hit Points (HP) value, and then display those values along with multiple buttons to adjust the HP (1, 5, 10, 50, and 100).

The multiplayer version will display everyone's HP and buttons to add or subtract points. For the time being, each player is set to 50 HP for multiplayer games, but I am working on a method to have this number be customizable depending on the game. Player names, however, are customizable just like in the ScoreKeeper app.

# Technology Used

- Html
- CSS
- JavaScript
- JQuery