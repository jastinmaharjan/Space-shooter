class Bullet{
  constructor(x = 0, y = 0){
      this.position = {
          x:x,
          y:y,
      }
      this.size = 35;
      this.velocity = {
          x:0,
          y:-5,
      }
      this.image = new Image();
      this.image.src = "./Images/bullet.png";
  }
  draw(){
      context.beginPath();
      context.fillStyle = "white";
      context.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
  }
  move(){
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
  }
  update(){
      this.draw();
      this.move();
  }
}