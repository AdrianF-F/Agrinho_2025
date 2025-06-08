let tela = 1;
let floresta = true;
let corridaP = true;
let correr = true;
let tempo = 0;
let Tempo2 = 0;
let tempo3 = 0;
let cair = false;
let corridaX = 193;
let c1;
let c2;
let c3;

let tempoC = true;
let temporizador;
let velocidade = 2;

let Maca = 0;
let tempo2 = Maca * 62.5;
let jmaca = true;

let trigoN = false;
let trigoN2 = false;
let trigoN3 = false;
let trigos = 0;
let trigos2 = 0;
let trigos3 = 0;
let cor = "rgb(green)";
let cor2 = "rgb(green)";
let cor3 = "rgb(green)";
let trigosP = 0;

let playerI1;
let playerI2;
let macaI;
let arvore1;
let arvore2;
let arvoreG;
let trigarao;
let trigarao2;
let trig0;
let trig1;
let trig2;
let trig3;
let casa;
let flor1;
let flor2;
let flor3;
let carroS;
let carroS2;
let carroS3;
let carroP;
let carro1;
let carro2;
let carro3;

function preload() {
  playerI1 = loadImage("/Imagens/Fazendeiro.png");
  playerI2 = loadImage("/Imagens/Chapéu.png");
  macaI = loadImage("/Imagens/Maçã.png");
  arvore1 = loadImage("/Imagens/Arvore1.png");
  arvore2 = loadImage("/Imagens/Arvore2.png");
  arvoreG = loadImage("/Imagens/ArvoreG.png");
  trigarao = loadImage("/Imagens/Trigos.png");
  trigarao2 = loadImage("/Imagens/Trigos2.png");
  casa = loadImage("/Imagens/Casa.png");
  trig0 = loadImage("/Imagens/Trig0.png");
  trig1 = loadImage("/Imagens/Trig1.png");
  trig2 = loadImage("/Imagens/Trig2.png");
  trig3 = loadImage("/Imagens/Trig3.png");
  flor1 = loadImage("/Imagens/Flor.png");
  flor2 = loadImage("/Imagens/Flor2.png");
  flor3 = loadImage("/Imagens/Flor3.png");
  carroS = loadImage("/Imagens/CarroS.png");
  carroS2 = loadImage("/Imagens/CarroS2.png");
  carroS3 = loadImage("/Imagens/CarroS3.png");
  carroP = loadImage("/Imagens/CarroP.png");
  carro1 = loadImage("/Imagens/Carro1.png");
  carro2 = loadImage("/Imagens/Carro2.png");
  carro3 = loadImage("/Imagens/Carro3.png");
}

let carroE;

let carro = {
  I: null,
  I2: null,
  I3: null,
  x: 0,
  y: 0,
  l: 50,
  desenhar: function () {
    image(this.I, this.x, this.y, this.l, this.l + 25);
    image(this.I2, this.x + 100, this.y, this.l, this.l + 25);
    image(this.I3, this.x + 200, this.y, this.l, this.l + 25);
    imageMode(CENTER);
  },
};

let flores = {
  I: flor1,
  I2: flor2,
  I3: flor3,
  x: 0,
  y: 0,
  t: 40,
  desenhar: function () {
    image(this.I, this.x, this.y, this.t, this.t);
    image(this.I2, this.x + 75, this.y + 75, this.t, this.t);
    image(this.I3, this.x - 75, this.y - 75, this.t, this.t);
    image(this.I, this.x + 90, this.y - 90, this.t, this.t);
    image(this.I2, this.x - 60, this.y - 120, this.t, this.t);
  },
};

let player = {
  I: playerI1,
  x: 0,
  y: 0,
  l: 50,
  a: 100,
  desenhar: function () {
    image(this.I, this.x, this.y, this.l, this.a);
    imageMode(CENTER);
  },
};

let maca = {
  x: 0,
  y: 30,
  l: 65,
  a: 65,
  desenhar: function () {
    image(macaI, this.x, this.y, this.l, this.a);
  },
};

let trigo = {
  I: trig0,
  x: 0,
  y: 0,
  l: 115,
  a: 140,
  desenhar: function () {
    image(this.I, this.x, this.y, this.l, this.a);
    imageMode(CENTER);
  },
};

let trigo2 = {
  I: trig0,
  x: 0,
  y: 0,
  l: 115,
  a: 140,
  desenhar: function () {
    image(this.I, this.x, this.y, this.l, this.a);
  },
};

