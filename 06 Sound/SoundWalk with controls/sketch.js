let immigrant;
let mySong;
let len;
let x0,y0;

let btPlay;
let btPlayRev;
let btPlayRandom;
let fPlay, fRev, fRandom;

function preload()
{
  soundFormats('mp3');
  immigrant = loadSound('immigrant.mp3');

}


function setup() {
  createCanvas(300,300);
  background(220);


  immigrant.playMode('restart');
  len = immigrant.duration();

  fPlay = false;
  fRev = false;
  fRandom = false;

  x0 = random(0,width);
  y0 = 0;
  createP(""); //moves buttons below canvas

  btPlay = createButton("Play Song");
  btPlayRev = createButton("Play Reverse");
  btPlayRandom = createButton("Play RandomWalk");

  btPlay.mouseClicked(flagPlay);
  btPlayRev.mouseClicked(flagRev);
  btPlayRandom.mouseClicked(flagRandom);

  noStroke();
}

function draw() {

  if(fRandom){
    let k = int(random(0,len-1));
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
//
// function mouseClicked() {
//
// }

function flagPlay()
{
  if(fPlay)
  {
    immigrant.play();
  }
  else {
    immigrant.stop();
  }
  fPlay = !fPlay;
}
function flagRev()
{
  fRev = !fRev;
  immigrant.reverseBuffer();

  if(fRev)
  {
    // immigrant.reverseBuffer();
    immigrant.play();
    immigrant.reverseBuffer();
  }
  else {
    immigrant.stop();
  }
  fRev = !fRev;
}
function flagRandom()
{

  fRandom = !fRandom;
}
