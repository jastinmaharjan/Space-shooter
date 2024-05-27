class Player {
  constructor() {
    this.position = {
      x: 180,
      y: 350,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.size = 50;
    this.image = new Image();
    this.image.src = "./Images/ship.png";
    this.isAlive = true;
  }
  draw() {
    context.fillStyle = "red";
    // context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.size > canvas.width) this.position.x = 350;
    if (this.position.y + this.size > canvas.height) this.position.y = 350;
  }
  update() {
    this.draw();
    if (this.isAlive) {
      this.move();
    }
  }
}
