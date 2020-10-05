var fixedRect, movingRect, go1, go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1 = createSprite(100, 100, 50, 50);
  go1.shapeColor = "blue";
  go2 = createSprite(1100, 100, 50, 50);
  go2.shapeColor = "blue";
  go1.velocityX = 3;
  go2.velocityX = -3;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(go1, go2);
  drawSprites();
}

