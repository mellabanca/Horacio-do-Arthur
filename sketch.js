var horacio, horacioImagem;

function preload(){
  horacioImagem = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200);
  
  horacio = createSprite(50,160,20,50);
  horacio.addAnimation("correndo", horacioImagem);
  horacio.scale = 0.5;
 
  borda = createEdgeSprites();
}

function draw(){
  background("lightgrey");
  
  if(keyDown("space")){
    horacio.velocityY = -12;
  }
  horacio.velocityY = horacio.velocityY + 1;

  horacio.collide(borda[3]);
  drawSprites();
}
