let cluster = [];

function setup() {
  createCanvas(600,600);
  // createCanvas(600,600, SVG);
  background(225,128);
  angleMode(DEGREES);

  for(let i = 0;i < 10;i++)
  {
    let p = new Particle();
    cluster.push(p);
  }
}

function draw() {
  background(225,10);

  for(let i = 0;i < cluster.length;i++)
  {
    cluster[i].display();
    cluster[i].update();
  }
}

function mouseClicked()
{
  for(let i = 0;i < cluster.length;i++)
  {
    cluster[i].thrust(random(1));

  }
}
