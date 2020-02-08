let r;
let catcher = [];

function setup() {
  createCanvas(400, 400);
  r = 150;
}

function draw() {
  // r = mouseX;
  background(255);
  noStroke();
  // fill(0);
  // deg = 360;

  for (let l = 0; l < catcher.length; l++) {
    catcher[l].drawCirc();
  }

  if (catcher.length > 15) {
    catcher.reverse();
    // for (let l = 0; l < 5; l++) {
      catcher.pop();
    // }
    catcher.reverse();

  }
}

// function jazzyCircle(r, l, deg) {
//   for (let t = 0; t < deg; t = t + 2) {
//     fill(l * 50)
//     d = radians(t);
//     let x = width / 2 + r * sin(d) + random(0, 15);
//     let y = height / 2 + r * cos(d) + random(0, 15);
//     ellipse(x, y, random(0, 10), random(0, 10));
//   }
// }

class Mandala {
  constructor(posX, posY, rad, jit, fillC) {
    this.x = posX;
    this.y = posY;
    this.r = rad;
    this.col = fillC;
  }

  drawCirc() {
    // beginShape();
    for (let t = 0; t < 360; t = t + 2) {
      fill(this.col)
      let d = radians(t);
      let locX = this.x + this.r * sin(d) + random(0, this.jit);
      let locY = this.y + this.r * cos(d) + random(0, this.jit);
      // vertex(locX,locY);
      // ellipse(locX, locY, random(0, 10), random(0, 10));
          ellipse(locX, locY, 5,5);

    }
    
    // endShape(CLOSE);
  }
}

function mouseClicked() {
  let l = catcher.length;
  catcher[l] = new Mandala(
    mouseX,
    mouseY,
    random(10, 100),
    random(5, 25),
    random(0, 255)
  )

}