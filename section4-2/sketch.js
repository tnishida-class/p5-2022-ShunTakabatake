//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let count;
let cycle;
function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  count = 0;
  cycle = 500; 
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
    if(b.x < 0){balls.shift}
    if(b.x > width){balls.shift}
    if(b.y < 0){balls.shift}
    if(b.y > height){balls.shift}
  }
  count = (count + 1) % cycle;
  if(count >= 250){ 
    const c = { x: windowWidth / 2, y: windowHeight / 2, size: random(5, 50) , vx: random(-10, 10), vy: random(-10, 10)};
    balls.unshift(c);
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(5, 50) , vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
