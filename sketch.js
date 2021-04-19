const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var superp
var superh

function preload() {
  superp=loadImage("Super.png")

}

function setup() {
  createCanvas(3000, 800);
  superh=createSprite(1500, 400);
  superh.addImage(superp);


	engine = Engine.create();
	world = engine.world;






Engine.run(engine)

}

function draw() {

  superh.x=mouseX
  superh.y=mouseY

  background(0);

}

