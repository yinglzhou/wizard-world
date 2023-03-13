// import BulletController from "./bulletController";
class Bullet {
    constructor(posx, posy, delay) {
        this.speed = 0.01;
        this.delay = delay;
        this.posx = posx + 16;
        this.posy = posy + 24;
        this.dx = 5;
        this.dy = 5;
        this.width = 10;
        this.height = 10;
    }


    update () {
        this.posx += this.dx + this.speed;
    }

    draw(ctx) {
        // debugger
        this.posx += this.speed;
        // console.log("trying to draw bullet")
        ctx.fillStyle = "red";
        ctx.fillRect(this.posx, this.posy, this.width, this.height);
    }

}

export default Bullet;

