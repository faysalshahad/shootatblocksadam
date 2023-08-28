export default class Player {
    constructor(x, y, bulletController){
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.width = 50;
        this.height = 50;
        this.speed = 4;

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    };
    draw(canvasContext){
        this.move();
        canvasContext.strokeStyle = "yellow";
        canvasContext.strokeRect(this.x, this.y, this.width, this.height);
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
        this.shoot();
    };

    shoot(){
        if (this.shootPressed) {
            console.log("shoot");
            const bulletSpeed = 5, bulletDelay = 7, bulletDamage = 1;
            /**Configuring the x and y cor-ordinates from where the bullet
             * should start its journey from the player box. this.x means
             * x = 0 from the very first corner of x and y co-ordinates.
             * so we are adding the half of total width of x axis to give
             * a co-ordinates to bullets from where it can start from the
             * middle of the player. y axis will be 0 because we want the
             * bullet to get shot from the top of the player box (not from
             * the middle of the box.)
             */
            const bulletX = this.x + this.width / 2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, 
                bulletSpeed, bulletDamage, bulletDelay);
        }
    }

    move(){
        if (this.downPressed) {
            this.y += this.speed;
        }
        if (this.upPressed) {
            this.y -= this.speed;
        }
        if (this.leftPressed) {
            this.x -= this.speed;
        }
        if (this.rightPressed) {
            this.x += this.speed;
        }
    };

    keydown = (e)=>{
        if (e.code === "ArrowUp") {
            this.upPressed = true;
        }
        if (e.code === "ArrowDown") {
            this.downPressed = true;
        }
        if (e.code === "ArrowLeft") {
            this.leftPressed = true;
        }
        if (e.code === "ArrowRight") {
            this.rightPressed = true;
        }
        if (e.code === "Space") {
            this.shootPressed = true;
        }
    };

    keyup = (e)=>{
        if (e.code === "ArrowUp") {
            this.upPressed = false;
        }
        if (e.code === "ArrowDown") {
            this.downPressed = false;
        }
        if (e.code === "ArrowLeft") {
            this.leftPressed = false;
        }
        if (e.code === "ArrowRight") {
            this.rightPressed = false;
        }
        if (e.code === "Space") {
            this.shootPressed = false;
        }
    };
}