export const gameOver = function() {
    const modal = document.createElement("div");
    modal.id = "game-over-modal";
    
    modal.innerHTML = `<div class='content'>
    <h2>Game Over</h2>
    <h3>Final Score: ${a.score}</h3>
    <h4 onclick='location.reload()'>Play Again!</div>
    </div>`;
    document.body.appendChild(modal);
}

export const gameWin = function() {
    const modal = document.createElement("div");
    modal.id = "game-over-modal";
    
    modal.innerHTML = `<div class='content'>
    <h2>You Win!</h2>
    <h3>Final Score: ${a.score}</h3>
    <h4 onclick='location.reload()'>Play Again!</div>
    </div>`;
    document.body.appendChild(modal);
}