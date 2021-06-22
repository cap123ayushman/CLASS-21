const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var bottomg,bottoml,bottomr,bottomt;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  button1=createImg("push.png")
  button1.position(220,30)
  button1.size(50,50)
  button1.mouseClicked(hForce)

  button2=createImg("push.png")
  button2.position(20,30)
  button2.size(50,50)
  button2.mouseClicked(vForce)


  world = engine.world;
  bottomg=new Ground(200,390,400,20)
  bottomt=new Ground(200,10,400,20)
  bottoml=new Ground(10,200,20,400)
  bottomr=new Ground(390,200,20,400)

  var ball_options={
    restitution:1.0  
    }
  
    ball = Bodies.circle(100,10,40,ball_options);
    World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipseMode(RADIUS)
fill("red")
ellipse(ball.position.x,ball.position.y,40);

  bottomg.show()
  bottoml.show()
  bottomr.show()
  bottomt.show()
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

