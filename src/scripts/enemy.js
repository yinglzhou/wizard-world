class Enemy {
    constructor (posx, posy) {
        this.posx = posx;
        this.posy = posy;
    }

    draw(ctx) {
        // debugger
        ctx.beginPath();
        ctx.arc(this.posx, this.posy, 10, 0, Math.PI * 2, false);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.stroke();
    }

    update() {

    }
}


export default Enemy;