let trigo3 = {
  I: trig0,
  x: 0,
  y: 0,
  l: 115,
  a: 140,
  desenhar: function () {
    image(this.I, this.x, this.y, this.l, this.a);
  },
};

function setup() {
  createCanvas(400, 400);
  tela = "Inicio";
  tempo = millis();
  Tempo2 = millis() + random(1, 2000);
  tempo3 = millis() + random(1, 2000);
}

function draw() {
  if (tela === "Inicio") {
    background("white");
    rectMode(CENTER);
    fill("grey");
    rect(200, 200, 100, 50);
    fill("black");
    textStyle("bold");
    textSize(24);
    text("Iniciar", 165, 207);
    textSize(12);
    text("Agrinho 2025", 320, 390);
    text("Por: Adrian Felipe", 10, 390);
    textSize(22);
    text("Festejando a conexão campo cidade", 15, 30);
    if (
      (mouseX > 150) &
      (mouseX < 250) &
      (mouseY > 175) &
      (mouseY < 225) &
      mouseIsPressed
    ) {
      tela = 9;
    }
  }
  if (tela !== "Inicio") {
    if (tela === 1) {
      background("rgb(34,189,34)");
    } else if (tela === 0) {
      background("rgb(80,28,28)");
    } else if (tela === 2) {
      background("green");
    } else if (tela === 3) {
      background("rgb(84,146,84)");
    } else if (tela === 4) {
      background("cyan");
    } else if (tela === 5) {
      background("rgb(79,210,79)");
    } else if ((tela === 7) | (tela === 60) | (tela === 40) | (tela === 50)) {
      background("white");
    } else if (tela === 6) {
      background("grey");
    } else if ((tela === 8) | (tela === 9)) {
      background("black");
    }

    floral();
    if ((tela === 1) | (tela === 2) | (tela === 3)) {
      flores.desenhar();
    }
    jogador();
    if (Maca !== 20) {
      arvore();
    }
    if (trigosP !== 20) {
      trigal();
      trigal2();
      trigal3();
    }
    
      corrida();
    
    if (tela === 4) {
      textStyle("bold");
      textSize(15);
      rectMode(CORNER);
      fill("white");
      rect(325, 0, 75, 20);
      fill("black");
      text("Maçã " + str(Maca), 365, 15);
    } else if (tela === 5) {
      textStyle("bold");
      textSize(15);
      rectMode(CORNER);
      fill("white");
      rect(325, 0, 75, 20);
      fill("black");
      text("Trigos " + str(trigosP), 365, 15);
    }

    if (tela === 1) {
      image(casa, 265, 100, 325, 225);
    }
    if ((tela === 2) & (Maca !== 20)) {
      image(arvore1, 200, 200, 150, 150);
    } else if ((tela === 2) & (Maca === 20)) {
      image(arvore2, 200, 200, 150, 150);
    }
    if ((tela === 3) & (trigosP !== 20)) {
      image(trigarao, 200, 200, 180, 150);
    } else if ((tela === 3) & (trigosP === 20)) {
      image(trigarao2, 200, 200, 180, 150);
    }
    if (tela === 0) {
      if (Maca === 20 & trigosP === 20) {
      image(carroS, 200, 200, 200, 185); } 
      else if ((Maca !== 20 & trigosP === 20) | (Maca === 20 & trigosP !== 20)) {
        image(carroS2, 200, 200, 200, 185); } else if (Maca !== 20 & trigosP !== 20) {
          image(carroS3, 200, 200, 200, 185); }
      imageMode(CENTER);
      }
  }
}

function floral() {
  if (floresta) {
    if ((tela === 1) | (tela === 2) | (tela === 3)) {
      flores.x = random(50, 350);
      flores.y = random(50, 350);
      flores.I = flor1;
      flores.I2 = flor2;
      flores.I3 = flor3;
      floresta = false;
    }
  }
}

