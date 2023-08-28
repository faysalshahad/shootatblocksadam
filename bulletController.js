import Bullet from "./bullet.js";

export default class BulletController {
    bullets = [];
    timerTillNextBullet = 0;
    constructor(canvas){
        this.canvas = canvas;
    };
    shoot(x, y, bulletSpeed, bulletDamage, bulletDelay){
        if (this.timerTillNextBullet <= 0) {
            /**Limiting the numbers of bullets can be shot at a time */
           /* if (this.bullets.length < 3) {
                this.bullets.push(new Bullet(x, y, bulletSpeed, bulletDamage));
            } */
            this.bullets.push(new Bullet(x, y, bulletSpeed, bulletDamage));
            this.timerTillNextBullet = bulletDelay;
        }
        this.timerTillNextBullet--;
    };
    draw(canvasContext){
        this.bullets.forEach((bullet)=>{
            if (this.isBulletOfScreen(bullet)) {
                /**Finding out if the bullets leave the canvas height.
                 * If it has left the height then deleting this bullet.
                 */
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
            }
            return bullet.draw(canvasContext);
        });
    };

    collideWith(sprite){
        /**Running a query to check if one of the bullet is at least 
         * hitting the enemy*/
        return this.bullets.some((bullet)=>{
            if (bullet.collideWith(sprite)) {
                /**Removing the bullet which had hit theenemy block. */
                this.bullets.splice(this.bullets.indexOf(bullet),1);
                return true;
            }
            return false;
        });
    };

    isBulletOfScreen(bullet){
        /**Checking if bullets u co-ordinates are less than or equal to
         * negative bullet height. If it is then return this calculation
         * to draw method. Basically we are checking whether the bullet has 
         * left the canvas screen or not. We only want to delete the bullet 
         * when it has left the canvas screen and not before that.
         */
        return bullet.y <= -bullet.height;
    };
}