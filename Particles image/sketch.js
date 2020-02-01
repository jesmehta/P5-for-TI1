let swarm = [];
let img;

function preload()
{
img = loadImage('ele2.jpg');
}

function setup() {
      img.resize(0,500);

  createCanvas(img.width, img.height);
  img.loadPixels();
  
  for (let i = 0; i < 10; i++) {
    swarm[i] = new Particle();
  }
}

function draw() {
  background(250, 10);
  fill(255);
  
  for (let i = 0; i < swarm.length; i++) {
    swarm[i].update();
    swarm[i].display();
  }
}

class Particle {
  constructor() {
    this.posX = random(0, width);
    this.posY = random(0, height);
    this.velX = random(1, 2);
    this.velY = random();
    this.accX = 0.0; //gravity well
    this.accY = 0.1
    this.col = img.get(posX,posY);
  }

  update() {
    this.posX += this.velX;
    this.posY += this.velY;

    this.velX += this.accX;
    this.velY += this.accY;

    if (this.posX < 0 || this.posX > width) {
      this.velX = -this.velX * 1; //bouncy walls
    }

    if (this.posY < 0 || this.posY > height) {
      this.velY = -this.velY;
    }
  }

  display() {
    fill(this.col);
    ellipse(this.posX, this.posY, 5, 5);
  }
}

function mouseClicked() {
  let p = new Particle();
  p.posX = mouseX;
  p.posY = mouseY;
  swarm.push(p);
}

function keyPressed() {
  if (key == "s") {
    saveCanvas("particle.jpg");
    print("file saved");
  }
}