let bump;
let mySong;

function setup() {
createCanvas(300,300);
soundFormats('wav');
bump = loadSound('bump7.wav');
}

function draw() {

}

function mouseClicked() {
      bump.play();
}
