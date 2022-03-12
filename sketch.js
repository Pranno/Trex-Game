
var trex ,trex_running;
var ground,groundImage;
function preload(){

  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex = createSprite(50,150,30,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.7;

  edges = createEdgeSprites();

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
 
 
}

function draw(){
  background("lightgrey");

  if(keyDown("space")){
    trex.y = trex.y -10;
  }

  trex.velocityY = trex.velocityY + 0.5;

  trex.collide(ground);
  
  drawSprites();
}
