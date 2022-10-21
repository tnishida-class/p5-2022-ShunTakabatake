// テキスト「アニメーションの基本」
let x, y, vx, vy;
const g = 0.1; // 重力加速度
const vyMax = 10;
const vxMax = 10;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20, 20);
   // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax);
  vx = constrain(vx - vx * 0.1 , -vxMax, vxMax);
  if(keyIsDown(LEFT_ARROW)){ vx -= 2; }
  if(keyIsDown(RIGHT_ARROW)){ vx += 2; }
  if(keyIsDown(" ".charCodeAt(0))){ vy -= 1; }
  if(keyCode === CONTROL){ y += 5; }

  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  y = constrain(y, 0, height);

  x += vx;
  y += vy;
 
  // 端の処理パターン (1) 反対側から出てくる
  //if(x > width){ x = 0; }
  //else if(x < 0){ x = width; }
  //if(y > height){ y = height; vy = 0;}
  //if(y < 0){ y = 0; vy = 0; }

　// 端の処理パターン (2) 跳ね返る
  //if(x < 0 || x > width){ vx = -1 * vx; }
  //if(y > height){ vy = -1 * vy; }
  //x = constrain(x, 0, width);
  //y = constrain(y, 0, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
