// 小手調べ
function setup() {
  createCanvas(200,200);
  for(let i = 0; i < 10; i++){
    if(i <= 4){
      stroke(0, 0, 255);
    }
    else{
      stroke(255, 0, 0);
    }
    noFill();
    strokeWeight(1);
    let x = i*10 + 10
    ellipse(55, 55, x);
  }
}
