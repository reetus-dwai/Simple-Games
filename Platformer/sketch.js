function setup(){
  createCanvas(400,400)
}

function draw(){
  background(0);
  push();
  noFill();
  stroke(255);
  rect(width/2, height/2, 100, 100)
  pop();
}
