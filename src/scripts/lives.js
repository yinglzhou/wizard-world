export const heart = function(player) {
    let redheart = new Image();
    redheart.src = "./assets/1redheart.png"
    
    let emptyheart = new Image ();
    emptyheart.src = "./assets/1emptyheart.png"
    // debugger
    if (!player) {return}
    if (player.lives === 3) {
        ctx.drawImage(redheart, 0, 0, 32, 32, 620, 15, 32, 32)
        ctx.drawImage(redheart, 0, 0, 32, 32, 585, 15, 32, 32)
        ctx.drawImage(redheart, 0, 0, 32, 32, 550, 15, 32, 32)
    }
    if (player.lives === 2) {
        ctx.drawImage(emptyheart, 0, 0, 32, 32, 620, 15, 32, 32)
        ctx.drawImage(redheart, 0, 0, 32, 32, 585, 15, 32, 32)
        ctx.drawImage(redheart, 0, 0, 32, 32, 550, 15, 32, 32)
    }
    if (player.lives === 1) {
        ctx.drawImage(emptyheart, 0, 0, 32, 32, 620, 15, 32, 32)
        ctx.drawImage(emptyheart, 0, 0, 32, 32, 585, 15, 32, 32)
        ctx.drawImage(redheart, 0, 0, 32, 32, 550, 15, 32, 32)
    }
    if (player.lives === 0) {
        ctx.drawImage(emptyheart, 0, 0, 32, 32, 620, 15, 32, 32)
        ctx.drawImage(emptyheart, 0, 0, 32, 32, 585, 15, 32, 32)
        ctx.drawImage(emptyheart, 0, 0, 32, 32, 550, 15, 32, 32)
    }
}