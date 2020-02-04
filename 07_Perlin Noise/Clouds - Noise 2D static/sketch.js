let x0, y0, t, step;

function setup() {
  frameRate(1);
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
  x0 = 0;
  y0 = 0;
  t = 0.05;
  step = 5;

  for (let j = 0; j < height; j = j + step) {
    for (let i = 0; i < width; i = i + step) {
      let n = noise(x0, y0);
      let f = map(n, 0, 1, 0, 128);
      fill(f, 64);
      ellipse(i, j, step * 2, step * 2);

      x0 += t;
    }
    y0 += t;
    x0 = 0;
  }
}

function draw() {}
