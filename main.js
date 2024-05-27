let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let sound = document.getElementById("sound");
let score = 0;

//loading background music
const backgroundMusic = new Audio();
backgroundMusic.src = "./Sound/backgroundMusic.mp3";

//loading bullet sound
const bulletSound = new Audio();
bulletSound.src = "./Sound/bulletSound.wav";
bulletSound.volume = 0.5;

const player = new Player();
const allbullet = [];

let enemies = [];

setInterval(() => {
  const enemy = new Enemy();
  enemies.push(enemy);
}, 3000);

sound.addEventListener("click", (e) => {
  backgroundMusic.play();
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.3;
});

//game loop
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].bulletCollision(allbullet);
    enemies[i].playerCollision(player);
    console.log(player.isAlive);
  }
  for (let i = 0; i < allbullet.length; i++) {
    allbullet[i].update();
  }
  context.font = "20px Arial";
  context.fillStyle = "white";
  context.fillText("Score: " + score, 10, 40);
  if (!player.isAlive) {
    context.font = "60px Arial";
    context.fillStyle = "white";
    context.fillText("Game Over", 60, 190);
  }
  window.requestAnimationFrame(animate);
}
animate();

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") player.velocity.y = -5;
  if (e.code === "ArrowDown") player.velocity.y = 5;
  if (e.code === "ArrowLeft") player.velocity.x = -5;
  if (e.code === "ArrowRight") player.velocity.x = 5;
  if (player.isAlive && e.code === "Space") {
    allbullet.push(new Bullet(player.position.x + 10, player.position.y));
    bulletSound.play();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowUp") player.velocity.y = 0;
  if (e.code === "ArrowDown") player.velocity.y = 0;
  if (e.code === "ArrowLeft") player.velocity.x = 0;
  if (e.code === "ArrowRight") player.velocity.x = 0;
});
