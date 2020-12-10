//Prova - Conversor de unidades - fase 1 - https://youtu.be/cGaB6YqPqGc
	/* (EF03MA19) Estimar, medir e comparar comprimentos, utilizando unidades de medida não padronizadas e padronizadas mais usuais (metro, centímetro e milímetro) e diversos instrumentos de medida */
var tela=1;
var y=130;
var y2=25;
var y3=150;
var y4=330;
var x1=60;
var x2=330;
var y5=430;
var y6=450;
var pontos=0;
var vidas=3;
var conts=30;
var cont=900;
var aleatorio;
var sorteadas = [];
let rate=30;
let song;
let song2;
let song3;
let song4;
let song5;
let img;
let img2;
let img3;
function preload(){
    song = createAudio('somquestsp5.mp3')
    song2 = createAudio('errop5.mp3')
    song3 = createAudio('acertop5.mp3')
    song4 = createAudio('youwinp5.mp3')
    song5 = createAudio('sommenup5.mp3')
    img = loadImage('at35.jpeg');
    img2 = loadImage('at02.jpeg')
    img3 = loadImage('at58.jpeg')
}

function setup() {
  createCanvas(500, 500);
  song.volume(0.3)
  song5.volume(0.3)
  frameRate(rate)
  aleatorio = int(random(1,6));
}
function draw(){
  textStyle(NORMAL)
  if(tela==1){
    conts=30;
    cont=900;
    pontos=0;
    vidas=3;
    sorteadas = [];
    song.stop();
    song5.play();
    textAlign(CENTER);
    textSize(28);
    fill(240);
    stroke(0);
    text("Conversor de Unidades", 245, 100)
    if(mouseX > 180 && mouseX < 180 + 100 && mouseY >125 && mouseY < 125 + 70){
      if (mouseIsPressed){
      clear();
      tela=2;
    }
    }
    stroke(200);
    fill(20);
    rect(195, 125, 100, 70, 15); 
    fill(220);
    rect(200, y, 90, 60, 15);
    fill(240);
    stroke(0);
    text("Iniciar", 245, 170)
    if(mouseX > 180 && mouseX < 180 + 100 && mouseY >225 && mouseY < 225 + 70){
      if (mouseIsPressed){
        clear();
        tela=0;
    }
    }
    stroke(200);
    fill(20);
    rect(195, 225, 100, 70, 15);
    rect(200, y, 90, 60, 15);
    fill(240);
    stroke(0);
    text("Iniciar", 245, 170)
    fill(240);
    stroke(0);
    text("Ajuda", 245, 270)    
  }
    else if(pontos<=-1 || vidas==0 || conts==0){
        tela=8;
      if(tela==8){
        clear();
        song.stop();
        song5.play();
      fimdejogo();
      sorteadas = [];
      }
    }
    else if (sorteadas.length==6){
      tela=9;
    if(tela==9){
      clear();
      song.stop();
      vocevenceu();
      song3.stop();
      song4.play();
      sorteadas = [];
      }
    }
    else if(tela==2){
      clear();
      song.stop();
      song5.play();
      intro();
    }
  else if(tela==11){
    clear();
    song.stop();
    song5.play();
    unidades();
  }
  else if(tela==12){
    clear();
    song.stop();
    song5.play();
    creditos();
  }
    else if (tela==3) { 
      clear();
      cont=cont-1;
      conts = parseInt(cont/rate);
      song5.stop();
      song.play();
      nivel1();
      }
    else if (tela==0) { 
      clear();
      song5.play();
      ajuda();
      }
    else if(tela==4){
    clear();
    cont=cont-1;
    conts = parseInt(cont/rate);
    song5.stop();
    song.play();
    nivel2();
    }
    else if(tela==5){
    clear();
    cont=cont-1;
    conts = parseInt(cont/rate);
    song5.stop();
    song.play();
    nivel3();
    }
    else if(tela==6){
    clear();
    cont=cont-1;
    conts = parseInt(cont/rate);
    song5.stop();
    song.play();
    nivel4();
    }
   else if(tela==7){
    clear();
    cont=cont-1;
    conts = parseInt(cont/rate);
    song5.stop();
    song.play();
    nivel5();
    }
  
  
}