function jogador() {
  player.x = mouseX;
  player.y = mouseY;
  fill("black");
  if ((player.x > 360) & (tela === 1)) {
    textStyle("bold");
    textSize(18);
    text("Clique A", 360, 150);
  }
  if ((player.x < 40) & (tela === 1)) {
    textStyle("bold");
    textSize(18);
    text("Clique A", 40, 150);
  }
  if ((player.x < 40) & (tela === 2)) {
    textStyle("bold");
    textSize(18);
    text("Clique S", 40, 150);
  }
  if ((player.x > 360) & (tela === 3)) {
    textStyle("bold");
    textSize(18);
    text("Clique S", 360, 150);
  }
  if ((player.y > 360) & (tela === 0)) {
    textStyle("bold");
    textSize(18);
    text("Clique S", 200, 40);
  }
  if (tela === 1) {
    if (
      (player.x > 140) &
      (player.x < 250) &
      (player.y > 50) &
      (player.y < 160)
    ) {
      textSize(20);
      textStyle("bold");
      text("Clique E", 200, 40);
      if ((keyCode === 69) & keyIsPressed) {
        tela = 0;
      }
    }

    if ((player.x > 360) & ((keyCode === 65) & keyIsPressed)) {
      tela = 2;
      floresta = true;
    } else if ((player.x < 40) & ((keyCode === 65) & keyIsPressed)) {
      tela = 3;
      floresta = true;
      textStyle("bold");
      text("Clique A", 200, 40);
    }
  }

  if (tela === 0) {
    if ((player.y > 360) & ((keyCode === 83) & keyIsPressed)) {
      tela = 1;
      floresta = true;
    }
    if (
      (player.x > 125) &
      (player.x < 250) &
      (player.y > 175) &
      (player.y < 250) ){
      if (Maca === 20 & trigosP === 20) {
      textSize(20);
      textStyle("bold");
      text("Clique E", 200, 40);
      if ((keyCode === 69) & keyIsPressed) {
        tela = 60;
      }
      } else {
        textSize(20);
        textStyle("bold");
        if (Maca !== 20) {
        text("Pegue as maçãs", 200, 40);
          }
        if (trigosP !== 20) {
        text("Pegue o trigo", 200, 60);
          }
        }
    }
}

  if (tela === 2) {
    if ((player.x < 60) & ((keyCode === 83) & keyIsPressed)) {
      tela = 1;
      floresta = true;
      textStyle("bold");
      text("Clique S", 200, 40);
    }
    if (
      (player.x > 140) &
      (player.x < 250) &
      (player.y > 130) &
      (player.y < 270) &
      (Maca !== 20)
    ) {
      textStyle("bold");
      textSize(20);
      text("Clique E", 200, 80);
      if ((keyCode === 69) & keyIsPressed & (Maca !== 20)) {
        tela = 40;
      }
    }
  }
  if (tela === 3) {
    if ((player.x > 360) & ((keyCode === 83) & keyIsPressed)) {
      tela = 1;
      floresta = true;
      textStyle("bold");
      text("Clique S", 200, 40);
    }
    if (
      (player.x > 140) &
      (player.x < 240) &
      (player.y > 140) &
      (player.y < 240) &
      (trigosP !== 20)
    ) {
      textStyle("bold");
      textSize(20);
      text("Clique E", 200, 60);
      if ((keyCode === 69) & keyIsPressed & (trigosP !== 20)) {
        tela = 50;
      }
    }
  }

  if (tela === 4) {
    player.I = playerI2;
    player.l = 75;
    player.y = 350;
  }

  if (
    (tela !== 4) &
    (tela !== 5) &
    (tela !== 40) &
    (tela !== 50) &
    (tela !== 6) &
    (tela !== 60) &
    (tela !== 7) &
    (tela !== 8) &
    (tela !== 9)
  ) {
    player.I = playerI1;
    player.l = 50;
    player.desenhar();
  }

  if (tela === 6) {
    player.I = carroP;
    player.y = 350;
    player.x = corridaX;
    player.l = 115;
    player.a = 150;
    player.desenhar();
  }

  if (tela === 6) {
    if ((keyCode === 65) & keyIsPressed) {
      if (corridaX === 193) {
        corridaX = 93;
      }
    }
    if ((keyCode === 83) & keyIsPressed) {
      if (corridaX === 293) {
        corridaX = 193;
      } else if (corridaX === 93) {
        corridaX = 193;
      }
    }

    if ((keyCode === 68) & keyIsPressed) {
      if (corridaX === 193) {
        corridaX = 293;
      }
    }
  }

  if (tela === 7) {
    fill("red");
    textStyle("bold");
    textSize(24);
    text("Você perdeu", 200, 200);
    text("Press F", 40, 380);
    if (keyCode === 70 & keyIsPressed) {
      tempoC = true;
      corridaP = true;
      tela = 6;
      }
  }

  if (tela === 40) {
    textStyle("bold");
    textSize(21);
    text("Press F", 40, 385);
    textSize(18);
    text("Mova o mouse pela tela e colete 20 maçãs", 200, 200);
    textAlign(CENTER);
    if ((keyCode === 70) & keyIsPressed) {
      tela = 4;
    }
  }
  if (tela === 50) {
    textStyle("bold");
    textSize(21);
    text("Press F", 40, 385);
    textSize(18);
    textAlign(CENTER);
    text("Clique  no trigo quando ele estiver amarelo", 200, 200);
    text("Colete 20 trigos", 200, 220);
    if ((keyCode === 70) & keyIsPressed) {
      tela = 5;
    }
  }
  if (tela === 60) {
    textStyle("bold");
    textSize(21);
    text("Press F", 40, 385);
    textSize(12);
    textAlign(CENTER);
    text(
      "Desvie dos carros, aperte A S D, para as faixas correspondentes 1, 2 e 3",
      200,
      200
    );
    textSize(18);
    text("Sobreviva 40 segundos", 200, 220);
    if ((keyCode === 70) & keyIsPressed) {
      tela = 6;
    }
  }

  if (tela === 8) {
    textStyle("bold");
    textSize(18);
    fill("yellow");
    text("Parabéns!!!", 200, 200);
    text("Você chegou a cidade", 200, 220);
    text("Pronto para vender seus itens", 200, 240);
  }

  if (tela === 9) {
    textStyle("bold");
    textSize(21);
    fill("yellow");
    text("Press F", 40, 385);
    textSize(12);
    textAlign(CENTER);
    fill("yellow");
    text("Você um fazendeiro se preparando para vender é na cidade", 200, 180);
    text("Seu objetivo é coletar as maçãs e o trigo", 200, 200);
    text("Para isso ande até os extremos da tela", 200, 220);
    text("Após vá até a casa e dirija até a cidade", 200, 240);
    if ((keyCode === 70) & keyIsPressed) {
      tela = 1;
    }
  }
}

