class Enemy {
    //width = 30.75
    //height = 48
    constructor (posx, posy) {
        this.posx = posx;
        this.posy = posy;
        this.player = a;

        this.rightEnemy = new Image();
        this.rightEnemy.src = "./assets/scaledrightenemy.png"

        this.leftEnemy = new Image();
        this.leftEnemy.src = "./assets/scaledleftenemy.png" //width of each frame is 30.75
        

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

    moveToPlayer(speed) {
        if (!speed) {speed = 1};
        const dx = this.player.posX - this.posx; //+16
        const dy = this.player.posY - this.posy; //+24
        const distance = Math.sqrt((dx * dx) + (dy * dy))
        let vx = 0;
        let vy = 0;

        if (distance > 0) {
            vx = (dx/distance) * speed
            vy = (dy/distance) * speed  //optional multiply by speed
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

export const enemies = [];
export const createEnemy = function () {
    debugger
    let randWidth = Math.floor(Math.random() * 751);
    let randLength = Math.floor(Math.random() * 501);
    while (randWidth > 170 && randWidth < 580 || randLength > 115 && randLength < 385) {
        randWidth = Math.floor(Math.random() * 751);
        randLength = Math.floor(Math.random() * 501);
    }
    const enemy = new Enemy(randWidth, randLength);
    enemies.push(enemy);
}

export const updateEnemy = (player) => () => {
    if (player.score >= 5) {
        enemies.forEach((enemy) => {enemy.moveToPlayer(0.5)})
    }
    
    if (player.score >= 15) {
        enemies.forEach((enemy) => {enemy.moveToPlayer(0.75)})
    }
    
    enemies.forEach((enemy) => {enemy.moveToPlayer()})
}
export default Enemy;