//entry file - what webpack is looking at
import * as dir from "./scripts/inputs";
import Example from "./scripts/example";
import Player from "./scripts/player";
import Bullet from "./scripts/bullet";
import BulletController from "./scripts/bulletController";

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

    //options {name: "me", pos: [375, 250]}
    // const bull = new BulletController(ctx);
    const a = new Player({name: "me", pos: [375, 250]})
    window.a = a;
    // window.bull = bull;

    function gameLoop() {
        // debugger
        a.draw();
        a.move();
        a.update();
        // debugger
    }

    setInterval(gameLoop, 1000/75)
});
