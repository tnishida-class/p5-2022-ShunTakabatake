// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 0){
      fill(255);
      rect(size*i, size*j, size + size*i, size + size*j); 
      }
      else{
      fill(138, 134, 134);
      rect(size*i, size*j, size + size*i, size + size*j);
      if(j < 3){
        fill(255, 0, 0);
        ellipse(size*i + size/2,size*j + size/2, size - 3);      
      }
      else if(j > 4){
        fill(0);
        ellipse(size*i + size/2,size*j + size/2, size - 3); 
      }
      }      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
