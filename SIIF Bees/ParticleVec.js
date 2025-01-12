//particle class using Vectors

class Particle {
  constructor()
  {
    this.pos = createVector(random(width),random(height));
    // this.pos = createVector(x,y);
    // this.vel = createVector();
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
    this.grav = createVector(0,0.1);
    this.size = random(5,15);
    this.velMax = 5;
    this.forceMax = 1;
    this.col = random(360);
  }

  update()
  {
    this.vel.add(this.acc);
    this.pos.add(this.vel.copy().mult(0.95));

    this.acc.mult(0);
    // this.applyForce(this.grav);

    if(random()<0.2)
    {
      // this.thrust(random());
    }

    this.bounce();
    if(this.vel.mag() > this.velMax)
    {
      this.vel.setMag(this.velMax);
    }
  }

  bounce()
  {
    //check for canvas edges and bounce
    if(this.pos.x < 0 || this.pos.x > width)
    {
      this.vel.x = -this.vel.x;
    }

    if(this.pos.y < 0 || this.pos.y > height)
    {
      this.vel.y = -this.vel.y;
    }
  }

  wrap()
  {
    //check for canvas edges and bounce
    if (this.pos.x < 0)
    {
      this.pos.x = width;
    }

    if (this.pos.x > width)
    {
      this.pos.x = 0;
    }

    if (this.pos.y < 0)
    {
      this.pos.y = height;
    }

    if (this.pos.y > height)
    {
      this.pos.y = 0;
    }
  }

  thrust(a)
  {
    let thrustMag = a;
    let thrustDir = this.vel.copy().normalize();
    // let thrustDir = this.vel.copy().normalize().rotate(5);
    let thrust = thrustDir.mult(thrustMag);
    this.applyForce(thrust);
    this.acc.add(thrust);
    // print("thrusted", thrust);
  }

  applyForce(f)
  {
    this.acc.add(f);
  }

  display()
  {
    fill(this.col, 90, 90,0.8);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    let thrustDir = this.vel.copy().normalize();
    let backA = this.vel.copy().normalize().rotate(90);
    let backB = this.vel.copy().normalize().rotate(-90);
    
    // triangle(this.pos.x, this.pos.y, backA.x, backA.y, backB.x, backB.y);
    stroke(this.col,90,90);

    strokeWeight(5);
    thrustDir.mult(5);
    line(this.pos.x, this.pos.y, this.pos.x-thrustDir.x, this.pos.y-thrustDir.y);

    stroke(this.col,70,70);
    strokeWeight(2);
    thrustDir.mult(10);
    line(this.pos.x, this.pos.y, this.pos.x-thrustDir.x, this.pos.y-thrustDir.y);

  }

}
