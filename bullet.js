export default class Bullet {

    /**Creating a color array for bullets where we can randomly choose
     * the color for our bullets.
     */
    bulletColors = [
        "red" , "blue" , "green" , "yellow" , "pink" , "indigo" , 
        "orange" , "purple" , "brown", "coral", "grey", "white"
    ];

    constructor(x, y, speed, damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.width = 8;
        this.height = 18;
        //this.color = "red";
        this.color = this.bulletColors[Math.floor(Math.random() * this.bulletColors.length)];
    };
    draw(canvasContext){
        canvasContext.fillStyle = this.color;
        this.y -= this.speed;
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
    };
    collideWith(sprite){
        /**Implementing Collision Detection Method */
        if (this.x < sprite.x + sprite.width &&
            this.x + this.width > sprite.x &&
            this.y < sprite.y + sprite.height &&
            this.y + this.height > sprite.y) {
            sprite.takeDamage(this.damage);
            return true;
        }
        return false;
    };
}