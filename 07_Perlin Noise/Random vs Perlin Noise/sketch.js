let x0, step, t,t0;

function setup() {
  createCanvas(400, 400);
  x0 = 0;
  step = 5;
  t = 0.05;
  t0 = 5;
}

function draw() {
  // background(255,10);
  let y = random(0, +step * 10);
  x0 += 5;
  line(x0, 0, x0, y);

  let n = noise(t0);
  line(x0, height / 2, x0, height / 2 + n*100);
  t0=t0+t;
}
