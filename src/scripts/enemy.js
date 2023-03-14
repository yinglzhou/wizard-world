class Enemy {
    
    constructor (posx, posy) {
        this.posx = posx;
        this.posy = posy;
        let player = a;
        // debugger
        this.playerposx = a.posx;
        this.playerposy = a.posy;

    }
    
    draw(ctx) {
        // debugger
        this.update()
        ctx.beginPath();
        ctx.arc(this.posx, this.posy, 10, 0, Math.PI * 2, false);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.stroke();
    }
    
    update() {
        if (this.playerposx > this.posx) {
            this.dx = 5;
        } else {
            this.dx = -5;
        }
        this.posx += this.dx;
        this.posy += 0;

        if (this.posx <= 10) {
            this.posx = 10;
        }
        if (this.posy <= 10) {
            this.posy = 10;
        }
        if (this.posx >= 740) {
            this.posx = 740;
        }
        if (this.posy >= 490) {
            this.posy = 490;
        }

    }
}


export default Enemy;