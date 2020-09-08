const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90)
  weight = random(400, 1500)
  car = createSprite(50, 200, 50, 50)
  wall = createSprite(500, 200, 60, height/2)

  car.velocityX = speed;
  console.log(car.velocityX)
}

function draw() {
  background(255,255,255);  

  if (car.x-wall.x < (wall.width+car.width)/2){
    car.velocityX = 0;
    deformation = (0.5*speed*speed*weight)/22500
  if (deformation < 100){
    car.shapeColor = color("green")
  }
  else if (deformation > 100 && deformation < 180){
    car.shapeColor = color("yellow")
  }
  else if (deformation > 300){
    car.shapeColor = color("red")
  }
}
  
  drawSprites();
}