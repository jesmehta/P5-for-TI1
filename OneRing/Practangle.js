function setup() {
    createCanvas(400, 400);
    i = 0;
    frameRate(30);
    colorMode(HSB);
  
  }
  
  function draw() {
    background(220);
  
    for (let k = 0; k < 10; k++) {
      rect(i - width / 20 * k, height / 10 * k, 50, height / 10 - 3);
      i += 0.3;
  
      if (i >= width) {
        i = 0;
      }
      // fill(i/2,128,255);      //color set for RGB mode
      fill(i, 255, 255); //color set for HSB mode
    }
  }