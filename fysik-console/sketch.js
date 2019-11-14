   let n ;

function setup() {
  createCanvas(400, 400);
  
    const h = -6.63e-34; //planct constant 
  console.log(h);
  
   const R = 1.0097e7; //rydbergkonstant (M^-1)
  console.log(R);
  
   const c = 3.00e8; // lysetshastighed (m/s)
  console.log(c);
  
    
    n = 1;


  
}

function draw() {
  background(220);
   console.log(n)
  



  
  if(n>=5){
    console.log("done");
    noLoop();
    
  }


  
n++;
}