import * as dir from "./inputs"

//canvas width = 750
//canvas height = 500
class Player {
    constructor(options) {
        this.name = options["name"];
        this.posX = options["pos"][0];
        this.posY = options["pos"][1];

        this.velX = 0;
        this.velY = 0;

        this.draw();
        // document.addEventListener("keydown", this.changeDir)
    }

    draw() {
        // debugger
        ctx.clearRect(0, 0, 750, 500);
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, 10, 0, Math.PI * 2, false);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.stroke();
    }
    
    move(e) {
        this.posX += this.velX;
        this.posY += this.velY;
    }

}




export default Player;