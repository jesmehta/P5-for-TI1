let swarm = [];          //array for objects

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {  //create 10 objects 
    swarm[i] = new Particle();    //and add them to array
  }
  textStyle(BOLD);
}

function draw() {
  background(250, 10);
  fill(0);
  stroke(255);

  for (let i = 0; i < swarm.length; i++) {
    swarm[i].update();          //update and display for
    swarm[i].display();         //every obj in array
  }
}

class Particle {
  constructor() {
    this.posX = random(0, width);
    this.posY = random(0, height);
    this.velX = random(1, 2);
    this.velY = random();
    this.accX = 0.0;
    this.accY = 0.1
    this.size = random(5, 15);
  }

  update() {
    this.posX += this.velX;
    this.posY += this.velY;

    this.velX += this.accX;
    this.velY += this.accY;

    //check for canvas edges and bounce
    if (this.posX < 0 || this.posX > width) {
      this.velX = -this.velX;
    }

    if (this.posY < 0 || this.posY > height) {
      this.velY = -this.velY;
    }
  }

  display() {

    //display ellipse
    stroke(25);
    strokeWeight(1);
    ellipse(this.posX, this.posY, this.size, this.size);

    //display "go!"
    // stroke(255);
    // strokeWeight(8);
    // textSize(this.size * 2);
    // text('go!', this.posX, this.posY);

  }
}

//function to add new particle if mouse is clicked
function mouseClicked() {
  let p = new Particle();   //create new particle
  p.posX = mouseX;          //position it at mouse loc
  p.posY = mouseY;
  swarm.push(p);            //add it into the array
}

//function to save canvas as image if key is pressed
function keyPressed() {
  if (key == "s") {
    saveCanvas("particle.jpg");
    print("file saved");
  }
}