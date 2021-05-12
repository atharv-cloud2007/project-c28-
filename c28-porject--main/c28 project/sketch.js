
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var tree,ground1,rock,boy,mango1,mango2,mango3,mango4,mango5,chain;
function preload()
{

}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    boy = new Boy(250,700,250,400)
	tree= new ground(740,500,350,600)
	ground1 = new Ground(500,790,1000,20)
	mango1 = new Mango(640,400,50,50)
	mango2 = new Mango(670,320,50,50)
	mango3 = new Mango(730,320,50,50)
	mango4 = new Mango(800,340,50,50)
	mango5 = new Mango(840,400,50,50)
	rock = new Rock(180,620,70,70)
	chain = new Chain(rock.body,{x:180,y:620})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  ground1.display()
  rock.display()
  chain.display()
  boy.display()
  if(isTouching(mango1,rock)){
	  Body.setStatic(mango1.body,false)
  }
  if(isTouching(mango2,rock)){
	Body.setStatic(mango2.body,false)
}
if(isTouching(mango3,rock)){
	Body.setStatic(mango3.body,false)
}
if(isTouching(mango4,rock)){
	Body.setStatic(mango4.body,false)
}
if(isTouching(mango5,rock)){
	Body.setStatic(mango5.body,false)
}
  console.debug()
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	chain.fly()
	}
	function keyPressed(){
	if(keyCode==32){
		chain.attach(rock.body)
	}
	}
