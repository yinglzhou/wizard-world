//entry file - what webpack is looking at
import * as dir from "./scripts/inputs";
import Player from "./scripts/player";
import Bullet from "./scripts/bullet";
import Enemy from "./scripts/enemy";
import { createEnemy, enemies, updateEnemy } from "./scripts/enemy";
import { collisionCheck, touchingEnemy } from "./scripts/collision";
import { heart } from "./scripts/lives";

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

    // debugger 61
    let timer = 10;
    function gameLoop() {
        a.draw();
        heart(a);
        enemies.forEach((enemy) => {enemy.draw(ctx)})
        a.move();
        a.update();
        timer -= 1/75;
        timerPrint();
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
    
    function timerPrint() {
        const min = Math.floor(timer/60);
        let sec = Math.floor(timer % 60);
        if (sec < 10) {
            sec = "0" + sec
        }
        ctx.font = "bold 40px rainyheart";
        ctx.fillStyle = "white"
        
        if (timer >= 0) {
            ctx.fillText(`${min}:${sec}`, 670, 40);
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

    function gameOver() {
        const modal = document.createElement("div");
        modal.id = "game-over-modal";
        
        modal.innerHTML = `<div class='content'>
        <h2>Game Over</h2>
        <h3>Final Score: ${a.score}</h3>
        <h4 onclick='location.reload()'>Play Again!</div>
        </div>`;
        document.body.appendChild(modal);
    }

    function gameWin() {
        const modal = document.createElement("div");
        modal.id = "game-over-modal";
        
        modal.innerHTML = `<div class='content'>
        <h2>You Win!</h2>
        <h3>Final Score: ${a.score}</h3>
        <h4 onclick='location.reload()'>Play Again!</div>
        </div>`;
        document.body.appendChild(modal);
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