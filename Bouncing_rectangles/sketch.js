let position;

function setup() {
  createCanvas(400, 400);
  position = 0;                //starting position
  step = +5;                   //step size
}

function draw() {
  background(220, 50, 100);
  let w = 150;
  let h = 150;

  fill(128, 200, 180, 120);
  noStroke();
  rect(position, height / 2 - h / 2, w, h);

  stroke(0, 90, 2);
  strokeWeight(5);
  rect(width / 2 - w / 2, position, w, h);

  position = position + step;

  //if position reaches end of canvas, or starting edge of canvas, reverse direction
  if (position > (width - w) || position < 0) {      
    step = -step;
  }

}