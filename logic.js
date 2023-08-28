import Player from "./player.js";
import BulletController from "./bulletController.js";
import Enemy from "./enemy.js";

const canvas = document.querySelector("#game");
const canvasContext = canvas.getContext("2d");

const canvasBoardWidth = canvas.width;
const canvasBoardHeight = canvas.height;

const restartButton = document.querySelector("#restartButton");

restartButton.addEventListener("click", ()=>{
window.location.reload();
});

const bulletController = new BulletController(canvas);
/**Calling the Player function from player.js file */
const player = new Player (
    canvasBoardWidth / 2.2, 
    canvasBoardHeight / 1.3, 
    bulletController);

const enemies = [
    new Enemy(50, 20, "green", 5),
    new Enemy(150, 20, "red", 15),
    new Enemy(250, 20, "blue", 25),
    new Enemy(350, 20, "yellow", 35),
    new Enemy(450, 20, "pink", 55),
    new Enemy(50, 100, "indigo", 12),
    new Enemy(150, 100, "orange", 7),
    new Enemy(250, 100, "purple", 22),
    new Enemy(350, 100, "brown", 16),
    new Enemy(450, 100, "coral", 9),
    new Enemy(50, 180, "indigo", 46),
    new Enemy(150, 180, "aqua", 29),
    new Enemy(250, 180, "limegreen", 78),
    new Enemy(350, 180, "burlywood", 56),
    new Enemy(450, 180, "darkblue", 49),
    new Enemy(50, 260, "darkkhaki", 2),
    new Enemy(150, 260, "orangered", 6),
    new Enemy(250, 260, "darkolivegreen", 35),
    new Enemy(350, 260, "cadetblue", 67),
    new Enemy(450, 260, "darksalmon", 33),
];

function gameLoop() {
     setCommonStyle();
    /**Designing and drawing the canvas */
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvasBoardHeight, canvasBoardWidth);
    bulletController.draw(canvasContext);
    player.draw(canvasContext);

    //new Enemy(100, 100 , " red", 10).draw(canvasContext);
    /**Drawing New Enemy */
    enemies.forEach((enemy)=>{
        if (bulletController.collideWith(enemy)) {
            if (enemy.health <= 0) {
                const index = enemies.indexOf(enemy);
                /**Removing enemies who has health less than 0 */
                enemies.splice(index, 1);
            }
        } else{
            enemy.draw(canvasContext);
        }
    });
}

function setCommonStyle() {
    /**Designing shadow color and shadow blur for the player and enemies */
    canvasContext.shadowColor = "#d53";
    canvasContext.shadowBlur = 20;
    canvasContext.lineJoin = "bevel";
    canvasContext.lineWidth = 10;
}

/**Calling gameloop function 60 times per second */
setInterval(gameLoop, 1000/60);