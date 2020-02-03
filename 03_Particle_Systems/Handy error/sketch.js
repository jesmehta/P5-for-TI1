//Basic Array of Objects

let thesePpl = [];        //array of some length

function setup() {
  createCanvas(400, 400);

  for(let i = 0;i <200;i++)
  {
  thesePpl[i] = new Student(i);    
//adds 200 Student objects into array thesePpl[] at positions 0-199, passing value i to constructor
  }
}

function draw() {
  background(220);
    for(let i = 0;i <thesePpl.length;i++)
    {
  thesePpl[i].display();  
//reads through the array, and for each object, runs it's display()
    }
  
}

class Student {
  constructor(a) {
    this.name = "Alpha, Beta of Gamma";  //name is const
    this.address = a;         //address is recieved by constructor
    this.number = int(random(-100, 100));  //number is random
  }

  display() {
    //reads values from the object and prints
    print("Name = ", this.name);        
    print("address : ", this.address);
    print("Roll no : ", this.number);
  }
}