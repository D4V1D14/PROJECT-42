var iss,spacecraft,bg,issimage,scimage,scimage1,scimage2,scimage3
var hasdocked=false
function preload(){
  bg=loadImage("assets/spacebg.jpg")
  issimage=loadImage("assets/iss.png")
  scimage=loadImage("assets/spacecraft1.png")
  scimage1=loadImage("assets/spacecraft2.png")
  scimage2=loadImage("assets/spacecraft3.png")
  scimage3=loadImage("assets/spacecraft4.png")

}




function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285,240);
  spacecraft.addImage(scimage)
  iss=createSprite(330,130);
  iss.addImage(issimage)
  spacecraft.scale=0.15
  iss.scale=0.25
}

function draw() {
  background(bg);
  if(!hasdocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW"))
    {
    spacecraft.y=spacecraft.y-2
  }
  if(keyDown("LEFT_ARROW"))
  {
    spacecraft.x=spacecraft.x-2
    spacecraft.addImage(scimage3)
   }
   if(keyDown("RIGHT_ARROW"))
   {
    spacecraft.x=spacecraft.x+2
    spacecraft.addImage(scimage2)
   }
   if(keyDown("DOWN_ARROW"))
   {
    spacecraft.addImage(scimage1)
  }
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
    hasdocked=true
    textSize(25)
    fill("white")
    text("dockingsuccesful",200,300)
  }
}

  drawSprites();
}