let song;
let ran;

function preload() {
  soundFormats("mp3");
  song = loadSound("immigrant.mp3");
}

function setup() {
  createCanvas(400, 400);
  ran = false;
}

function draw() {
  background(220);

  if(ran==true)
  {
  let r = int(random(0,song.duration()-1));
  song.jump(r,1);
  }
}

function keyPressed() {
  if (key == "a") {
    song.play();
  }
  if (key == "s") {
    song.stop();
  }
  if (key == "r") {
    song.reverseBuffer();
    song.play();
  }
}

function mouseClicked() {
ran = !ran;
}
