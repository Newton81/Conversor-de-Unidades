
function intro(){
    stroke(200);
    fill(20);
    rect(165, 20, 160, 40, 15); 
    fill(220);
    rect(170, y2, 150, 30, 15);
    fill(240);
    stroke(20);
    text("Jogar", 245, 50)
    textSize(15)
    stroke(200);
    fill(20);
    rect(60, 75, 370, 170, 15); 
    fill(240);
    stroke(20);
    text("Como funciona as regras do jogo:\n O jogo se baseia em perguntas e respostas,\n onde cada pergunta possui uma resposta correta,\n se você errar a resposta correta\n de uma pergunta você perde 10 pontos;\n se você acertar a resposta correta\n da pergunta ganha 25 pontos.\n O objetivo é responder corretamente\n todas as perguntas obtendo o maior numero de pontos ", 245, 90)
    image(img, 30, 255, 390, 190);
    stroke(200);
    fill(20);
    rect(430, 340, 60, 30, 15);
    fill(240);
    stroke(0);
    text("Ver mais", 460, 360)
    textSize(28)
    stroke(200);
    fill(20);
    rect(165, 450, 160, 40, 15);
    rect(170, y2, 150, 30, 15);
    fill(240);
    stroke(20);
    text("Jogar", 245, 50)
    fill(240);
    stroke(0);
    text("Volte", 245, 480)
}

