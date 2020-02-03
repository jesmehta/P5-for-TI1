let immigrant;
let mySong;
let flag, flag2, len;
let x0,y0;

function preload()
{
  soundFormats('mp3');
  immigrant = loadSound('immigrant.mp3');
}


function setup() {
  createCanvas(300,300);
  immigrant.playMode('restart');
  flag = -1;
  flag2 = -1;
  len = immigrant.duration();
  background(220);

  noStroke();
  textAlign(CENTER);
  textSize(32);
  textFont("Garamond");

  fill(80);
  rect(0,0,width/2,height);

  fill(160);
  rect(width/2,0,width/2,height);

  fill(0);
  text("Immigrant loaded",width/2,50);

  rectMode(CENTER);
  rect(width/2-50,height/2,50,50,10);
  rect(width/2+50,height/2,50,50,10);

  x0 = random(0,width);
  y0 = 0;
}

function draw() {

  if(flag>0)
  {
    let k = int(random(0,len));
    immigrant.jump(k, 1)
  }
  let x = random(-3,3);
  let y = random(0,3);
  x0 += x;
  y0 +=y;

  fill(255,30);
  ellipse(x0,y0,10,10);
  fill(255);
  ellipse(x0,y0,2,2);

  if(x0 > width || x0 < 0 || y0 > height || y0< 0)
  {
    x0 = random(0,width);
    y0 = 0;
  }
}

function mouseClicked() {

  if(mouseX>width/2)
  {
    flag2 = -flag2;
    if(flag2>0)
    {
      immigrant.reverseBuffer();
      immigrant.play();
    }
    else {
      immigrant.stop();
    }
  }
  if (mouseX<width/2)
  {
    flag = -flag;
  }

}

function drawLightning()
{


}
