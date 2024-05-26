let gameState = 'game';
let tail =[];
let score = 0
let headX = 0;
let headY = 0;
let foodX = Math.floor(Math.random() * 20) * 20;
let foodY = Math.floor(Math.random() * 20) * 20;
let moveX = 0;
let moveY = 0;
let Bscore = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (gameState === 'game'){
      background(220);
textSize(20);
text("Score: " + score, 20, 20);
    fill(157, 157, 255);
    stroke(0);
    rect(headX, headY, 20, 20);
    
        fill(254, 57, 78);
        rect(foodX, foodY, 20, 20);
    if(headX === foodX && headY === foodY){
foodX = Math.floor(Math.random() * 20) * 20;
foodY = Math.floor(Math.random() * 20) * 20;
      addTail();
      score += 1;
    }
    if(frameCount % 7 == 0){
      updateTail(headX, headY);
      headX += moveX;
      headY += moveY;
      
      checkCollision();
      
      if(headX >= 400){
        headX=0;
      }else if(headX < 0){
        headX=380;
      }
      if(headY >= 400){
        headY=0;
      }else if(headY < 0){
        headY=380;
      }
    }
keyPressed();
         drawTail();
    if(score > Bscore){
      Bscore = score;
    }
  } else{
    textSize(40);
    fill(0, 0, 0);
    text("Game over", 100, 150);
    textSize(32);
    text("Your result: " + score, 100, 200);
    textSize(32);
    text("Your best score: " + Bscore, 100, 250)
if(keyCode == ESCAPE){
  clear();
  gameState = 'game';
  tail =[];
  score = 0
  headX = 0;
  headY = 0;
  foodX = Math.floor(Math.random() * 20) * 20;
  foodY = Math.floor(Math.random() * 20) * 20;
  moveX = 0;
  moveY = 0;
for(let i = 0; i < tail.length; i++){
  tail[i].x = 0;
  tail[i].y = 0;
}
  textSize(20);
  }
   



}}

function keyPressed(){
  if(keyCode == 87 && moveY !== 20){
    moveX = 0;
    moveY = -20;
      
  }
    if(keyCode == 83 && moveY !== -20){
    moveX = 0;
    moveY = 20;
      
  }
    if(keyCode == 65 && moveX!== 20){
    moveX = -20
    moveY = 0;
      
  }
    if(keyCode == 68 && moveX!== -20){
    moveX = 20
    moveY = 0;
      
  }
}
function addTail(){
  tail.push({
    x: headX,
    y: headY

  })
}
function updateTail(targetX, targetY){
  if(tail.length > 0){
    for(let i = tail.length - 1; i > 0; i--){
      tail[i].x = tail[i - 1].x;
      tail[i].y = tail[i - 1].y;
    }
    tail[0].x = targetX;
    tail[0].y = targetY;

  }
}
function drawTail(){
  fill(157, 157, 255);
  for(let i = 0; i < tail.length; i++){
    rect(tail[i].x, tail[i].y, 20, 20);
  }
}
function checkCollision(){
for(let i = 0; i < tail.length; i++){
  if(headX === tail[i].x && headY === tail[i].y){

  gameState = 'PAUSE';





  }
  
}
}
