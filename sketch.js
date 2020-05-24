const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground;
var pig1;
var pig2;
var log1;
var log2;
var log3;
var log4;
var bird1;

function setup(){
    var canvas = createCanvas(1360,660);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,630,50,70);
    box2 = new Box(1200,630,50,70);
    box3 = new Box(1000,520,50,70);
    box4 = new Box(1200,520,50,70);
    box5 = new Box(1100,420,50,70);
    ground = new Ground(680,645,1360,20);
    pig1 = new Pig(1100,630);
    pig2 = new Pig(1100,520);
    log1 = new Log(1100,550,250,PI/2);
    log2 = new Log(1100,450,250,PI/2);
    log3 = new Log(1040,420,125,PI/7);
    log4 = new Log(1140,420,125,-PI/7);
    bird1 = new Bird(150,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
   pig1.display();
   pig2.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   bird1.display();
}