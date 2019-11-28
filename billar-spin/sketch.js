let img;

function preload() {
	const imgurl ='bilar.png';
  img = loadImage(imgurl);
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background(220);
image(img, 0, 0);

}
