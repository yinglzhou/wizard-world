//bullets and enemies collision

export const collisionCheck = (player, enemies) => function () {
    //looping through bullets
    for (let b = 0; b < player.bullets.length; b++) {
        let bullet = player.bullets[b];
        // debugger
        for (let e = 0; e < enemies.length; e++) {
            let enemy = enemies[e];
            
            const dx = bullet.posx - enemy.posx - 15.375;
            const dy = bullet.posy - enemy.posy - 24;
            const distance = Math.sqrt((dx * dx) + (dy * dy));
            
            //radius + half of enemy width  
            if (distance < 7 + 15.375) {
                
                player.bullets.splice(b, 1);
                enemies.splice(e, 1);
                player.score++;
                // console.log(a.score);
                break;
            }
        }
    }
}

//player and enemies collision

export const touchingEnemy = (player, enemies) => function () {
    for (let e = 0; e < enemies.length; e++) {
        let enemy = enemies[e];
        
        const dx = enemy.posx - player.posX;
        const dy = enemy.posy - player.posY;
        const distance = Math.sqrt((dx * dx) + (dy * dy));
        
        
        if (distance < 32) {
            player.lives--;
            enemies.splice(e, 1);
            break;
        }
    }
}