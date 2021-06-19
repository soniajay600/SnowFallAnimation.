var backgroundImage;
var boy1,boy1Image;
var boy2,boy2Image;
var invisibleGround;
var snow,snowImage;
function preload(){
 backgroundImage=loadImage("snow1.jpg"); 
 boy1Image=loadImage("boy1.png");
 boy2Image=loadImage("boy2.png");
 snowImage=loadImage("snow4.webp");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  boy1=createSprite(400,500)
  boy1.addImage("Gautam",boy1Image);
  boy1.scale=0.6;

  boy2=createSprite(900,500)
  boy2.addImage("Anshu",boy2Image);
  boy2.scale=0.4;

  invisibleGround=createSprite(windowWidth/2,windowHeight/2+200,windowWidth,5 );
  invisibleGround.visible=false;

  
}

function draw() {
  background(backgroundImage); 
  if(keyDown("space")) {
    boy1.velocityY=-12;
    boy2.velocityY=-12;
}

  if (keyDown("LEFT_ARROW")) {
  
  boy1.x=boy1.x-5;    
boy1.velocityY=0;
boy2.x=boy2.x-2;    
boy2.velocityY=0;
  }
  if (keyDown("RIGHT_ARROW")) {
          
    boy1.x=boy1.x+5;
    boy1.velocityY=0;  
    boy2.x=boy2.x+2;
    boy2.velocityY=0;       
    }
//add gravity
boy1.velocityY = boy1.velocityY + 0.8;
boy2.velocityY = boy2.velocityY + 0.8;

boy1.collide(invisibleGround)
boy2.collide(invisibleGround)

spawnsnow();
  drawSprites();
}
function spawnsnow(){
  if(frameCount%10===0){
  snow=createSprite(random(20,windowWidth),10);
  snow.addImage("S",snowImage);
  snow.velocityY=3;
  snow.scale=0.08;
  }
}