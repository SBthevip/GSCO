function BBB1(){
    if(wall.x-car1.x < (car1.width+wall.width)/2)
    {
      car1.velocityX=0;
      var deformation=5 * weight * speed* speed/22509;
      if(deformation>180)
      {
        car1.shapeColor=color(230,230,0);
      }
    
      
      if(deformation<180 && deformation>100) {
      car1.shapeColor=color(230,0,0); 
    }
      
      if(deformation<100)
      {
        car1.shapeColor=color(0,255,0);
      }
      }
      }
