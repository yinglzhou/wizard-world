import * as dir from "./inputs"

//canvas width = 750
//canvas height = 500
class Player {
    constructor(options) {
        this.rightSprite = new Image();
        this.rightSprite.src = "../assets/scaledright.png";

        this.leftSprite = new Image();
        this.leftSprite.src = "../assets/scaledleft.png";

        this.currentSprite = this.rightSprite;

        this.name = options["name"];
        this.posX = options["pos"][0];
        this.posY = options["pos"][1];

        this.velX = 0;
        this.velY = 0;
        this.draw();

        this.currentFrame = 0;
        this.frameCount = 0;
        this.delayFrame = 20;
    }

    draw() {
        ctx.clearRect(0, 0, 750, 500);
        // debugger

        ctx.drawImage(
            this.currentSprite,
            this.currentFrame * 32,
            0,
            32,
            48,
            this.posX,
            this.posY,
            32, //half the spritesheet
            48
          )

        // const right = ctx.drawImage(
        //     this.rightSprite,
        //     this.currentFrame * 32,
        //     0,
        //     32,
        //     48,
        //     this.posX,
        //     this.posY,
        //     32, //half the spritesheet
        //     48
        //   )
        
        // const left = ctx.drawImage(
        //     this.leftSprite,
        //     this.currentFrame * 32,
        //     0,
        //     32,
        //     48,
        //     this.posX,
        //     this.posY,
        //     32, //half the spritesheet
        //     48
        //   )
        //   debugger

        this.frameCount++;
        if (this.frameCount >= this.delayFrame) {
            this.frameCount = 0;
            this.currentFrame = (this.currentFrame + 1) % 2;
        }
    }
    
    move(e) {
        this.posX += this.velX;
        this.posY += this.velY;
    }

}


//my red circle 
    // ctx.beginPath();
    // ctx.arc(this.posX, this.posY, 10, 0, Math.PI * 2, false);
    // ctx.strokeStyle = "black";
    // ctx.fillStyle = "red"
    // ctx.fill()
    // ctx.stroke();

export default Player;