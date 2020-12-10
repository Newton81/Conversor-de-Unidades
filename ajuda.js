texto="Esse jogo tem o intuito de fomentar o aprendizado\n a respeito das unidades de medidas, por meio da interatividade\n com suas respectivas grandezas\n e a conversão de uma unidade para outra.\n Para jogar o jogo você pode usar os botões do mouse ou\n se preferir as setas do teclado e a tecla enter."
function ajuda(){
    textSize(16)
    stroke(200);
    fill(20);
    rect(20, 80, texto.length*1.6, 180, 15);    
    fill(240);
    stroke(0);
    text(texto, 250, 110)
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