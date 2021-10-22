# Follow My Lead

## Objective of the game
---
The objective of 'Follow My Lead' is simple:


1. Player One initializes the game by entering any 4 key sequence of the keys 'WASD'. The inputed keys will display on the canvas once the sequence is complete, and remain on display for 3 seconds.

2. Player 2 must match the combination in its exact order within a 7 second time limit to continue playing, otherwise Player 1 wins.

3.  Player 1 enters a new 4 key sequence using the 'WASD' keys. Once again the sequence is displayed for 3 seconds & a popup saying the word 'REVERSE' appears     

4.  Player 2 must now match the key squence in reverse order within the 7 second time limit to advnance to the final round, otherwise Player 1 wins

5.  Player 1 enters a new 4 key sequence using the 'WASD' keys. Once again the sequence is displayed for 3 seconds & a popup saying the word 'OPPOSITE' appears

6. Player 2 must now match the key squence using the opposite keys (i.e. w = s, a = d) within the 7 second time limit to win the game, otherwise Player 1 wins


<img src="css/images/Follow My Lead - Window.png">
<img src="css/images/Follow My Lead - Window (1).png">
<img src="css/images/Follow My Lead - Window (2).png">

---
## MVP
---

* Render the game area using HTML, CSS, JS, and Canvas

* Render keypresses as simple arrows when a key sequence is complete 

* Render the round condition statement (i.e. REVERSE, OPPOSITE) and display a 7 second countdown timer.

* Initialize player 2's inputs once that 7 second timer starts. capture the first 4 key presses and stop sequence using setInterval

* Run a function comparing Player 1 inputs to Player 2 and pass to next round or end game by using an if else statement.

* Allow game to restart using a restart button

---
## Stretch Goals
---

* Render character models that react to button presses, conditions, etc.

* Add game mode that extends the game so player 2 can take the lead and player 1 
follows 

* Add support for diagonal keypress, longer key sequences

*  Make the game playable online

*  Add support for other input methods (i.e. gamepads, touch controls)