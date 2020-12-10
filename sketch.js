
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var world,engine;
var rope1,rope2,rope3,rope4,rope5,rope5,rope7;
var bob1,bob2,bob3,bob4,bob5,bob6,bob7;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(400,300,80);
	bob2 = new Bob(500,500,80);
	bob3 = new Bob(550,500,80);
	bob4 = new Bob(600,500,80);
	bob5 = new Bob(700,500,80);
	bob6 = new Bob(750,500,80);
	bob7 = new Bob(800,500,80);


	ground = new Ground(675,620,1400,20)

	roof=new Ground(660,100,1000,50)

	rope1= new Rope(bob1.body,roof.body,-250,0);
	rope2= new Rope(bob2.body,roof.body,-175,0);
	rope3= new Rope(bob3.body,roof.body,-100,0);
	rope4= new Rope(bob4.body,roof.body,-25,0);
	rope5= new Rope(bob5.body,roof.body,50,0);
	rope6= new Rope(bob6.body,roof.body,125,0);
	rope7= new Rope(bob7.body,roof.body,200,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(224,224,224);
  
  drawSprites();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  roof.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();

}

function keyPressed() 
{ 
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	 } 
	}


