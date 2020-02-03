let img;

//images and other assets need  need a preload function
function preload() {     
  img = loadImage('ele2.jpg');
}

function setup() {
  img.resize(0, 500);
  createCanvas(img.width, img.height);
}

function draw() {
  
  //repeating 50 times per draw loop to have a faster effect
  for (let i = 0; i < 50; i++) {    
    let x = random(0, width);
    let y = random(0, height);
    let r = random(15, 50);

    let c = img.get(x, y);

    fill(c);
    noStroke();
    
    ellipse(x, y, r, r);

    // textSize(16);
    // textStyle(BOLD);
    // text("elePhant",x-8,y);
  }
}