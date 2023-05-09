//entry file - what webpack is looking at
import * as dir from "./scripts/inputs";
import Player from "./scripts/player";
import Bullet from "./scripts/bullet";
import Enemy from "./scripts/enemy";
import { createEnemy, enemies, updateEnemy } from "./scripts/enemy";
import { collisionCheck, touchingEnemy } from "./scripts/collision";
import { heart } from "./scripts/lives";
import { timer, timerPrint } from "./scripts/timer";
import { gameOver, gameWin } from "./scripts/endgame";

let gameLoopInterval;
let updateEnemyInterval;
let createEnemyInterval;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-screen");
    const ctx = canvas.getContext("2d");
    window.ctx = ctx;
    
    window.Player = Player;
    
    //options {name: "me", pos: [375, 250]} midpoint
    const a = new Player({name: "me", pos: [375, 250]})
    window.a = a;

    let timer = 61
    function gameLoop() {
        a.draw();
        heart(a);
        enemies.forEach((enemy) => {enemy.draw(ctx)})
        a.move();
        a.update();
        timer -= 1/75;
        timerPrint(timer);
        printScore();
        if (a.lives <= 0) {
            clearInterval(gameLoopInterval);
            clearInterval(updateEnemyInterval);
            clearInterval(createEnemyInterval);
            gameOver();
        }
        if (timer <= 0) {
            clearInterval(gameLoopInterval);
            clearInterval(updateEnemyInterval);
            clearInterval(createEnemyInterval);
            gameWin();
        }
        
    }
    
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

    let startbutton = document.querySelector("#startbutton")
    let modal = document.querySelector(".modal")

    startbutton.addEventListener("click", () => {
        modal.style.display = "none";
        createEnemyInterval = setInterval(createEnemy, 1000)
        gameLoopInterval = setInterval(gameLoop, 1000/75)
        updateEnemyInterval = setInterval(updateEnemy(a), 1000/75)
        setInterval(collisionCheck(a, enemies), 1000/75);
        setInterval(touchingEnemy(a, enemies), 1000/75);
    })
});