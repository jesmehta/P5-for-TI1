//Simple Fibonacci series generator

function setup() {
  createCanvas(400, 400);
  noFill();
    series(0,1);    //starting nos
}

function series(a,b)
{
ellipse(b,height/2,b,b);     //x loc, dia are fibo nos
  if(b<width/2)      //allow until max size
  {  series(b,a+b);  //core logic - nextNum = sum of prev 2
  }
}