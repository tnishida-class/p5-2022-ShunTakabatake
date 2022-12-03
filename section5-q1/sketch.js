// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  const blue = color(0, 0, 255);
  const red = color(255, 0, 0);
  balloon(20, 10, blue, red, "I love Hololive EN");
}

function balloon(ax, ay, bc, fc, t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = h * 0.5;
  noStroke();
  fill(bc);
  rect(ax, ay, ax + w + p * 2, ay + h + p * 2);
  triangle(ax + w + p * 2 - 30, ay + h + p * 2, ax + w + p * 2, ay + h + p * 2 + h, ax + w + p * 2 - 5, ay + h + p * 2);
  fill(fc);
  text(t, ax + p , ay + 2 * p);
}
  
  
