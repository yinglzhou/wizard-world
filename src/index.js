//entry file - what webpack is looking at
import * as dir from "./scripts/inputs";
import Player from "./scripts/player";
import Bullet from "./scripts/bullet";
import Enemy from "./scripts/enemy";
import { createEnemy, enemies } from "./scripts/enemy";
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
    // const enemies = [];
    
    // createEnemy(enemies);
    // function createEnemy() {
    //     let randWidth = Math.floor(Math.random() * 751);
    //     let randLength = Math.floor(Math.random() * 501);
    //     while (randWidth > 170 && randWidth < 580 || randLength > 115 && randLength < 385) {
    //         randWidth = Math.floor(Math.random() * 751);
    //         randLength = Math.floor(Math.random() * 501);
    //     }
    //     const enemy = new Enemy(randWidth, randLength);
    //     enemies.push(enemy);
    // }
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
        // debugger
        
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
    
    function updateEnemy() {
        if (a.score >= 5) {
            enemies.forEach((enemy) => {enemy.moveToPlayer(0.5)})
        }
        
        if (a.score >= 15) {
            enemies.forEach((enemy) => {enemy.moveToPlayer(0.75)})
        }
        
        enemies.forEach((enemy) => {enemy.moveToPlayer()})
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
    
    
    //bullets and enemies
    function collisionCheck () {
        //looping through bullets
        for (let b = 0; b < a.bullets.length; b++) {
            let bullet = a.bullets[b];
            // debugger
            for (let e = 0; e < enemies.length; e++) {
                let enemy = enemies[e];
                
                const dx = bullet.posx - enemy.posx - 15.375;
                const dy = bullet.posy - enemy.posy - 24;
                const distance = Math.sqrt((dx * dx) + (dy * dy));
                
                
                //radius + half of enemy width  
                if (distance < 7 + 15.375) {
                    
                    // console.log(`bulletx: ${[bullet.posx]}`);
                    // console.log(`enemyx: ${[enemy.posx]}`);
                    // console.log(`bullety: ${[bullet.posy]}`);
                    // console.log(`enemyy: ${[enemy.posy]}`);
                    
                    
                    a.bullets.splice(b, 1);
                    enemies.splice(e, 1);
                    a.score++;
                    // console.log(a.score);
                    break;
                }
            }
        }
    }
    
    function touchingEnemy () {
        // debugger
        let player = a;
        for (let e = 0; e < enemies.length; e++) {
            let enemy = enemies[e];
            
            const dx = enemy.posx - player.posX;
            const dy = enemy.posy - player.posY;
            const distance = Math.sqrt((dx * dx) + (dy * dy));
            
            
            if (distance < 32) {
                player.lives--;
                enemies.splice(e, 1);
                // console.log("lost a life bud")
                // console.log(player.lives)
                break;
            }
        }
    }
    
    let startbutton = document.querySelector("#startbutton")
    let modal = document.querySelector(".modal")
    debugger
    startbutton.addEventListener("click", () => {
        modal.style.display = "none";
        createEnemyInterval = setInterval(createEnemy, 1000)
        gameLoopInterval = setInterval(gameLoop, 1000/75)
        updateEnemyInterval = setInterval(updateEnemy, 1000/75)
        setInterval(collisionCheck, 1000/75);
        setInterval(touchingEnemy, 1000/75);
    })
});