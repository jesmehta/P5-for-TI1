//Menger Square - looped version

//draws all the squares by using i and j to change the signs when adding/subtracting sideNew i.e side/3
//compare with previous version where we use 8 separate drawRect functions with a combination of +-side/3

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  translate(width / 2, height / 2);
  //translation, in the tiling/tessellation sense
  //shifts the entire canvas by given parameters 
  //so now 0,0 is at centre of canvas
  //the only effect here is being able to give 0,0 as parameters instead of width/2,height/2
  background(255);
  fill(128, 25);
  // noStroke();
  stroke(200);
  drawRect(0, 0, width);
}

function drawRect(xPos, yPos, side) {
  rect(xPos, yPos, side, side);
  let sideNew = side / 3;
  
  if (side > 5) {                         //checking condition for smallest square limit
    for (let i = -1; i < 2; i++) {        //loops i across -1, 0 , +1
      for (let j = -1; j < 2; j++) {      //loops j across -1, 0 , +1
        //checking condition to prevent drawing centre square when i and j are both 0
        if (i != 0 || j != 0) {           
          drawRect(xPos + i * sideNew, yPos + j * sideNew, sideNew);    //i,j are used for +-                                 
        }
      }
    }
  }
}