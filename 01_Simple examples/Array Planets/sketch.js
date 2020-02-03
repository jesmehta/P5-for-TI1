arr = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    arr[i] = random(0, 255);
  }
}

function draw() {
  background(255);
  noStroke();
  for (let i = 0; i < 10; i++) {
    let c = arr[i];
    fill(c,255-c);
    ellipse(25 + i * 50, height / 2, c * 0.7, c * 0.7);
  }

}