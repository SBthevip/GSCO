function BBB2(){
    if(wall.x-car2.x < (car2.width+wall.width)/2)
    {
      car2.velocityX=0;
      var deformation=0.5 * weight * speed* speed/22509;
      if(deformation>180)
      {
        car2.shapeColor=color(230,230,0);
      }
    
      
      if(deformation<180 && deformation>100) {
      car2.shapeColor=color(230,0,0); 
    }
      
      if(deformation<100)
      {
        car2.shapeColor=color(0,255,0);
      }
      }
      }
