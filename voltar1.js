function mousePressed(){
    if(mouseX > 150 && mouseX < 150 + 165 && mouseY >420 && mouseY < 420 + 40 && tela!=8 && tela!=0 && tela!=9 && tela!=2 && tela!=12){  
      if(pontos<=-1){
        clear();
        fimdejogo();
        pontos=0;
        sorteadas = [];
      }
        clear();
        tela=1;
       }
  if(tela==8 || tela<=0 || tela==12){
    if(mouseX > 150 && mouseX < 150 + 165 && mouseY >420 && mouseY < 420 + 40){ 
        clear();
        tela=1;
    }
  }
    if(tela==9){
      if(mouseX > 150 && mouseX < 150 + 165 && mouseY >420 && mouseY < 420 + 40){
      clear();
      tela=12;
      }
    }
  
  if(tela==2){
    if(mouseX > 430 && mouseX < 430 + 60 && mouseY >340 && mouseY < 340 + 30){ 
        clear();
        tela=11;
       }
    if(mouseX > 165 && mouseX < 165 + 160 && mouseY >450 && mouseY < 450 + 40){ 
        clear();
        tela=1;
       }
    if(mouseX > 200 && mouseX < 200 + 85 && mouseY >20 && mouseY < 20 + 55){
      clear();
      aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
        aleatorio = int(random(1,6));
        }
          if(sorteadas.length==6)            
          sorteadas = [];
          sorteadas.push(aleatorio);
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==2){
          tela=4;
        }if(aleatorio==3){
          tela=5;
        }if(aleatorio==4){
          tela=6;
        }if(aleatorio==5){
          tela=7;
        }
    }
    }
  else if(tela==3){
    if(mouseX > 330 && mouseX < 330 + 90 && mouseY >330 && mouseY < 330 + 40){
        song3.play();
        clear();
        pontos=pontos+25;
        cont=900;
        conts=30;
        aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
            aleatorio = int(random(1,6));
        } if(sorteadas.length==6){
          clear();
          vocevenceu();
          sorteadas = [];
        }
        sorteadas.push(aleatorio);
        if(aleatorio==2){
          tela=4;
        }if(aleatorio==3){
          tela=5;
        }if(aleatorio==4){
          tela=6;
        }if(aleatorio==5){
          tela=7;
        }
       }
        if(mouseX > 60 && mouseX < 60 + 90 && mouseY >150 && mouseY < 150 + 40 || mouseX > 330 && mouseX < 330 + 90 && mouseY >150 && mouseY < 150 + 40 || mouseX > 60 && mouseX < 60 + 90 && mouseY >330 && mouseY < 330 + 40){ 
          song2.play();
          if(pontos!=0){
      pontos=pontos-10;
      }
          vidas=vidas-1;
        }
  }
   else if(tela==4){
    if(mouseX > 60 && mouseX < 60 + 90 && mouseY >150 && mouseY < 150 + 40){
        song3.play();
        clear();
        pontos=pontos+25;
        cont=900;
        conts=30;
        aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
            aleatorio = int(random(1,6));
        } 
        if(sorteadas.length==6){
            clear();
            vocevenceu();
            sorteadas = [];
        }
        sorteadas.push(aleatorio);
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==3){
          tela=5;
        }if(aleatorio==4){
          tela=6;
        }if(aleatorio==5){
          tela=7;
        }
       }
     if(mouseX > 330 && mouseX < 330 + 90 && mouseY >330 && mouseY < 330 + 40 || mouseX > 60 && mouseX < 60 + 90 && mouseY >330 && mouseY < 330 + 40 || mouseX > 330 && mouseX < 330 + 90 && mouseY >150 && mouseY < 150 + 40){
       song2.play();
         if(pontos!=0){
      pontos=pontos-10;
      }
         vidas=vidas-1;
        }
  }
  else if(tela==5){
    if(mouseX > 330 && mouseX < 330 + 130 && mouseY >150 && mouseY < 150 + 40){ 
        song3.play();
        clear();
        pontos=pontos+25;
        cont=900;
        conts=30; 
        aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
            aleatorio = int(random(1,6));
        } 
        if(sorteadas.length==6){
            clear();
            vocevenceu();
            sorteadas = [];
        }
        sorteadas.push(aleatorio);
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==2){
          tela=4;
        }if(aleatorio==4){
          tela=6;
        } if(aleatorio==5){
          tela=7;
        }
       }
    if(mouseX > 60 && mouseX < 60 + 130 && mouseY >330 && mouseY < 330 + 40 || mouseX > 60 && mouseX < 60 + 130 && mouseY >150 && mouseY < 150 + 40 || mouseX > 330 && mouseX < 330 + 130 && mouseY >330 && mouseY < 330 + 40){ 
      song2.play();
          if(pontos!=0){
      pontos=pontos-10;
      }
          vidas=vidas-1;
        }
  }
  else if(tela==6){
    if(mouseX > 60 && mouseX < 60 + 90 && mouseY >330 && mouseY < 330 + 40){ 
        song3.play();
        clear();
        pontos=pontos+25;
        cont=900;
        conts=30;
        aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
            aleatorio = int(random(1,6));
        } 
        if(sorteadas.length==6){
            clear();
            vocevenceu();
            sorteadas = [];
        }
        sorteadas.push(aleatorio);
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==2){
          tela=4;
        }if(aleatorio==3){
          tela=5;
        } if(aleatorio==5){
          tela=7;
        }
       }
    if(mouseX > 60 && mouseX < 60 + 90 && mouseY >150 && mouseY < 150 + 40 || mouseX > 330 && mouseX < 330 + 90 && mouseY >150 && mouseY < 150 + 40 || mouseX > 330 && mouseX < 330 + 90 && mouseY >330 && mouseY < 330 + 40){  
        song2.play();
          if(pontos!=0){
      pontos=pontos-10;
      }
          vidas=vidas-1;
        }
  }
  else if(tela==7){
    if(mouseX > 305 && mouseX < 305 + 130 && mouseY >150 && mouseY < 150 + 40){ 
        song3.play();
        clear();
        pontos=pontos+25;
        cont=900;
        conts=30;
        aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
            aleatorio = int(random(1,6));
        } 
        if(sorteadas.length==6){
            clear();
            vocevenceu();
            sorteadas = [];
        }
        sorteadas.push(aleatorio);
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==2){
          tela=4;
        }if(aleatorio==3){
          tela=5;
        }if(aleatorio==4){
          tela=6;
        }
       }
    if(mouseX > 60 && mouseX < 60 + 80 && mouseY >330 && mouseY < 330 + 40 || mouseX > 55 && mouseX < 55 + 100 && mouseY >150 && mouseY < 150 + 40 || mouseX > 315 && mouseX < 315 + 110 && mouseY >330 && mouseY < 330 + 40){ 
          song2.play();
          if(pontos!=0){
      pontos=pontos-10;
      }
          vidas=vidas-1;
        }
    
  }
  if(tela==11){
    if(mouseX > 165 && mouseX < 165 + 160 && mouseY >450 && mouseY < 450 + 40){ 
        clear();
        tela=2;
       }
  }
}
function keyPressed(){
  if(tela==0){
  if(keyCode===ENTER && y5==430){
      clear();
      tela=1;
      console.log(tela)
    }
  }
  else if(tela==1){ 
    if(keyCode===UP_ARROW && y>130){
      y=y-100;
    }
    if(keyCode===DOWN_ARROW && y<230){
      y=y+100;    
  }
    if(keyCode===ENTER && y==130){
      clear();
      tela=2;
    }
    if(keyCode===ENTER && y==230){
      clear();
      tela=0;
    }
  }
  else if(tela==2){ 
    if(keyCode===UP_ARROW && y2>25){
      y2=y2-430;
      
    }
    if(keyCode===DOWN_ARROW && y2<455){
      y2=y2+430;
  }
    if(keyCode===ENTER && y2==25){
      clear();
      aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
        aleatorio = int(random(1,6));
        }
          if(sorteadas.length==6)            
          sorteadas = [];
          sorteadas.push(aleatorio);
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==2){
          tela=4;
        }if(aleatorio==3){
          tela=5;
        }if(aleatorio==4){
          tela=6;
        }if(aleatorio==5){
          tela=7;
        }
    }
    if(keyCode===ENTER && y2==455){
      clear();
      tela=tela-1;
    }
  }
  else if(tela==3){ 
    if(keyCode===DOWN_ARROW && y4==330 && y4<430){
      y4=430;
      x2=190;    
    }
    if(keyCode===UP_ARROW && y4==430){
      y4=330;
      x2=330;
    }
    else if(keyCode===UP_ARROW && y4>150){
      y4=y4-180;
    }
    else if(keyCode===DOWN_ARROW && y4<330){
      y4=y4+180;
    }
      else if(keyCode===RIGHT_ARROW && x2<330 && x2!=190){
      x2=x2+270;
      }
        else if(keyCode===LEFT_ARROW && x2>60 && y4!=430){
      x2=x2-270;    
  }
    if(keyCode===ENTER && x2==330 && y4==330){
      song3.play();
      clear();
      pontos=pontos+25;
      cont=900;
      conts=30;
      aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
        aleatorio = int(random(1,6));
        }
          if(sorteadas.length==6)            
          sorteadas = [];
          sorteadas.push(aleatorio);
        if(aleatorio==2){
          tela=4;
        }if(aleatorio==3){
          tela=5;
        }if(aleatorio==4){
          tela=6;
        }if(aleatorio==5){
          tela=7;
        }
    }
    if(keyCode===ENTER && y4==430){
      clear();
      tela=1;
    }
    if(keyCode===ENTER && y4==150 && x2==60 || keyCode===ENTER && y4==330 && x2==60 || keyCode===ENTER && y4==150 && x2==330){
      song2.play();
      if(pontos!=0){
      pontos=pontos-10;
      }
      vidas=vidas-1;
    }
  }
  else if(tela==4){ 
    if(keyCode===DOWN_ARROW && y4==330 && y4<430){
      y4=430;
      x2=190;    
    }
    if(keyCode===UP_ARROW && y4==430){
      y4=330;
      x2=330;
    }
    else if(keyCode===UP_ARROW && y4>150){
      y4=y4-180;
    }
    else if(keyCode===DOWN_ARROW && y4<330){
      y4=y4+180;
    }
      else if(keyCode===RIGHT_ARROW && x2<330 && x2!=190){
      x2=x2+270;
      }
        else if(keyCode===LEFT_ARROW && x2>60 && y4!=430){
      x2=x2-270;   
  }
    if(keyCode===ENTER && x2==60 && y4==150){
      song3.play();
      clear();
      pontos=pontos+25;
      cont=900;
      conts=30;
      aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
        aleatorio = int(random(1,6));
        }
          if(sorteadas.length==6)            
          sorteadas = [];
          sorteadas.push(aleatorio);
        console.log(aleatorio)
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==3){
          tela=5;
        }if(aleatorio==4){
          tela=6;
        }if(aleatorio==5){
          tela=7;
        }
    }
    if(keyCode===ENTER && y4==430){
      clear();
      tela=1;
    }
    if(keyCode===ENTER && y4==330 && x2==330 || keyCode===ENTER && y4==330 && x2==60 || keyCode===ENTER && y4==150 && x2==330){
    song2.play();
    if(pontos!=0){
      pontos=pontos-10;
      }
      vidas=vidas-1;
    }
  }
  else if(tela==5){ 
    if(keyCode===DOWN_ARROW && y4==330 && y4<430){
      y4=430;
      x2=190;   
    }
    if(keyCode===UP_ARROW && y4==430){
      y4=330;
      x2=330;
    }
    else if(keyCode===UP_ARROW && y4>150){
      y4=y4-180;
    }
    else if(keyCode===DOWN_ARROW && y4<330){
      y4=y4+180;
    }
      else if(keyCode===RIGHT_ARROW && x2<330 && x2!=190){
      x2=x2+270;
      }
        else if(keyCode===LEFT_ARROW && x2>60 && y4!=430){
      x2=x2-270;    
  }
    if(keyCode===ENTER && x2==330 && y4==150){
      song3.play();
      clear();
      pontos=pontos+25;
      cont=900;
      conts=30;
      aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
        aleatorio = int(random(1,6));
        }
          if(sorteadas.length==6)            
          sorteadas = [];
          sorteadas.push(aleatorio);
        console.log(aleatorio)
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==2){
          tela=4;
        }if(aleatorio==4){
          tela=6;
        } if(aleatorio==5){
          tela=7;
        }
    }
    if(keyCode===ENTER && y4==430){
      clear();
      tela=1;
    }
    if(keyCode===ENTER && y4==330 && x2==330 || keyCode===ENTER && y4==330 && x2==60 || keyCode===ENTER && y4==150 && x2==60){
      song2.play();
      if(pontos!=0){
      pontos=pontos-10;
      }
      vidas=vidas-1;
    }
  }
  else if(tela==6){ 
    if(keyCode===DOWN_ARROW && y4==330 && y4<430){
      y4=430;
      x2=190;    
    }
    if(keyCode===UP_ARROW && y4==430){
      y4=330;
      x2=330;
    }
    else if(keyCode===UP_ARROW && y4>150){
      y4=y4-180;
    }
    else if(keyCode===DOWN_ARROW && y4<330){
      y4=y4+180;
    }
      else if(keyCode===RIGHT_ARROW && x2<330 && x2!=190){
      x2=x2+270;
      }
        else if(keyCode===LEFT_ARROW && x2>60 && y4!=430){
      x2=x2-270;    
  }
    if(keyCode===ENTER && x2==60 && y4==330){
      song3.play();
      clear();
      pontos=pontos+25;
      cont=900;
      conts=30;
      aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
        aleatorio = int(random(1,6));
        }
          if(sorteadas.length==6)            
          sorteadas = [];
          sorteadas.push(aleatorio);
        console.log(aleatorio)
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==2){
          tela=4;
        }if(aleatorio==3){
          tela=5;
        } if(aleatorio==5){
          tela=7;
        }
    }
    if(keyCode===ENTER && y4==430){
      clear();
      tela=1;
    }
    if(keyCode===ENTER && y4==330 && x2==330 || keyCode===ENTER && y4==150 && x2==330 || keyCode===ENTER && y4==150 && x2==60){
      song2.play();
      if(pontos!=0){
      pontos=pontos-10;
      }
      vidas=vidas-1;
    }
  }
  else if(tela==7){ 
    if(keyCode===DOWN_ARROW && y4==330 && y4<430){
      y4=430;
      x2=190;    
    }
    if(keyCode===UP_ARROW && y4==430){
      y4=330;
      x2=330;
    }
    else if(keyCode===UP_ARROW && y4>150){
      y4=y4-180;
    }
    else if(keyCode===DOWN_ARROW && y4<330){
      y4=y4+180;
    }
      else if(keyCode===RIGHT_ARROW && x2<330 && x2!=190){
      x2=x2+270;
      }
        else if(keyCode===LEFT_ARROW && x2>60 && y4!=430){
      x2=x2-270;
  }
    if(keyCode===ENTER && x2==330 && y4==150){
      song3.play();
      clear();
      pontos=pontos+25;
      cont=900;
      conts=30;
      aleatorio = int(random(1,6));
        while(sorteadas.indexOf(aleatorio)!=-1 && sorteadas.length<5) {
        aleatorio = int(random(1,6));
        }
          if(sorteadas.length==6)            
          sorteadas = [];
          sorteadas.push(aleatorio);
        if(aleatorio==1){
          tela=3;
        }if(aleatorio==2){
          tela=4;
        }if(aleatorio==3){
          tela=5;
        } if(aleatorio==4){
          tela=6;
        }
    }
    if(keyCode===ENTER && y4==430){
      clear();
      tela=1;
    }
    if(keyCode===ENTER && y4==330 && x2==330 || keyCode===ENTER && y4==330 && x2==60 || keyCode===ENTER && y4==150 && x2==60){
      song2.play();
      if(pontos!=0){
      pontos=pontos-10;
      }
      vidas=vidas-1;
    }
  }
  if(keyCode===ESCAPE){
      clear();
      tela=1;
    }
  else if(tela==8 || tela==12){
  if(keyCode===ENTER && y5==430){
      clear();
      tela=1;
    }
  }
  else if(tela==9){
  if(keyCode===ENTER && y5==430){
      clear();
      tela=12;
    }
  }
  else if(tela==11){
  if(keyCode===ENTER && y6==450){
      clear();
      tela=2;
    }
  }
  
}
