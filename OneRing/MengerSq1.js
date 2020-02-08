function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  fill(100, 128);
  noStroke();
  drawSq(width/2, height/2, 400);
}

function drawSq(x0, y0, side) {
  if (side >= 3) {
    rect(x0, y0, side, side);
    drawSq(x0 - side / 3, y0 - side / 3, side / 3);  //upper left
    drawSq(x0 + side / 3, y0 - side / 3, side / 3);  //upper right
    drawSq(x0 - side / 3, y0 + side / 3, side / 3);  //lower left
    drawSq(x0 + side / 3, y0 + side / 3, side / 3);  //lower right
    drawSq(x0 - side / 3, y0 ,           side / 3);  //left 
    drawSq(x0 + side / 3, y0 ,           side / 3);  //right
    drawSq(x0,            y0 - side / 3, side / 3);  //top
    drawSq(x0,            y0 + side / 3, side / 3);  //bottom
    // drawSq(x0,            y0,            side / 3);  //centre kept off
    
    //a cleaner option would be : let newSide = side/3
    //then use newSide in the 8 drawSq functions above
    //commenting out or activating the above lines selectively creates  various versions    

  }
}