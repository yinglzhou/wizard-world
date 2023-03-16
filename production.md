# wizard world

[Link to game](https://yinglzhou.github.io/wizard-world/)

## Description:
wizard world is a top-down shooter game that where the player's goal is to stay alive until the timer runs out. Players must defeat all the reapers that spawn with their fireballs in order to survive! 

## Controls:
Player movement is controlled via the arrow keys.
The direction that the fireballs are shot in are controlled with the WASD keys.

## Technical:
wizard world is coded entirely in vanilla Javascript. The game is updated using the setInterval function and is rendered on a canvas element.

## Feature Implementation:
The score panel on the right side updates as a bullet collides with an enemy. 
``` javascript
    function printScore() {
        const score = document.getElementById("scoreboard");
        score.innerHTML = `
        <p>
        Score: <br>
        <div>
        ${a.score}
        </div>
        </p>
        `
    }

    function collisionCheck () {
        for (let b = 0; b < a.bullets.length; b++) {
            let bullet = a.bullets[b];
            for (let e = 0; e < enemies.length; e++) {
                let enemy = enemies[e];
                const dx = bullet.posx - enemy.posx - 16;
                const dy = bullet.posy - enemy.posy - 24;
                const distance = Math.sqrt((dx * dx) + (dy * dy));
                if (distance < 7 + 30.75/2) {
                    a.bullets.splice(b, 1);
                    enemies.splice(e, 1);
                    a.score++;
                    break;
                }
            }
        }
    }
```

