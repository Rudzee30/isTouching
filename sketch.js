var fixedRect, movingRect;
var go1, go2, go3, go4;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor="Blue";
  movingRect= createSprite(400,200,80,30);
  movingRect.shapeColor="Red";


  go1 = createSprite(100, 100, 50, 50);
  go1.shapeColor = "green";
  go2 = createSprite(200, 100, 50, 50);
  go2.shapeColor = "green";
  go3 = createSprite(300, 500, 50, 50);
  go3.shapeColor = "green";
  //go3.velocityX = 4;
  go4 = createSprite(400, 500, 50, 50);
  go4.shapeColor = "green";
  //go4.velocityX = -4;
}

function draw() {
  background("Black");
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;  
  
  if(isTouching(movingRect,go4)){
    go4.shapeColor = "yellow";
    movingRect.shapeColor="yellow";
  }
else{
  go4.shapeColor = "white";
    movingRect.shapeColor="white";
}
 // console.log(fixedRect.y - movingRect.y );
 // console.log(fixedRect.height/2 +movingRect.height/2);
  drawSprites();
}

//horizontal distance between 2 rectangles when they touch
// movingRect.x - fixedRect.x < fixedRect.width/2 +movingRect.width/2

