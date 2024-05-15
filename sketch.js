var sea, seaImag;
var boat, boatImg;
var limit;

function preload(){
  seaImg = loadImage("sea.png");
  boatImg = loadAnimation("ship-1.png", "ship-3.png", "ship-2.png", "ship-4.png");
}

function setup(){
  createCanvas(600,600);

  limit = createSprite(300, 300, 600, 20);

  sea = createSprite(300, 300, 600, 600);
  sea.addImage(seaImg); 

  //crear sprite del bote
  boat = createSprite(300, 400, 30, 50);
  boat.addAnimation("moving", boatImg);
  boat.scale = 0.2;
}

function draw() {
  background("blue");

  if(keyDown("right")){
    boat.x = boat.x + 10;
  }

  if(keyDown("left")){
    boat.x = boat.x - 10;
  }

  if(keyDown("up")){
    boat.y = boat.y - 10;
  }

  if(keyDown("down")){
    boat.y = boat.y + 10;
  }

  boat.collide(limit);

  drawSprites();
}