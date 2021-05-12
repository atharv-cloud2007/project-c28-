const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter. Bodies;



var engine, world, object,ground,LW;
var box1,paper1,box2,box3,box4

function setup() {
createCanvas(800,400);
engine = Engine.create();
world = engine.world;
box1 = new Box(500,310,20,100);
box2 = new Box(600,360,200,20);
box3 = new Box(700,310,20,100);
box4=new Box(400,400,800,30)
paper1=new Paper(200,240,70,70)
var option1 ={
  isStatic : true
}
var option2 ={
  isStatic:true 
}
ground=Bodies.rectangle(400,400,50,50,option1)
World.add(world,ground)
}

function draw() {
  background(255); 
  Engine.update(engine)
  box1.display()
  box2.display()
  box3.display()
  paper1.display()
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800,50)
}
function  keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.podition,{x:185,y:-185})
  }
}