function arvore() {
  if (tela === 4) {
    image(arvoreG, 200, 200, 450, 400);
    player.desenhar();

    if (!cair) {
      maca.x = random(20, 380);
      cair = true;
      tempo = millis();
    }
    if (Maca < 13) {
      tempo2 += 0;
    }

    if (millis() - tempo >= 1000 - tempo2 && cair) {
      maca.y += 5 + Maca;

      if (
        (maca.y > player.y - 10) &
        (maca.x >= player.x - 15) &
        (maca.x <= player.x + 30)
      ) {
        maca.y = 20;
        cair = false;
        Maca += 1;
        if (Maca === 20) {
          tela = 2;
        }
      }
      if (maca.y > 380) {
        maca.y = 20;

        cair = false;
      }
    }

    maca.desenhar();
  }
}

function trigal() {
  if (tela === 5) {
    if (!trigoN) {
      trigo.I = trig0;
      trigoN = true;
    }
    trigo.desenhar();
    trigo.x = 100;
    trigo.y = 280;
    if (trigos === 0) {
      trigo.I = trig0;
    } else if (trigos === 1) {
      trigo.I = trig1;
    } else if (trigos === 2) {
      trigo.I = trig2;
    } else {
      trigo.I = trig3;
    }
    if (
      (trigos === 3) &
      (mouseX > 82) &
      (mouseX < 142) &
      (mouseY > 290) &
      (mouseY < 350) &
      mouseIsPressed
    ) {
      trigos = 0;
      trigosP += 1;
      trigoN = false;
    }
    if (millis() - tempo >= random(1000, 2000)) {
      trigos += 1;

      if (trigos === 4) {
        trigos = 0;
        trigoN = false;
      }

      tempo = millis() - random(0, 1000);
      if (trigosP < 8) {
        tempo = millis() - random(0, 500);
      } else if ((trigosP < 14) & (trigosP > 7)) {
        tempo = millis() - random(0, 700);
      } else {
        tempo = millis() - random(0, 1000);
      }
    }
  }
}

