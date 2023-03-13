
class Bullet {
    constructor(posx, posy, dx, dy) {
        this.speed = 0.01;
        this.posx = posx;
        this.posy = posy;
        this.dx = dx;
        this.dy = dy;
        this.width = 10;
        this.height = 10;

    }


    update () {
        this.posx += this.dx;
        this.posy += this.dy;
    }

    draw(ctx) {
        // debugger
        this.posx += this.speed;
        ctx.fillStyle = "orange";


        ctx.beginPath();
        ctx.arc(this.posx, this.posy, 5, 0, Math.PI * 2, false);
        ctx.fillStyle = "orange"
        ctx.fill()
        ctx.strokeStyle = "red"
        ctx.stroke();

        // ctx.fillRect(this.posx, this.posy, this.width, this.height);
    }

}

export default Bullet;

