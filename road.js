function Road(){
  this.lines = Track1();
  
  
  this.show = function(){
    for(let i=0; i<this.lines.length; i++){
      push();
      strokeWeight(5);
      stroke(122,178,63);
      line(this.lines[i][0],this.lines[i][1],this.lines[i][2],this.lines[i][3]);
      pop();
    }
  };
}
