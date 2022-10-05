function setup() {
  createCanvas(256,160);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(255);
  triangle(24,132,126,132,126,20);
  fill(255, 150, 200);
  triangle(12,120,116,120,116,10);
  fill(84, 170, 50);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("OpenSand", 68, 100);
}
