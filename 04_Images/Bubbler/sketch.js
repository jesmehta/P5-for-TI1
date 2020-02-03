let img;

function preload()
{
img = loadImage('ele2.jpg');
}

function setup() {
    img.resize(0,500);

  createCanvas(img.width, img.height);
  img.loadPixels();
}

function draw() {
for(let i =0;i<50;i++){
  let x = random(0,width);
  let y = random(0,height);
  let r = random(15,50);
  
  let c = img.get(x,y);

  fill(c[0],c[1],c[2],128);  
  //set fill + alpha by reading rgb values from fill individually
  stroke(255,128);
  ellipse(x,y,r,r);
}
}