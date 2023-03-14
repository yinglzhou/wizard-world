
class Bullet {
    //radius of bullet is 7
    constructor(posx, posy, dx, dy) {
        this.speed = 0.01;
        this.posx = posx;
        this.posy = posy;
        this.dx = dx;
        this.dy = dy;
        this.width = 10;
        this.height = 10;
    }


    update (bulletArr) {
        this.posx += this.dx;
        this.posy += this.dy;
        //if bullet is offscreen then remove it
        if (this.posx < 0 || this.posy < 0 || this.posx > 750 || this.posy > 500) {
            let i = bulletArr.indexOf(this)
            if (i > -1) { //exists
                bulletArr.splice(i, 1);
            }
        }
    }

    draw(ctx) {
        // debugger
        this.posx += this.speed;
        ctx.fillStyle = "orange";


        ctx.beginPath();
        ctx.arc(this.posx, this.posy, 7, 0, Math.PI * 2, false); //radius is 5
        ctx.fillStyle = "orange"
        ctx.fill()
        ctx.strokeStyle = "red"
        ctx.stroke();
    }

}

export default Bullet;

