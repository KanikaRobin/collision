var fixedrectangle,movingrectangle;

function setup() {
  createCanvas(1200,800);

  fixedrectangle= createSprite(200, 200, 80, 50);//40
  fixedrectangle.shapeColor="blue";
  movingrectangle=createSprite(400,200,60,50);//30
  movingrectangle.shapeColor="blue";
}

function draw() {
  background(0,0,0);
  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
console.log(movingrectangle.x-fixedrectangle.x);

if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2 &&
  fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
  movingrectangle.y-fixedrectangle.y<fixedrectangle.height/2+movingrectangle.height/2&&
  fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2+movingrectangle.height/2){
  movingrectangle.shapeColor="red";
  fixedrectangle.shapeColor="red";
}else{
  movingrectangle.shapeColor="blue";
  fixedrectangle.shapeColor="blue"
}



drawSprites();
}