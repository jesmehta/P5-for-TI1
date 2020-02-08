//Simple series halving

function setup() {
  createCanvas(400, 400);
    fill(128,128);

    series(width);
}

function series(n)
{
print(n);
  ellipse(n/2,height/2,n,n);
  // ellipse(width-n/2,height/2,n,n);

  if(n>5)
  {  series(n*0.5);
  }
}