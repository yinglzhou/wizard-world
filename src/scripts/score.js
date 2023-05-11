export const printScore = function(player) {
    const score = document.getElementById("scoreboard");
    score.innerHTML = `
    <p>
    Score: <br>
    <div>
    ${player.score}
    </div>
    </p>
    `
}