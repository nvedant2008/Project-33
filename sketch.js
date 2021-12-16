const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Body = Matter.Body
var maxSnow = 10
var snow = []
var snowBody


function preload () {
snow_img= loadImage("snow2.jpg")


}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create()
  world= engine.world
  createSprite(400, 200, 50, 50);

  if(frameCount%180 === 0){
     for(var i = 0; i < maxSnow; i++){
        snow.push(snowBody= new Snow(random(0,1200),random(-50,600)))
       }
}

function draw() {
  background(snow_img);  
  Engine.update(engine)
 
  for(var i=0;i<maxSnow; i++) 
  { snow[i].display(); snow[i].repeat(); } 
  if(frameCount%180 === 0) { 
    for(var i=0; i<maxSnow; i++) { 
      snow[i].repeat(); } }

}
drawSprites();

}