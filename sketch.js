var fireDragon,iceDragon ,iceFloor,fireFloor,rand
var fDragonimg,iDragonimg,fFloorimg,iFloorimg,floor1Group,floor2Group
var gameState = 1


function preload(){
fDragonimg = loadImage("images/fire dragon.png");
iDragonimg = loadImage("images/ice dragon.png");
fFloorimg = loadImage("images/fire floor.png");
iFloorimg = loadImage("images/ice floor.png");
}



function setup() {
  createCanvas(1450,750);
  fireDragon = createSprite(200,540,50,50)
  fireDragon.addImage(fDragonimg);
  fireDragon.scale = 0.35;
  iceDragon = createSprite(200,185,50,50)
  iceDragon.addImage(iDragonimg);
  iceDragon.scale = 0.5;
  floor1Group= new Group ();
  floor2Group = new Group();
 

}

function draw() {
  background(106, 247, 252); 
  text("x:"+ mouseX + "y:"+ mouseY,mouseX,mouseY); 
  fireDragon.collide(floor1Group);
  if(keyDown("UP_ARROW")){
    fireDragon.velocityY = -10;
  }
  console.log(fireDragon.y)
  fireDragon.velocityY = fireDragon.velocityY + 0.5;
 iceDragon.collide(floor2Group);
  if(keyDown("SPACE")){
    iceDragon.velocityY = -10
  }
  iceDragon.velocityY=iceDragon.velocityY + 0.5;
  floor1();
  floor2();
  drawSprites();
}
function floor2(){
  if(frameCount % 5=== 0){
    iceFloor = createSprite(1400,236);
    iceFloor.addImage(iFloorimg);
    iceFloor.scale = 0.5;
    iceFloor.velocityX = -7;
    floor2Group.add(iceFloor);
  }
}

function floor1(){
  if(frameCount % 5 === 0){
    fireFloor = createSprite(1400,585);
   fireFloor.addImage(fFloorimg);
   fireFloor.scale = 0.5; 
    fireFloor.velocityX = -7;
    floor1Group.add(fireFloor);
    
  }
}

