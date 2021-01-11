const Engine=Matter.Engine;
  const World=Matter.World;
  const Bodies=Matter.Bodies;
  
var engine,world,box;

  function setup() {
    createCanvas(1000,600);

  engine=Engine.create();
  world=engine.world;
  var option1={restitution:1}
  box=Bodies.circle(200,200,50,option1);

World.add(world,box);
var options={isStatic:true}
ground=Bodies.rectangle(500,580,1000,50,options);

World.add(world,ground);
}

function draw() {
Engine.update(engine);
  background("black");  

ellipseMode(RADIUS);
ellipse(box.position.x,box.position.y,50);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,1000,50);

  drawSprites();
}