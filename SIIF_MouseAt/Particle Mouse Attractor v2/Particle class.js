class Particle {
  constructor(x,y)
  {
    this.pos = createVector(random(width),random(height));
    // this.vel = createVector();
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    // this.target = createVector(x,y);
    this.size = random(5,15);
    this.velMax = 5;
    this.forceMax = 1;
    this.colHue = random(0,360);
  }

  update()
  {
    let mousePos = createVector(mouseX,mouseY);
    let force = this.attract(mousePos);
    force.mult(0.05);
    this.acc.add(force);


    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);

    //check for canvas edges and bounce
    if(this.pos.x < 0 || this.pos.x > width)
    {this.vel.x = -this.vel.x;}
    if(this.pos.y < 0 || this.pos.y > height)
    {this.vel.y = -this.vel.y;}

  }

  display() {

    //display ellipse
    // stroke(25);
    // strokeWeight(1);
    noStroke();
    colorMode(HSB,360,100,100);

    fill(this.colHue,100,100);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);


  }

  attract(target)
  { let desired = p5.Vector.sub(target,this.pos);
    let d = desired.mag();
    if(d<250)                        //effect radius, variablize ? {
      {
        desired.setMag(this.velMax);
        desired.mult(1);
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.forceMax);
        return steer;
      }
      else
      {
        return(createVector(0,0));
      }
    }
  }
