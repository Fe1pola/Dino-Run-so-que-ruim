//variáveis

var pre_map, map;
var pre_sky, sky;
var pre_dino, dino;


//pre carregar imagens
function preload(){
  pre_map = loadImage("Fundo Terreno 1.png");
  pre_sky = loadImage("Fundo Céu 2.png");
  pre_dino = loadImage("Dinin.png");
}

//criar sprites
function setup(){
  createCanvas(200,150)
  
  map = createSprite(100,117.5, 20,20);
  map.addImage(pre_map);
  map.depth = 5;
  
  sky = createSprite(100,75,20,20);
  sky.addImage(pre_sky);
  sky.depth = 4;
  
  dino = createSprite(30,111,20,20);
  dino.addImage(pre_dino);
  dino.scale = 0.5;
  dino.depth = 6;
}

//game loop
function draw(){
  //requestFocus();
  move();
  background("black");
 
  
  
  drawSprites();
}

function move(){
  var spd = 3;
  
  if(keyDown("d")){
    dino.x += spd;
  }else if(keyDown("a")){
    dino.x -= spd;
  }
}