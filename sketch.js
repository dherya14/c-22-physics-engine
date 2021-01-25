const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine,world,ground

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  
  var options={
    isStatic : true
  }
  ground=Bodies.rectangle(200,390,400,30,options)
  World.add(world,ground)
console.log(ground.position.x)  

var balloptions={
  restitution :0.5
}
ball=Bodies.circle(200,100,20,balloptions)

World.add(world,ball)
}
  

function draw(){ 
 background(0);   
Engine.update(engine)

 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,30)

 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
}







































































