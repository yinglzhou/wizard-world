class Enemy {
    //width = 30.75
    //height = 48
    constructor (posx, posy) {
        this.posx = posx;
        this.posy = posy;
        this.player = a;
        // debugger
        // this.playerposx = a.posx;
        // this.playerposy = a.posy;
        this.rightEnemy = new Image();
        this.rightEnemy.src = "../assets/scaledrightenemy.png"

        this.leftEnemy = new Image();
        this.leftEnemy.src = "../assets/scaledleftenemy.png" //width of each frame is 30.75
        

        this.currentEnemy = this.leftEnemy;
        //frame things
        this.currentFrame = 0;
        this.frameCount = 0;
        this.delayFrame = 20;
    }
    
    draw(ctx) {
        // ctx.fillRect(this.posx, this.posy, 32, 48)
        // ctx.strokeStyle = "black";
        // ctx.fillStyle = "red"

        ctx.drawImage(
            this.currentEnemy,
            this.currentFrame * 30.75,
            0,
            30.75,
            48,
            this.posx,
            this.posy,
            30.75,
            48
        )

        this.frameCount++;
        if (this.frameCount >= this.delayFrame) {
            this.frameCount = 0;
            this.currentFrame = (this.currentFrame + 1) % 4;
        }
    }

    moveToPlayer () {
        // debugger
        const dx = this.player.posX - this.posx; //+16
        const dy = this.player.posY - this.posy; //+24
        const distance = Math.sqrt((dx * dx) + (dy * dy))
        let vx = 0;
        let vy = 0;
    // debugger
        if (distance > 0) {
            vx = (dx/distance)
            vy = (dy/distance) //optional multiply by speed
        }
        if (vx > 0) {
            this.currentEnemy = this.rightEnemy;
        }
        if (vx < 0) {
            this.currentEnemy = this.leftEnemy;
        }

        this.posx += vx;
        this.posy += vy;
    }



}


export default Enemy;