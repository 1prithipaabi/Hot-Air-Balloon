var balloon, balloonImage;
var bgImage;
var database;

function preload(){
  bgImage = loadImage("images/bg.jpg");
  balloonImage = loadImage("images/balloon.png");
}

function setup() {
  createCanvas(500,500);
  //database = firebase.database();
  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImage);
  balloon.scale = 0.4;
}

function draw() {
  background(bgImage);  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  }
  drawSprites();
}