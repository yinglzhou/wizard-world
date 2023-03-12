// //all my event listeners for key presses (player movement)
// export const right = ctx.drawImage(
//     this.rightSprite,
//     this.currentFrame * 32,
//     0,
//     32,
//     48,
//     this.posX,
//     this.posY,
//     32, //half the spritesheet
//     48
//   )

// export const left = ctx.drawImage(
//     this.leftSprite,
//     this.currentFrame * 32,
//     0,
//     32,
//     48,
//     this.posX,
//     this.posY,
//     32, //half the spritesheet
//     48
//   )
export const keyR = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        // debugger
        a.currentSprite = a.rightSprite;
        a.velX = 3;
        // this.currentSprite = this.rightSprite;
        // console.log(e.key)
    }
})

export const keyL = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        a.currentSprite = a.leftSprite;
        a.velX = -3;
        // console.log(e.key)
    }
})

export const keyRU = document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
        a.currentSprite = a.rightSprite;
        a.velX = 0;
        // console.log(e.key)
    }
})

export const keyLU = document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") {
        a.currentSprite = a.leftSprite;
        a.velX = 0;
        // console.log(e.key)
    }
})

export const keyU = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        // a.currentSprite = a.rightSprite;
        a.velY = -3;
        // console.log(e.key)
    }
})

export const keyD = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        // a.currentSprite = a.rightSprite;
        a.velY = 3;
        // console.log(e.key)
    }
})

export const keyUU = document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp") {
        // a.currentSprite = a.rightSprite;
        a.velY = 0;
        // console.log(e.key)
    }
})

export const keyDU = document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowDown") {
        a.velY = 0;
        // console.log(e.key)
    }
})