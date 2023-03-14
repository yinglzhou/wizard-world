//entry file - what webpack is looking at
import * as dir from "./scripts/inputs";
import Example from "./scripts/example";
import Player from "./scripts/player";
import Bullet from "./scripts/bullet";
import Enemy from "./scripts/enemy";

document.addEventListener("DOMContentLoaded", () => {
    console.log('hello world')
    //grabbing main from our html (index.html)
    // const main = document.getElementById("main");
    
    //making new instance of our example class & passing in main
    // new Example(main);
    const canvas = document.getElementById("game-screen");
    const ctx = canvas.getContext("2d");

    
    
    window.ctx = ctx;
    window.Player = Player;
    // debugger

    //options {name: "me", pos: [375, 250]}
    const a = new Player({name: "me", pos: [375, 250]})
    window.a = a;

    const enemies = [];
    window.enemies = enemies;
    function createEnemy() {
        let randWidth = Math.floor(Math.random() * 751);
        let randLength = Math.floor(Math.random() * 501);

        const enemy = new Enemy(randWidth, randLength);
        enemies.push(enemy);
        console.log("enemy spawned")
    }
    setInterval(createEnemy, 10000/2)

    
    let timer = 20;
    function gameLoop() {
        // debugger
        a.draw();
        enemies.forEach((enemy) => {enemy.draw(ctx)})
        a.move();
        a.update();
        timer -= 1/75;

        const min = Math.floor(timer/60);
        let sec = Math.floor(timer % 60);
        if (sec < 10) {
            sec = "0" + sec
        }
        if (timer === 0) {
            clearInterval(timer)
        } 
        ctx.font = "bold 30px Courier";
        ctx.fillStyle = "white"
        ctx.fillText(`${min}:${sec}`, 30, 30);
    }
    setInterval(gameLoop, 1000/75)

    function updateEnemy() {
        // debugger
        enemies.forEach((enemy) => {enemy.moveToPlayer()})
    }
    setInterval(updateEnemy, 1000/75)



    //bullets and enemies
    function collisionCheck () {
        //looping through bullets
        for (let b = 0; b < a.bullets.length; b++) {
            let bullet = a.bullets[b];
            // debugger
            for (let e = 0; e < enemies.length; e++) {
                let enemy = enemies[e];

                const dx = bullet.posx - enemy.posx - 16;
                const dy = bullet.posy - enemy.posy - 24;
                const distance = Math.sqrt((dx * dx) + (dy * dy));

                
                //radius + half of enemy width  
                if (distance < 7 + 30.75/2) {

                    console.log(`bulletx: ${[bullet.posx]}`);
                    console.log(`enemyx: ${[enemy.posx]}`);
                    console.log(`bullety: ${[bullet.posy]}`);
                    console.log(`enemyy: ${[enemy.posy]}`);
                    

                    a.bullets.splice(b, 1);
                    enemies.splice(e, 1);

                    break;
                }
            }
        }
    }
    setInterval(collisionCheck, 1000/75);

    function touchingEnemy () {

    }









    
    
    
});

// function collisionVel(bullet, enemy) {
//     const bulletx = bullet.posx;
//     const bullety = bullet.posy;
//     const bulletr = 7;              //bullet radius

//     const enemyx = enemy.posx;
//     const enemyy = enemy.posy;
//     const enemyw = 30.75;           //enemy width
//     const enemyh = 48;              //enemy height

//     if ()
// }