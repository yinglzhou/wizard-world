import * as dir from "./inputs"
// import BulletController from "./bulletController";
import Bullet from "./bullet"
//canvas width = 750
//canvas height = 500
class Player {
    constructor(options) {
        //sprite sheets
        this.rightSprite = new Image();
        this.rightSprite.src = "../assets/scaledright.png";

        this.leftSprite = new Image();
        this.leftSprite.src = "../assets/scaledleft.png";

        this.currentSprite = this.rightSprite;

        //positions
        this.name = options["name"];
        this.posX = options["pos"][0];
        this.posY = options["pos"][1];

        this.velX = 0;
        this.velY = 0;
        this.draw();

        //frame counts
        this.currentFrame = 0;
        this.frameCount = 0;
        this.delayFrame = 20;

        //bullets
        // this.bulletCon = options["bulletCon"]; //instance of bullet class
        this.bullets = [];
        this.keyPressed = 0;
    }
    
    shoot(key) {
        // debugger
        if (this.keyPressed === true) {
            console.log("shooting")
            // const speed = 10;
            const delay = 5;
            const bullX = this.posX;
            const bullY = this.posY;
            // debugger
            const bullet = new Bullet(bullX, bullY, delay);
            // debugger
            this.bullets.push(bullet)

            // debugger
            // for (let i = 0; i < this.bullets.length; i++) {
            //     const bullet = this.bullets[i];
            //     bullet.draw(ctx);
            // }
        }
    }

    update () {
        // debugger
        this.bullets.forEach((el) => {
            el.update()
        })
        for (let i = 0; i < this.bullets.length; i++) {
            const bullet = this.bullets[i];
            bullet.draw(ctx);
        }
    }

    printbullets () {
        // debugger

        for (let i = 0; i < this.bullets.length; i++) {
            const bullet = this.bullets[i];
            bullet.draw(ctx);
        }

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

        if (this.posX < 0) {
            this.posX = 0;
            this.velX = 0;
        }
        if (this.posX > 750 - 32) {
            this.posX = 750 - 32;
            this.velX = 0;
        }
        if (this.posY < 0) {
            this.posY = 0;
            this.velY = 0;
        }
        if (this.posY > 500 - 48) {
            this.posY = 500 - 48;
            this.velY = 0;
        }

    }

}


export default Player;











//my red circle 
    // ctx.beginPath();
    // ctx.arc(this.posX, this.posY, 10, 0, Math.PI * 2, false);
    // ctx.strokeStyle = "black";
    // ctx.fillStyle = "red"
    // ctx.fill()
    // ctx.stroke();