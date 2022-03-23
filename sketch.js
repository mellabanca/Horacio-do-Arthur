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
}

function setup(){
createCanvas(600,200);
  osmusquitotapicando = createSprite(200,180,400,20);
  osmusquitotapicando.addImage(verona);
  osmusquitotapicando.x = width/2;
  horacio = createSprite(50,160,20,50);
  horacio.addAnimation("correndo", horacioImagem);
  horacio.addAnimation("bateuasbotas",batman);
  horacio.scale = 0.5;
  backiardigans = createSprite(200,190,400,10);
  backiardigans.visible = false;
  borda = createEdgeSprites();
  rocket=0;
  //var numero = Math.round(random(1,100));
  //console.log(numero);
  vingadores = new Group();
  sextetosinistro = new Group();
  horacio.debug = false;
  horacio.setCollider("circle",0,0,35);
  charada=createSprite(300,100);
  charada.addImage(charadaimagen);
  coringa=createSprite(300,140);
  coringa.addImage(coringaimagen);
  coringa.scale=0.7;
}

function draw(){

  background("#282828");
  //console.log(horacio.y);

if(estado === avantevingadores){
  charada.visible=false;
  coringa.visible=false;
  osmusquitotapicando.velocityX = -2;
  if(osmusquitotapicando.x<0){
    osmusquitotapicando.x = width/2;
  }
  if(keyDown("space")&&horacio.y>=150){
    horacio.velocityY = -12;
  }

  horacio.velocityY = horacio.velocityY + 1;
  gerador();
  strange();
  rocket+=Math.round(frameCount/60);
if(sextetosinistro.isTouching(horacio)){
  estado=eusouinevitavel;
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
}
  horacio.collide(backiardigans);
  
drawSprites();
text("pontos da tua vida="+rocket,450,50);

}

function gerador(){
if(frameCount%60===0){
  parker = createSprite(600,100,40,10);
  parker.addImage(venom);
  parker.y=Math.round(random(5,120));
  parker.velocityX = -3;
  parker.depth = horacio.depth;
  horacio.depth+=1;
  parker.lifetime = 300;
  vingadores.add(parker);
}}
function strange(){
if(frameCount%60===0){
  var doctor=createSprite(600,165,10,40);
  doctor.velocityX=-6;
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

