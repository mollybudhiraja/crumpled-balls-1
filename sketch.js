
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var bin1;
var bin2;
var bin3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Bin(650,655,190,10);
    bin2=  new Bin(550,570,10,190)
    bin3= new  Bin(750,570,10,190)
	paper1=new Paper(50,500,30)
	ground1=new Ground(400,665,800,10)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();
  ground1=new Ground(400,665,800,10)

  drawSprites();
 
}


function keyPressed(){
	
	if(keyCode=== UP_ARROW){

   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-45});
	}
}
