var bathImg, brushImg, drinkImg, eatImg, gym1Img, gym2Img, issImg, moveImg, sleepImg;
var astronaut, iss, edges

function preload(){
  bathImg = loadAnimation(bath1.png, bath2.png);
  brushImg = loadImage(brush.png);
  drinkImg = loadAnimation(drink1.png, drink2.png);
  eatImg = loadAnimation(eat1.png, eat2.png);
  gym1Img = loadAnimation(gym1.png, gym2.png);
  gym2Img = loadAnimation(gym11.png, gym12.png);
  issImg = loadImage(iss.png);
  moveImg = loadAnimation(move.png, move1.png);
  sleepImg = loadImage(sleep.png);

}

function setup() {
  createCanvas(800,400);
  iss = createSprite(200,200);
  iss = addImage(issImg, "background");

  astronaut =  createSprite(400, 200, 50, 50);
  astronaut = addImage(sleepImg, "sleeping");
  astronaut.scale = 0.1
}

function draw() {
  background(255,255,255); 
  
  Text("Instructions: Up Arrow - Brushing, Down Arrow - Eating, Left Arrow - Gymming, Right Arrow - Bathing, m key - Moving, d key - Drinking", 100, 50);

  edges = createEdgeSprites();
  astronaut.collide(edges);
  
  if(keyDown("up")){
    astronaut.addAnimation(brushImg, "brushing");
    astronaut.changeAnimation(brushImg);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("down")){
    astronaut.addAnimation(eatImg, "eating");
    astronaut.changeAnimation(eatImg);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("right")){
    astronaut.addAnimation(bathImg, "bathing");
    astronaut.changeAnimation(bathImg);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("left")){
    astronaut.addAnimation(gymImg, "gymming");
    astronaut.changeAnimation(gymImg);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation(moveImg, "moving");
    astronaut.changeAnimation(moveImg);
    astronaut.velocityX = -3;
    astronaut.velocityY = -1;
  }
  if(keyDown("d")){
    astronaut.addAnimation(drinkImg, "drinking");
    astronaut.changeAnimation(drinkImg);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  drawSprites();
}