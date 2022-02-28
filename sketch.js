var horacio, horacioImagem;
var osmusquitotapicando;
var verona;
function preload(){
horacioImagem = loadAnimation("trex1.png","trex3.png","trex4.png");
verona = loadImage("ground2.png");
}
function setup(){
createCanvas(600,200);
horacio = createSprite(50,160,20,50);
horacio.addAnimation("correndo", horacioImagem);
horacio.scale = 0.5;
osmusquitotapicando = createSprite(200,180,400,20);
osmusquitotapicando.addImage(verona);
osmusquitotapicando.x = width/2;
borda = createEdgeSprites();
}
function draw(){
background("lightgrey");
osmusquitotapicando.velocityX = -2;
if(osmusquitotapicando.x<0){
osmusquitotapicando.x = width/2;
}
if(keyDown("space")){
horacio.velocityY = -12;
}
horacio.velocityY = horacio.velocityY + 1;
horacio.collide(osmusquitotapicando);
drawSprites();
}
