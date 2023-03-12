//entry file - what webpack is looking at
import Example from "./scripts/example";
import Player from "./scripts/player";
import * as dir from "./scripts/inputs";

document.addEventListener("DOMContentLoaded", () => {
    console.log('hello world')
    //grabbing main from our html (index.html)
    // const main = document.getElementById("main");
    
    //making new instance of our example class & passing in main
    // new Example(main);
    const canvas = document.getElementById("game-screen");
    const ctx = canvas.getContext("2d");

    //background
    // const img = document.getElementById("cave");
    // ctx.drawImage(img, 0, 0)
    // const img = new Image();
    // img.onload = () => {
    //     ctx.drawImage(img, 0, 0);
    // }
    // img.src = "./assets/cavefloor.png";
    // img.addEventListener("load", (e) => {
    //     ctx.drawImage(img, 0, 0);
    // });

    // window.img = img;

    
    
    window.ctx = ctx;
    window.Player = Player;

    //options {name: "me", pos: [375, 250]}
    const a = new Player({name: "me", pos: [375, 250]})
    window.a = a;

    
    function gameLoop() {
        a.draw();
        a.move();
    }

    setInterval(gameLoop, 1000/75)
});
