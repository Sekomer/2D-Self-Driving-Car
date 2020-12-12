var road = new Road();
var car = new Car(road);

function setup() {
  createCanvas(800,600);
}


function draw() {
 background(0);
 car.show();
 car.update();
 road.show();
 
}
