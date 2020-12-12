var c = "black";
var a = [];
var i = 0;
let lmx=0;
let lmy=0;

function setup() {
 	createCanvas(800, 600);
	background(205);
}

function draw() 
{

  	if (mouseIsPressed&&dist(mouseX,mouseY,lmx,lmy)>5) 
  	{
		stroke(c);
		line(mouseX, mouseY, lmx, lmy);

		a[i] = [mouseX,mouseY, lmx, lmy];
		lmx=mouseX;
		lmy=mouseY;
		i++;
  	}

	noStroke();
	//draw the first button
	fill("red");
	rect(0, 0, 40, 40);

	//draw the second button
	fill("blue");
	rect(40, 0, 40, 40);
}

//this will run whenever the mouse is pressed
function mousePressed() {
	lmx=mouseX;
	lmy=mouseY;
	if (mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) 
	{
	//set the variables to random values
		c = "red";
		s="";
		s+='[';
		for(let i = 0; i < a.length; ++i)
		{
			s+='[';
			for(let j = 0; j < 4; ++j)
			{
				s+=a[i][j];
				if(j!=3){
					s+=',';
				}
			}

			s+=']';
			if(a.length-1!=i)
			{
				s+=',';
			}
		}
		
		s+=']';
		console.log(s);
	}

	if (mouseX > 40 && mouseX < 80 && mouseY > 0 && mouseY < 40) 
	{
		//set the variables to random values
		c = "blue";
	}
}