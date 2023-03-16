import * as dir from "./inputs"
import Bullet from "./bullet"
//canvas width = 750
//canvas height = 500
class Player {
    //width = 32
    //height = 48
    constructor(options) {
        //sprite sheets
        this.rightSprite = new Image();
        this.rightSprite.src = "/src/assets/scaledright.png";

        this.leftSprite = new Image();
        this.leftSprite.src = "/src/assets/scaledleft.png";

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
        this.bullets = [];
        this.keyPressed = 0;


        //lives
        this.lives = 3;
        this.score = 0;
    }
    
    shoot(key) {
        // debugger
        let dx;
        let dy;
        const bullX = this.posX + 16;
        const bullY = this.posY + 24;
        if (this.keyPressed === true) {
            if (key === "KeyD") {
                let dx = 5;
                let dy = 0;
                const bullet = new Bullet(bullX, bullY, dx, dy);
                this.bullets.push(bullet);
            }
            if (key === "KeyA") {
                let dx = -5;
                let dy = 0;
                const bullet = new Bullet(bullX, bullY, dx, dy);
                this.bullets.push(bullet);
            }
            if (key === "KeyW") {
                let dx = 0;
                let dy = -5;
                const bullet = new Bullet(bullX, bullY, dx, dy);
                this.bullets.push(bullet);
            }
            if (key === "KeyS") {
                let dx = 0;
                let dy = 5;
                const bullet = new Bullet(bullX, bullY, dx, dy);
                this.bullets.push(bullet);
            }
        }

    }

    update () {
        // debugger
        this.bullets.forEach((el) => {
            el.update(this.bullets)
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
            this.currentFrame * 32, //0
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