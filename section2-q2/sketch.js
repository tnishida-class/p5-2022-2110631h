// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){fill(255,255,255)}
      else{fill(128)}
    rect(size*i,size*j,size,size)
    fill(255,0,0)
    if(i%2==1){
    let a=i+0.5;
    circle(size*a,size*0.5,size*0.9);
    circle(size*a,size*2.5,size*0.9);
    fill(0)
    circle(size*a,size*6.5,size*0.9);}
    else{
    let b=i+0.5
    circle(size*b,size*1.5,size*0.9);
    fill(0)
    circle(size*b,size*5.5,size*0.9);
    circle(size*b,size*7.5,size*0.9);}
  }
    }
  }