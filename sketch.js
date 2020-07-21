var car,wall;
var speed,weight


function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height);
}

function draw() {
  background(255,255,255);  
 
  deformation = (0.5*speed*speed*weight)/22500
  car.velocityX = speed/10;
  car.shapeColor = (rgb(20,100,200));



  if(wall.x - car.x <= (car.width/2 + wall.width/2) && deformation <= 80   )
  {
    car.shapeColor = (rgb(1,150,1)); 
    car.x = wall.x - wall.width;
    
  }
  
  if ((wall.x - car.x <= (car.width/2 + wall.width/2) && deformation>80 && deformation<180))
  {
    car.shapeColor = (rgb(250,250,100)); 
    car.x = wall.x - wall.width;
  }

  if ((wall.x - car.x <= (car.width/2 + wall.width/2) && deformation>=180))
  {
    car.shapeColor = (rgb(200,1,1)); 
    car.x = wall.x - wall.width;
  }




  
  
  drawSprites();
}