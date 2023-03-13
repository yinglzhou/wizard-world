// //all my event listeners for key presses (player movement)
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
        // debugger
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






//for alphabet e.key === "d"
// e.code === "KeyD"
export const rightShoot = document.addEventListener("keydown", (e) => {
    if (e.code === "KeyD") {
        a.keyPressed = true;
        // debugger 
        a.shoot(e.code);
        // a.printbullets();
        console.log(a.keyPressed)
        console.log(e.key)
    }
})
export const notRightShoot = document.addEventListener("keyup", (e) => {
    if (e.code === "KeyD") {
        // debugger

        a.keyPressed = false;
        // debugger
        // console.log(a.keyPressed)
        // console.log(e.key)
    }
})

export const leftShoot = document.addEventListener("keydown", (e) => {
    if (e.code === "KeyA") {
        a.keyPressed = true;
        // debugger 
        a.shoot(e.code);
        // a.printbullets();
        console.log(a.keyPressed)
        console.log(e.key)
    }
})
export const notLeftShoot = document.addEventListener("keyup", (e) => {
    if (e.code === "KeyA") {
        // debugger

        a.keyPressed = false;
        // console.log(a.keyPressed)
        // console.log(e.key)
    }
})

export const upShoot = document.addEventListener("keydown", (e) => {
    if (e.code === "KeyW") {
        a.keyPressed = true;
        // debugger 
        a.shoot(e.code);
        // a.printbullets();
        console.log(a.keyPressed)
        console.log(e.key)
    }
})
export const notUpShoot = document.addEventListener("keyup", (e) => {
    if (e.code === "KeyW") {
        // debugger

        a.keyPressed = false;
        // console.log(a.keyPressed)
        // console.log(e.key)
    }
})

export const downShoot = document.addEventListener("keydown", (e) => {
    if (e.code === "KeyS") {
        a.keyPressed = true;
        // debugger 
        a.shoot(e.code);
        // a.printbullets();
        console.log(a.keyPressed)
        console.log(e.key)
    }
})
export const notDownShoot = document.addEventListener("keyup", (e) => {
    if (e.code === "KeyS") {
        // debugger

        a.keyPressed = false;
        // console.log(a.keyPressed)
        // console.log(e.key)
    }
})