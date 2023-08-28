export default class Enemy{
    constructor(x, y, color, health){
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health;
        this.width = 50;
        this.height = 50;
    };
    draw(canvasContext){
        canvasContext.fillStyle = this.color;
        if (this.health > 1) {
            canvasContext.strokeStyle = "white";
        } else {
            canvasContext.strokeStyle = this.color;
        }
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
        canvasContext.strokeRect(this.x, this.y, this.width, this.height);

        /**Drawing text of enemy health */
        canvasContext.fillStyle = "black";
        canvasContext.font = "25px Arial";
        canvasContext.fillText(
            /**Health number will be our text */
            this.health,
            /**Giving X co-ordinates of where our text will be start
             * writing on the screen. Taking each enemy box's X axis
             * and adding total width and diving it by 3.5
             */
            this.x + this.width / 4.5,
            /**Giving Y co-ordinates of where our text will be start
             * writing on the screen. Taking each enemy box's Y axis
             * and adding total height and diving it by 1.5
             */
            this.y + this.height / 1.5
        );
    };

    takeDamage(damage){
        this.health -= damage;
    };

}