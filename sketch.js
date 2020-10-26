var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,1600);
speed=random(10,20);
speed1=random(10,20);
speed2=random(10,20);
weight=random(400,1500);

fixedRect = createSprite(450,450, 700,10 );
fixedRect1 = createSprite(450,550, 700,10 );
fixedRect2 = createSprite(450,350, 700,10 );
//fixedRect2 = createSprite(450,650, 700,10 );
fixedRect2 = createSprite(450,250, 700,10 );  
car=createSprite(50,300,70,30);
 car.velocityX = speed;
 car.shapeColor=(225,225,225);

 car1=createSprite(50, 400, 70, 30);
 car1.velocityX = speed1;
 car1.shapeColor=(225,225,225);

 car2=createSprite(50, 500, 70, 30);
 car2.velocityX = speed2;
 car2.shapeColor=(225,225,225);

  
wall=createSprite(800,400,60,300);
wall.shapeColor=(225,225,225);
}

function draw() {
  background(14,14,56); 
  BBB(); 
  BBB1();
  BBB2(); 
  drawSprites();
}