function trigal2() {
  if (tela === 5) {
    if (!trigoN2) {
      trigo2.I = trig0;
      trigoN2 = true;
    }
    trigo2.desenhar();
    trigo2.x = 200;
    trigo2.y = 280;
    if (trigos2 === 0) {
      trigo2.I = trig0;
    } else if (trigos2 === 1) {
      trigo2.I = trig1;
    } else if (trigos2 === 2) {
      trigo2.I = trig2;
    } else {
      trigo2.I = trig3;
    }
    if (
      (trigos2 === 3) &
      (mouseX > 182) &
      (mouseX < 242) &
      (mouseY > 290) &
      (mouseY < 350) &
      mouseIsPressed
    ) {
      trigoN2 = false;
      trigos2 = 0;
      trigosP += 1;
    }
    if (millis() - Tempo2 >= random(1000, 2000)) {
      trigos2 += 1;

      if (trigos2 === 4) {
        trigoN2 = false;
        trigos2 = 0;
      }
      Tempo2 = millis() - random(0, 1000);
      if (trigosP < 8) {
        Tempo2 = millis() - random(0, 500);
      } else if ((trigosP < 14) & (trigosP > 7)) {
        Tempo2 = millis() - random(0, 700);
      } else {
        Tempo2 = millis() - random(0, 1000);
      }
    }
  }
}

function trigal3() {
  if (tela === 5) {
    if (!trigoN3) {
      trigo3.I = trig0;
      trigoN3 = true;
    }
    trigo3.desenhar();
    trigo3.x = 300;
    trigo3.y = 280;
    if (trigos3 === 0) {
      trigo3.I = trig0;
    } else if (trigos3 === 1) {
      trigo3.I = trig1;
    } else if (trigos3 === 2) {
      trigo3.I = trig2;
    } else {
      trigo3.I = trig3;
    }
    if (
      (trigos3 === 3) &
      (mouseX > 282) &
      (mouseX < 342) &
      (mouseY > 290) &
      (mouseY < 350) &
      mouseIsPressed
    ) {
      trigoN3 = false;
      trigos3 = 0;
      trigosP += 1;
    }
    if (millis() - tempo3 >= random(1000, 2000)) {
      trigos3 += 1;

      if (trigos3 === 4) {
        trigoN3 = false;
        trigos3 = 0;
      }
      if (trigosP < 8) {
        tempo3 = millis() - random(0, 500);
      } else if ((trigosP < 14) & (trigosP > 7)) {
        tempo3 = millis() - random(0, 700);
      } else {
        tempo3 = millis() - random(0, 1000);
      }
    }
  }
  if (trigosP === 20) {
    tela = 3;
  }
}

function corrida() {
  if (tela === 6) {
    carroE = [trig0, carro2, carro3, carro1];
    fill("yellow");
    rect(143, 0, 15, 800);
    rect(243, 0, 15, 800);
    fill("rgb(75,180,34)");
    rect(0, 0, 65, 800);
    rect(335, 0, 65, 800);
    rectMode(CORNER);

    if (corridaP) {
      carro.y = 0;
      carro.x = 100;
      carro.l = 150;
      carro.I = carroE[int(random(0, 4))];
      carro.I2 = carroE[int(random(0, 4))];
      carro.I3 = carroE[int(random(0, 4))];
      if (
        ((carro.I === trig0) & (carro.I2 !== trig0) & (carro.I3 !== trig0)) |
        ((carro.I !== trig0) & (carro.I2 === trig0) & (carro.I3 !== trig0)) |
        ((carro.I !== trig0) & (carro.I2 !== trig0) & (carro.I3 === trig0))
      ) {
        corridaP = false;
      }
    }
    if (!corridaP) {
      carro.desenhar();
      carro.y += velocidade + int((millis() - temporizador) / 5000);
      if ((carro.y + 60 > 350) & (carro.I !== trig0) & (player.x === 93)) {
        tela = 7;
      }
      if ((carro.y + 60 > 350) & (carro.I2 !== trig0) & (player.x === 193)) {
        tela = 7;
      }
      if ((carro.y + 60 > 350) & (carro.I3 !== trig0) & (player.x === 293)) {
        tela = 7;
      }
      if ((millis() - temporizador) / 1000 >= 40) {
        tela = 8;
      }
    }
    if (carro.y > 395) {
      corridaP = true;
    }
    if (tempoC) {
      temporizador = millis();
      tempoC = false;
    } else {
      fill("white");
      rect(290, 0, 110, 30);
      fill("black");
      textStyle("bold");
      textSize(18);
      text(str(int((millis() - temporizador) / 1000)) + " segundos", 343, 20);
    }
  }
}
