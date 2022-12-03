// テキスト「配列を使った描画」練習問題：折れ線グラフ
let dx;
let scores;
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  } 
}

//数字の表示をつけたり消したりするためにsetupからdraw関数に変更しました
function draw(){
  createCanvas(400, 400);
  background(240);
  
  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n);}
 
  // ここからが本番
  fill(0);
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    
    // BLANK[1]
    if(i == 0){px = 10 + dx * i; py = height - height * scores[i] / 100;}//iが0のときのみpxとpyにスタート位置を代入
    dx = width / scores.length;
    ellipse(10 + dx * i, height - height * scores[i] / 100, 8);
    line(px, py, 10 + dx * i, height - height * scores[i] / 100);
    px = 10 + dx * i;
    py = height - height * scores[i] / 100;
    
    //カーソルを合わせたときに数字が表示されるようにする
    let x = 10 + dx * i;
    let y = height - height * scores[i] / 100;
    if(dist(x, y, mouseX, mouseY) < 20){text(round(scores[i]), x + 10, y + 10);}
  }
}

