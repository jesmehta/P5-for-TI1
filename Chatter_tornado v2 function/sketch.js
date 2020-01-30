let r;

function setup() {
  createCanvas(400, 400);
  r = 150;
}

function draw() {
  r = mouseX;
  background(255);
  noStroke();
  fill(0);
  deg = 360;
  for (let l = 0; l < 5; l++) {
    jazzyCircle(r * l, l, deg / (l + 1));
  }
}

function jazzyCircle(r, l, deg) {
  for (let t = 0; t < deg; t = t + 2) {
    fill(l * 50)
    d = radians(t);
    let x = width / 2 + r * sin(d) + random(0, 15);
    let y = height / 2 + r * cos(d) + random(0, 15);
    ellipse(x, y, random(0, 10), random(0, 10));
  }
}