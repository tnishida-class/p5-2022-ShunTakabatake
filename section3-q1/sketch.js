// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
const t = 20;
const a = 1;
function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  fill(242, 36, 22)
  count = (count + 1) % cycle;
  let size = 50;
  if(count <= t){
    size = size + a*count;
  }
  else{
      size = size - a*t / (count - t);
  }
  ellipse(width / 2, height / 2, size);
}
