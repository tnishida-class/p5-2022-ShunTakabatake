//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let count;
let cycle;
let t;
function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  count = 0;
  cycle = 500;
  t = 0
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    //配列からボールを発生させる、揺らぎを与える
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx + 3 * cos(t / 30);
    b.y += b.vy + 0.5 * sin(t / 40);
  
    //画面外のボールを消滅させる
    if(b.x < 0){balls.shift}
    if(b.x > width){balls.shift}
    if(b.y < 0){balls.shift}
    if(b.y > height){balls.shift}
  }
  t++

  //一定時間ごとにボールを発生させるための配列を作る
  count = (count + 1) % cycle;
  if(count >= 250 && count % 5 == 0){ 
    const c = { x: windowWidth * random(0,1), y: 10, size: random(5, 50) , vx: random(-5, 5), vy: random(1, 3)};
    balls.unshift(c);
  }
}

function mouseDragged(){ // ドラッグされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size: random(5, 50), vx: dx, vy: dy };
    balls.push(b);
  }
}
