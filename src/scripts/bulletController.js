// import Bullet from "./bullet";
// class BulletController {
//     bullets = [];
//     timeGap = 2;

//     constructor(ctx) {
//         this.ctx = ctx;
//     }

//     shoot(options) {
//         if (this.timeGap <= 2) {
//             this.bullets.push(new Bullet(options));
//             this.timeGap = options["delay"];
//         }
//         // console.log("shoot");
//         this.timeGap--; 
//     }
    
//     draw(ctx) {
//         // debugger
//         this.bullets.forEach((bullet) => {bullet.draw(ctx)})
//     }
// }

// export default BulletController;