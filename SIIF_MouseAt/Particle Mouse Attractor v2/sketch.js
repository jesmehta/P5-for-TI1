let swarm = [];          //array for objects

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 10; i++) {  //create 10 objects
    swarm[i] = new Particle();    //and add them to array
  }
  textStyle(BOLD);
  // colorMode(HSB);
}

function draw() {
  colorMode(RGB);

  // fill(255,10);
  // rect(0,0,width,height);
  background(255,10);
  // fill(0);
  // stroke(255);

  for (let i = 0; i < swarm.length; i++) {
    swarm[i].update();          //update and display for
    swarm[i].display();         //every obj in array
  }
}
//function to add new particle if mouse is clicked
function mouseClicked() {
  let p = new Particle();   //create new particle
  p.pos.x = mouseX;          //position it at mouse loc
  p.pos.y = mouseY;
  swarm.push(p);            //add it into the array
}

//function to save canvas as image if key is pressed
function keyPressed() {
  if (key == "s") {
    saveCanvas("particle.jpg");
    print("file saved");
  }
}
