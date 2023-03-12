//all my event listeners for key presses (player movement)

export const keyR = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        a.velX = 3;
        // console.log(e.key)
    }
})

export const keyL = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        a.velX = -3;
        // console.log(e.key)
    }
})

export const keyRU = document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
        a.velX = 0;
        // console.log(e.key)
    }
})

export const keyLU = document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") {
        a.velX = 0;
        // console.log(e.key)
    }
})

export const keyU = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        a.velY = -3;
        // console.log(e.key)
    }
})

export const keyD = document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        a.velY = 3;
        // console.log(e.key)
    }
})

export const keyUU = document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp") {
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