function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  // strokeWeight(4);
  // stroke(255);
  // noFill();
  // ellipse(200, 200, 300, 300);

  strokeWeight(8)
  stroke(255, 100, 150);
  noFill()
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  stroke(150, 100, 255);
  let minAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);

  push();
  rotate(minAngle);
  stroke(150, 100, 255);
  line(0, 0, 50, 0);
  pop();

  stroke(255, 255, 100);
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);
  
  push();
  rotate(hrAngle);
  stroke(255, 255, 100);
  line(0, 0, 75, 0);
  pop();

  stroke(0);
  point(0, 0);
  
  // fill(255);
  // noStroke();
  // text(hr + ':' + mn + ':' + sc, 10, 200);
}