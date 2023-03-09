//entry file - what webpack is looking at
import Example from "./scripts/example";
import Player from "./scripts/player"

document.addEventListener("DOMContentLoaded", () => {
    console.log('hello world')
    //grabbing main from our html (index.html)
    // const main = document.getElementById("main");
    
    //making new instance of our example class & passing in main
    // new Example(main);
    
    const canvas = document.getElementById("game-view");
    const ctx = canvas.getContext("2d");
    
    window.ctx = ctx;
    window.Player = Player;

});
