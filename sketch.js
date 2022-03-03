var horacio, horacioImagem;
var osmusquitotapicando;
var verona;
var backiardigans;


function preload(){
  horacioImagem = loadAnimation("trex1.png","trex3.png","trex4.png");
  verona = loadImage("ground2.png");
}

function setup(){
createCanvas(600,200);
  osmusquitotapicando = createSprite(200,180,400,20);
  osmusquitotapicando.addImage(verona);
  osmusquitotapicando.x = width/2;
  horacio = createSprite(50,160,20,50);
  horacio.addAnimation("correndo", horacioImagem);
  horacio.scale = 0.5;
  backiardigans = createSprite(200,190,400,10);
  backiardigans.visible = false;
  borda = createEdgeSprites();
  //var numero = Math.round(random(1,100));
  //console.log(numero);
}

function draw(){
background("lightgrey");
//console.log(horacio.y);
  osmusquitotapicando.velocityX = -2;
if(osmusquitotapicando.x<0){
  osmusquitotapicando.x = width/2;
}

if(keyDown("space")&&horacio.y>=150){
  horacio.velocityY = -12;
}

  horacio.velocityY = horacio.velocityY + 1;
  horacio.collide(backiardigans);
  gerador();
drawSprites();
}

function gerador(){

}