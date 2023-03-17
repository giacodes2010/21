
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj
var leftSide
var rightSide

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var option={
        restitution:0.2,
		friction:0,
		density:0.12
	}
	ball = Bodies.circle(200,100,20,option)
    World.add(world,ball)
    
    groundObj = new Ground(width/2,height-100,width,20)
	leftSide = new Ground(900,height-170,20,120)
	rightSide = new Ground(1200,height-170,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  groundObj.show()
  leftSide.show()
  rightSide.show()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:8,y:-8})
	}
}


