
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  gameObject1=createSprite(200,200,30,30);
  gameObject1.shapeColor="blue";
  gameObject2=createSprite(250,250,30,30);
  gameObject2.shapeColor="blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject2.shapeColor = "blue";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



