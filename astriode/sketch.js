let ship;

function preload() {
	const imgurl ='spaceship.png'; //png
  ship = loadImage(imgurl);
}

function setup() {
  imageMode(CENTER);
  createCanvas(300, 300);

}
  
  function draw() {
    background(300); //boksen 
    line(0, 0, 300, 0) //boksen
    line(0, 0, 0, 300) // boksen
    line(300,0 ,300, 300) //boksen
    line(0,300,300,300) //boksen
    image(img, 100, 100, 40, 40); //flyet

  }