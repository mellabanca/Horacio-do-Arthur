var horacio, horacioImagem;
var osmusquitotapicando;
var verona;
var backiardigans;
var parker;
var venom;
var stark;
var roger;
var baner;
var lang;
var fury;
var roads;
var rocket;
var vingadores;
var sextetosinistro;
var avantevingadores = 1;
var eusouinevitavel = 0;
var estado = avantevingadores;
var batman;
var charada,charadaimagen;
var coringa,coringaimagen;
var mario;
var bos;
var luig;
var mensagem = "Isso é uma mensagem";

function preload(){
  horacioImagem = loadAnimation("trex1.png","trex3.png","trex4.png");
  verona = loadImage("ground2.png");
  venom=loadImage("cloud.png");
  stark=loadImage("obstacle1.png");
  roger=loadImage("obstacle2.png");
  baner=loadImage("obstacle3.png");
  lang=loadImage("obstacle4.png");
  fury=loadImage("obstacle5.png");
  roads=loadImage("obstacle6.png");
  batman=loadAnimation("trex_collided.png");
  charadaimagen=loadImage("gameOver.png");
  coringaimagen=loadImage("restart.png");
  mario=loadSound("jump.mp3");
  bos=loadSound("die.mp3");
  luig=loadSound("checkPoint.mp3");
}

function setup(){
createCanvas(windowWidth,windowHeight);
  osmusquitotapicando = createSprite(width/2,height-80,width,125);
  osmusquitotapicando.addImage(verona);
  osmusquitotapicando.x = width/2;
  horacio = createSprite(50,height-70,20,50);
  horacio.addAnimation("correndo", horacioImagem);
  horacio.addAnimation("bateuasbotas",batman);
  horacio.scale = 0.5;
  backiardigans = createSprite(width/2,height-10,width,125);
  backiardigans.visible = false;
  borda = createEdgeSprites();
  rocket=0;
  //var numero = Math.round(random(1,100));
  //console.log(numero);
  vingadores = new Group();
  sextetosinistro = new Group();
  horacio.debug = false;
  horacio.setCollider("circle",0,0,35);
  charada=createSprite(width/2, height/2-50);
  charada.addImage(charadaimagen);
  coringa=createSprite(width/2,height/2);
  coringa.addImage(coringaimagen);
  coringa.scale=0.7;
  
}

function draw(){

  background("#282828");
  //console.log(horacio.y);
  //console.log(mensagem);

if(estado === avantevingadores){
  charada.visible=false;
  coringa.visible=false;
  osmusquitotapicando.velocityX = -(4+rocket/100);
  if(osmusquitotapicando.x<0){
    osmusquitotapicando.x = width/2;
  }
  if(keyDown("space")&&horacio.y>=height-120 || touches.length > 0 && horacio.y>=height-120){
    horacio.velocityY = -12;
    mario.play();
    touches = [];
  }

  horacio.velocityY = horacio.velocityY + 1;
  gerador();
  strange();
  rocket+=Math.round(frameRate()/60);
if(sextetosinistro.isTouching(horacio)){
  estado=eusouinevitavel;
  bos.play();
}
if(rocket>0&&rocket%100===0){
  luig.play();
  luig.setVolume(0.2);
} 



} else if(estado === eusouinevitavel){
  charada.visible=true;
  coringa.visible=true;
  horacio.changeAnimation("bateuasbotas");
  osmusquitotapicando.velocityX = 0;
  vingadores.setVelocityXEach(0);
  sextetosinistro.setVelocityXEach(0);
  vingadores.setLifetimeEach(-1);
  sextetosinistro.setLifetimeEach(-1);
  horacio.velocityY=0;
  if(mousePressedOver(coringa) || touches.length > 0){
    goku();
    touches = [];
  }
}
  horacio.collide(backiardigans);

  
drawSprites();
text("pontos da tua vida="+rocket,50,height/2-150);

}

function goku(){
  estado=avantevingadores;
  vingadores.destroyEach();
  sextetosinistro.destroyEach();
  horacio.changeAnimation("correndo",horacioImagem);
  rocket=0;

}

function gerador(){
if(frameCount%60===0){
  parker = createSprite(width+20,height-300,40,10);
  parker.addImage(venom);
  parker.y=Math.round(random(5,height/2));
  parker.velocityX = -3;
  parker.depth = horacio.depth;
  horacio.depth+=1;
  parker.lifetime = 300;
  vingadores.add(parker);
}}
function strange(){
if(frameCount%60===0){
  var doctor=createSprite(width,height-95,10,40);
  doctor.velocityX=-(6+rocket/100);
  var thanos=Math.round(random(1,6));
  switch (thanos) {
    case 1:doctor.addImage(stark);
      break;
  case 2:doctor.addImage(roger);
  break;
  case 3:doctor.addImage(baner);
  break;
  case 4:doctor.addImage(lang);
  break;
  case 5:doctor.addImage(fury);
  break;
  case 6:doctor.addImage(roads);
  break;
    default:
      break;
  }
  doctor.scale=0.5;
  doctor.lifetime=300;
  sextetosinistro.add(doctor);
}
}

