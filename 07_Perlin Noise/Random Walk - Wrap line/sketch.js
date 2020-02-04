let x0, y0;
let step;

  function setup() {
    createCanvas(400, 400);
    x0 = width / 2;
    y0 = height / 2;
    step = 50;
    fill(0);
  }

function draw() {
  background(255,10);
  let x = random(-step, +step);
  let y = random(-step, +step);
  let px = x0;
  let py = y0;
  x0 += x;
  y0 += y;
  ellipse(x0, y0, 5, 5);
  line(px,py,x0,y0);

  x0 = abs(x0%width);
  y0 = abs(y0%height);

}
