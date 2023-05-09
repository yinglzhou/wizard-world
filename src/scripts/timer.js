// export const timer = 61;

export const timerPrint = function(timer) {
    const min = Math.floor(timer/60);
    let sec = Math.floor(timer % 60);
    if (sec < 10) {
        sec = "0" + sec
    }
    ctx.font = "bold 40px rainyheart";
    ctx.fillStyle = "white"
    
    if (timer >= 0) {
        ctx.fillText(`${min}:${sec}`, 670, 40);
    }
}
