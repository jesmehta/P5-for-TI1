function setup() {
    createCanvas(400, 400);
    frameRate(4);
  }
  
  function draw() {
    background(220);
    let k = 5;
    let b = k*2;
    fill(255,125);
    for(let i = 0;i<width;i+=k)
    {
      let h = random(5,height/3);
    // line(i,2*height/3,i,h);
      rect(i,2*height/3-h,b,h);
    }
  }