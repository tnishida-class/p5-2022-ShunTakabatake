// 最終課題を制作しよう
let numbers;
let cards;
function setup(){
  createCanvas(windowWidth, windowHeight);
  numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let cardNumbers = shuffle(numbers);
  cards = [];
  for(let i = 0; i < 4; i++){
    let c = {x: 100 * i, y: 85, n: cardNumbers[i]};
    cards.push(c);
  }
}

function draw(){
  background(160, 192, 255);
  textSize(40);
  text("筆算バトルをしてみよう！", 10, 40);
  text("遊び方", 400, 300);
  textSize(25); 
  text("あなたのカードはこの4枚↓", 10, 80);
  text("・マウスカーソルを数字に合わせ、", 400, 345)

  text("　Q,W,A,Sを押して移動", 400, 375)
  text("・Rでカードを元に戻す", 400, 405)
  text("・答えは自力で計算しよう！", 400, 435)
  text("・答えの大きいほうが勝ち！", 400, 465)
  drawBattlefield()
  for(let i = 0; i < cards.length; i++){
    let ci = cards[i];
    numberCard(ci.x, ci.y, ci.n);
    if(dist(mouseX, mouseY, ci.x + 50, ci.y + 75) < 50){
      if(keyIsDown("Q".charCodeAt(0))){ ci.x = 120; ci.y = 300;}
      if(keyIsDown("A".charCodeAt(0))){ ci.x = 120; ci.y = 470;}
      if(keyIsDown("W".charCodeAt(0))){ ci.x = 240; ci.y = 300;}
      if(keyIsDown("S".charCodeAt(0))){ ci.x = 240; ci.y = 470;}
    }
    if(keyIsDown("R".charCodeAt(0))){ ci.x = 100 * i; ci.y = 85;}
  }
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function numberCard(x, y, n){
  rect(x, y, 100, 150);
  textSize(80);
  text(n, x + 22, y + 100);
}

function drawBattlefield(){
  for(let i = 0; i < 2; i++){
    for(let j = 0; j < 2; j++){
      rect(120 + 120 * i, 300 + 170 * j, 100, 150)
      textSize(80);
      if(i == 0 && j == 0)text("Q", 120 + 120 * i + 10, 300 + 170 * j + 100);
      if(i == 1 && j == 0)text("W", 120 + 120 * i + 10, 300 + 170 * j + 100);
      if(i == 0 && j == 1)text("A", 120 + 120 * i + 15, 300 + 170 * j + 100);
      if(i == 1 && j == 1)text("S", 120 + 120 * i + 15, 300 + 170 * j + 100);
    }
  }  
  textSize(120)
  text("+", 10, 600)
  strokeWeight(6)
  line(10, 630, 355, 630)
  strokeWeight(3)
}
