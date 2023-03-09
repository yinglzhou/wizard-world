# JS Project

## Background:
_____ is a game that follows a young wizard in his journey to defeat evil enemies and restore peace to the wizarding world. The player starts out in the center of the map and can move around using their arrow keys. Enemies will spawn from entrance points on the sides of the map. The player can use their WASD keys to shoot bullets in the corresponding directions. The goal of each level is to stay alive until the time runs out. 


## Functionality & MVPs:
Wizards will be able to:
- Move around with their arrow keys
- Shoot bullets in different directions with their WASD keys

## Wireframes:
![Alt text](wireframe.png)
- The title/banner will display the name of the game. 
    - To the right of the title, there will be links to Github and LinkedIn.
- In the game screen, the player's spawn position is represented as the little man in the center. 
    - The possible spawn locations of enemies are represented with the little geo markers. 
    - The timer for every level will be displayed at the top right corner of the game screen. 
    - On the left of the timer, there will be little hearts indicating how many lives the player has.
- Towards the right, there will be a panel for basic instructions for movement and shooting. 

**(bonus)**
- There is also a scoreboard that I may use to count the amount of enemies that players have taken down. 

## Technologies, Libraries, APIs:
The following technologies will be implemented:
- `Canvas API` for rendering the map, player, and enemies.
- `Webpack` for bundling and transpiling JavaScript Code.
- `npm` for managing dependencies

## Implementation Timeline: 
- **Friday Afternoon & Weekend:** 
    * Setup project (Webpack & npm)
    * Get the positioning for canvas right for the game screen.
    * Research a bit more on Canvas API
    * Create `Player` and `Enemy` classes
        * Maybe a class for `Map`?
    * Be able to get a player to appear in the spawn 
- **Monday:**
    * Being able to get the player to move when the arrow keys are pressed
    * Work on getting the shooting to work with the WASD keys
    * Getting enemies to spawn and follow the player
    * Maybe start on collisions and getting lives to decrease when the player touches an enemy
- **Tuesday:**
    * Finish up collision control and being able to erase enemies when they die
    * Work on end of the game / (loss/win)
- **Wednesday:**
    * Work on styling of everything
    * Being able to add finishing touches to the game
- **Thursday Morning:**


## Bonus features
* adding power-ups
* changing enemies (making more powerful enemies)
* work on a scoreboard that allows players to keep track of how many enemies they've killed
