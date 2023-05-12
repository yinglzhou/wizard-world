
export const backgroundMusic = function() {
    const music = document.createElement('audio');
    music.id = "background-music";
    
    music.innerHTML = `
    <source src="./assets/background-music.mp3" type="audio/mpeg">
    `
    document.body.appendChild(music)
    music.play();
    music.volume = 0.4;
}

export const stopMusic = function() {
    const music = document.getElementById('background-music');
    music.muted = true;
}

const playMusic = function() {
    const music = document.getElementById('background-music');
    music.muted = false;
}

export const toggleMusic = (volume) => function() {
    if (volume.innerHTML.split("volume")[1].includes("high")) {
        // debugger
        volume.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
        stopMusic();
    } else {
        volume.innerHTML = `<i class="fa-solid fa-volume-high" ></i>`
        playMusic();
    }
}

