let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r,b,g

function preload(){
dvd = loadImage("dvd-logo-png.png");
}


function pickColor(){
  r = random(100,256)
  g = random(100,256)
  b = random(100,256)

}

function setup() {
  createCanvas(800,600);
	x=random(width);
	y=random(height);
	xspeed = 5;
	yspeed = 5;

}

function draw() {
  background(0);
	image(dvd,x,y);
  tint(r,b,g)
	
	x = x+xspeed;
	y = y +yspeed;
	
	
	
	if (x  + dvd.width >= width || x == 0){
	xspeed = -xspeed;
    x = width - dvd.width;
    pickColor();
	} else if(x <= 0){
  xspeed = -xspeed;
    x=0;
  pickColor();

  }
  
  
	if (y  + dvd.height >= height || y ==0){
	yspeed = -yspeed;
    y= height - dvd.height;
   pickColor();

	} else if ( y <= 0) {
  yspeed = -yspeed;
    y = 0;
  pickColor();

  }
	
}