let step, px, py;
let xoff,yoff,t;

function setup() {
  createCanvas(400, 400);
  step = 6;
  angleMode(DEGREES);
  xoff = 0;
  yoff = 0;
  t = 0.05;
}

function draw() {
  background(220);
  retCircle(mouseX, mouseY, 100, 10);
}

function retCircle(cx, cy, r, j) {
  for (let i = 0; i < 360; i = i + step) {
    let x = cx + r * cos(i) + random(0, j);
    let y = cy + r * sin(i) + random(0, j);

    // let xn = xoff + 5 * cos(i);
    // let yn = yoff + 5 * sin(i);

    // let x = cx + r * cos(i) + noise(xn, yn);
    // let y = cy + r * sin(i) + noise(xn, yn);

    line(x, y, px, py);

    px = x;
    py = y;

  }
}
