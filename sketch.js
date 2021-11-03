var trex, trex_correndo;
var ground, soloinvisivel, imagemdosolo;

function preload(){
  trex_correndo = loadAnimation("trex1.png","trex2.png","trex3.png");
  
  imagemdosolo = loadImage("ground2.png");
  
  
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_correndo);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  solo = createSprite(200,180,400,20);
  solo.addImage("ground",imagemdosolo);
  solo.x = solo.width /2;
  solo.velocityX = -4;
  
  //crie um solo invisível
  soloinvisivel = createSprite(200,190,400,10);
  soloinvisivel.visible = false;

  //gerar um numero aleatório
  
  var rand = Math.round(random(10,60));
  //console.log(rand);
 
}

function draw() {
  //definir cor do plano de fundo
  background(220);
  
  console.log(frameCount);
  
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 160) {
    trex.velocityY = -12;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (solo.x < 0){
    solo.x = solo.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(soloinvisivel);

  gerarNuvens();
  
  drawSprites();
  
}

function gerarNuvens(){
  //código para gerar nuvens

}