function nivel1(){
    text("tempo: "+ conts, 300, 25)
    text("pontos:"+pontos,65,25)
    text("vidas:"+vidas,175,25)
    textSize(17)
    stroke(200);
    fill(20);
    rect(55, 50, 360, 40, 15);
    fill(240);
    stroke(0);
    text("Quanto é 100hm (hectômetro) em quilometro?", 235, 80)
    textSize(26)
    stroke(240);
    rect(x2, y4, 90, 40);
    stroke(200);
    fill(20);
    rect(330, 330, 90, 40, 15);
    fill(240);
    stroke(0);
    text("10km", 370, 360)
    stroke(200);
    fill(20);
    rect(330, 150, 90, 40, 15);
    fill(240);
    stroke(0);
    text("0,1km", 370, 180)
    stroke(200);
    fill(20);
    rect(x1, 150, 90, 40, 15);
    fill(240);
    stroke(0);
    text("100km", 105, 180)
    stroke(200);
    fill(20);
    rect(x1, 330, 90, 40, 15);
    fill(240);
    stroke(0);
    text("1000km", 105, 360)
    textSize(26)
    stroke(200);
    fill(20);
    rect(190, 430, 90, 40, 15);
    fill(240);
    stroke(0);
    text("Volte", 235, 460)
}
function nivel2(){
    text("tempo: "+ conts, 300, 25)
    text("pontos:"+pontos,65,25)
    text("vidas:"+vidas,175,25)
    textSize(28)
    stroke(200);
    fill(20);
    rect(55, 50, 360, 40, 15);
    fill(240);
    stroke(0);
    text("Quanto é 100cm em metro?", 235, 80)
    stroke(240);
    rect(x2, y4, 90, 40);
    stroke(200);
    fill(20);
    rect(60, 150, 90, 40, 15);
    fill(240);
    stroke(0);
    text("1m", 100, 180)
    stroke(200);
    fill(20);
    rect(330, 150, 90, 40, 15);
    fill(240);
    stroke(0);
    text("10m", 370, 180)
    stroke(200);
    fill(20);
    rect(60, 330, 90, 40, 15);
    fill(240);
    stroke(0);
    text("0,01m", 105, 360)
    stroke(200);
    fill(20);
    rect(330, 330, 90, 40, 15);
    fill(240);
    stroke(0);
    text("100m",370, 360)
    stroke(200);
    fill(20);
    rect(190, 430, 90, 40, 15);
    fill(240);
    stroke(0);
    text("Volte", 235, 460)
}
function nivel3(){
    text("tempo: "+ conts, 300, 25)
    text("pontos:"+pontos,65,25)
    text("vidas:"+vidas,175,25)
    textSize(18)
    stroke(200);
    fill(20);
    rect(55, 50, 360, 40, 15);
    fill(240);
    stroke(0);
    text("Quanto é 1dam (decâmetro) em milímetro?", 235, 80)
    textSize(25)
    stroke(240);
    rect(x2, y4, 130, 40);
    stroke(200);
    fill(20);
    rect(330, 150, 130, 40, 15);
    fill(240);
    stroke(0);
    text("0,0001mm", 395, 180)
    stroke(200);
    fill(20);
    rect(330, 330, 130, 40, 15);
    fill(240);
    stroke(0);
    text("1000mm", 390, 360)
    stroke(200);
    fill(20);
    rect(60, 150, 130, 40, 15);
    fill(240);
    stroke(0);
    text("0,01mm", 120, 180)
    stroke(200);
    fill(20);
    rect(60, 330, 130, 40, 15);
    fill(240);
    stroke(0);
    text("100mm", 115, 360)
    stroke(200);
    fill(20);
    rect(190, 430, 130, 40, 15);
    fill(240);
    stroke(0);
    text("Volte", 255, 460)
}
function nivel4(){
    text("tempo: "+ conts, 300, 25)
    text("pontos:"+pontos,65,25)
    text("vidas:"+vidas,175,25)
    textSize(18)
    stroke(200);
    fill(20);
    rect(55, 50, 360, 40, 15);
    fill(240);
    stroke(0);
    text("Quanto é 1dm (decímetro) em hectômetro?", 235, 80)
    stroke(240);
    rect(x2, y4, 90, 40);
    stroke(200);
    fill(20);
    rect(60, 330, 90, 40, 15);
    textSize(21)
    fill(240);
    stroke(0);
    text("1000hm", 105, 360)
    textSize(22)
    stroke(200);
    fill(20);
    rect(330, 150, 90, 40, 15);
    fill(240);
    stroke(0);
    text("100hm", 370, 180)
    stroke(200);
    fill(20);
    rect(330, 330, 90, 40, 15);
    fill(240);
    stroke(0);
    text("1hm", 375, 360)
    stroke(200);
    fill(20);
    rect(60, 150, 90, 40, 15);
    fill(240);
    stroke(0);
    text("0,1hm", 100, 180)
    textSize(28)
    stroke(200);
    fill(20);
    rect(190, 430, 90, 40, 15);
    fill(240);
    stroke(0);
    text("Volte", 235, 460)
}
function nivel5(){
    text("tempo: "+ conts, 300, 25)
    text("pontos:"+pontos,65,25)
    text("vidas:"+vidas,175,25)
    textSize(18)
    stroke(200);
    fill(20);
    rect(55, 50, 360, 40, 15);
    fill(240);
    stroke(0);
    text("Quanto é 10mim (minutos) em segundos?", 235, 80)
    stroke(240);
    rect(x2, y4, 90, 40);
    stroke(200);
    fill(20);
    rect(60, 330, 90, 40, 15);
    textSize(22)
    fill(240);
    stroke(0);
    text("1000s", 105, 360)
    stroke(200);
    fill(20);
    rect(330, 150, 90, 40, 15);
    fill(240);
    stroke(0);
    text("600s", 375, 180)
    stroke(200);
    fill(20);
    rect(330, 330, 90, 40, 15);
    fill(240);
    stroke(0);
    text("6000s", 375, 360)
    stroke(200);
    fill(20);
    rect(60, 150, 90, 40, 15);
    fill(240);
    stroke(0);
    text("0,06s", 105, 180)
    textSize(28)
    stroke(200);
    fill(20);
    rect(190, 430, 90, 40, 15);
    fill(240);
    stroke(0);
    text("Volte", 235, 460)
}

function fimdejogo(){
    text("Voce perdeu!", 240, 240)
    textSize(28)
    stroke(200);
    fill(20);
    rect(155, 425, 160, 40, 15);
    fill(20);
    rect(160, y5, 150, 30, 15);
    fill(240);
    stroke(0);
    text("Volte", 235, 455)

}
function vocevenceu(){
    text("Parabens! Voce venceu!", 240, 240)
    textSize(28)
    stroke(200);
    fill(20);
    rect(155, 425, 160, 40, 15);
    fill(20);
    rect(160, y5, 150, 30, 15);
    fill(240);
    stroke(0);
    text("Creditos", 235, 455)

}
function unidades(){
    image(img2, 30, 45, 390, 180);
    image(img3, 30, 245, 390, 190);
    stroke(200);
    fill(20);
    rect(155, 445, 160, 40, 15);
    fill(20);
    rect(160, y6, 150, 30, 15);
    fill(240);
    stroke(0);
    text("Volte", 235, 475)
}
function creditos(){
    fill(240);
    stroke(0);
    text("Desenvolvedor: Newton Rubens", 245, 250)
    stroke(200);
    fill(20);
    rect(155, 425, 160, 40, 15);
    fill(20);
    rect(160, y5, 150, 30, 15);
    fill(240);
    stroke(0);
    text("Volte", 235, 455)
}

