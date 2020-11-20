var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2-30, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2-30, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2-30 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxPosition=width/2-100;
	 boxY=610;
	 boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	 boxLeftSprite.shapeColor=color(255,0,0);
	 
	 boxRightSprite=createSprite(400,boxY,20,100);
	 boxRightSprite.shapeColor=color(255,0,0);
	 
	 boxDownSprite=createSprite(350,boxY+40,100,20);
	 boxDownSprite.shapeColor=color(255,0,0);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  boxLeftSprite.display();
  boxRightSprite.display();
  
  keyPressed();
  drawSprites();
  
}

 function keyPressed(){
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);	
  }
}



