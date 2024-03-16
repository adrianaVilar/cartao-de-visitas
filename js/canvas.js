function desenharLinha(ctx, x1, y1, x2, y2) {
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.fillStyle = "gray";
  ctx.stroke();
}

function desenharBorda(ctx) {
  ctx.moveTo(5, 5);
  ctx.lineTo(445, 5);
  ctx.lineTo(445, 245);
  ctx.lineTo(5, 245);
  ctx.lineTo(5, 5);
  ctx.fillStyle = "gray";
  ctx.stroke();
}

function trocarFundo(ctx, cor) {
  // Cria o gradiente
  var grd = ctx.createRadialGradient(175, 225, 10, 350, 100, 450);
  grd.addColorStop(0, "white");
  grd.addColorStop(1, cor);

  // Preenche o gradiente
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 450, 250);
}

// Insere texto no canvas
function inserirTexto(ctx, texto, fonte, estilo, tamanho, x, y, cor, alinhamento) {
  ctx.font = estilo + " " + tamanho + " " + fonte;
  ctx.fillStyle = cor || "white";
  ctx.textAlign = alinhamento;
  ctx.fillText(texto, x, y);
  ctx.save();
}

// Insere ícone
function inserirImagem(icon, x, y) {
  var img = new Image();
  img.src = "img/" + icon + ".png";

  img.onload = function () {
    img.remove();
    ctx.drawImage(img, x, y, 22, 20);
  }
}

function resetarCanvas(canvas) {
  let ctx = canvas.getContext("2d");
  ctx.reset();
}

// Faz download do cartão
document.getElementById("salvar").addEventListener("click", function(e) {
	this.href = canvasOut.toDataURL();
	this.download = "cartao-de-visitas.png";
	return false;
});

function desenharCartao() {
  resetarCanvas(canvasOut);
  trocarFundo(ctx, corFundo);
  
  if(linha) {
    desenharLinha(ctx, 150, 10, 150, 240);
  }

  if(borda) {
    desenharBorda(ctx);
  }

  let estiloDoNome = "";
  let estiloDaProfissao = "";

  estilosDeFonteDoNome.forEach(estiloNome => {
    if (estiloNome.checked) {
      estiloDoNome += " " + estiloNome.value;
    }
  });

  estilosDeFonteDaProfissao.forEach(estiloProfissao => {
    if (estiloProfissao.checked) {
      estiloDaProfissao += " " + estiloProfissao.value;
    }
  });
      
  inserirTexto(ctx, nome, fonteNome, estiloDoNome, tamNome, 75, 120, "black", "center");
  inserirTexto(ctx, profissao, fonteProfissao, estiloDaProfissao, tamProfissao, 75, 140, "black", "center");
  
  let yInicial = 0;
  let yInicialImg = -17;

  Object.keys(contatos)
    .filter(key => contatos[key].value)
    .forEach(key => {
      let contato = contatos[key];

      inserirTexto(ctx, contato.value, "Arial", "normal", contato.value.length > 20 ?"12px":"18px", 225, yInicial += 50, "black", "start");
      inserirImagem(contato.icon, 190, yInicialImg += 50);
      
    })

  inserirTexto(ctx, " ", "Cursiva", "normal", "0px", 0, 0, "white", "start");

}
