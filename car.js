function Car(r){
  this.wi= 25;
  this.hi= 15;
  this.speed=0;
  this.speed_limit=4;
  this.x=3;
  this.y=505;
  this.angle=0;
  
  this.show= function(){
    push();
    fill(200);
    rect(this.x,this.y,this.wi,this.hi);
    pop();
  };
  
  this.update = function(){
    this.x+=this.speed;
    if(keyIsDown(RIGHT_ARROW)){
      this.gas();
    }
    if(keyIsDown(LEFT_ARROW)){
      this.brake();
    }
  };
  
  this.gas = function(){
    if(this.speed<this.speed_limit){
        this.speed+=0.2;
      }
  };
  this.brake = function(){
    this.speed/=1.09;
    if(this.speed<0.01){
      this.speed=0;
    }
  };
  this.turnleft=function(){
    
  };
 
  
}
