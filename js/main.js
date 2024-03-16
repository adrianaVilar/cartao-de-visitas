var canvasOut = document.querySelector("#cartao-visitas"); 
var ctx = canvasOut.getContext("2d");
var corFundo = "white";
var corTexto = "black";
var nome = "Nome";
var estilosDeFonteDoNome = document.querySelectorAll("input[name=name-style]");
var profissao = "Profissão";
var estilosDeFonteDaProfissao = document.querySelectorAll("input[name=role-style]");
var seletoresDeCor = document.querySelectorAll("input[name=color]");
var seletoresDeFonteNome = document.querySelectorAll("input[name=font-name]");
var seletoresDeFonteProf = document.querySelectorAll("input[name=font-role]");
var fonteNome = "Arial";
var fonteProfissao = "Arial";
var tamNome = "25px";
var tamProfissao = "15px";
var tamContato = "18px";
var estilosDeBorda = document.querySelectorAll("input[name=border]");
var linha = false;
var borda = false;
var contatos = {
  "telefone": {"value": null, "icon": "phone"},
  "email": {"value": null, "icon": "email"},
  "instagram": {"value": null, "icon": "instagram"},
  "facebook": {"value": null, "icon": "facebook"}
};

// Recupera a cor de fundo e desenha
seletoresDeCor.forEach(seletor => {
  seletor.addEventListener("click", (e) => {
    corFundo = e.target.value;
    desenharCartao();
  });
});

// Recupera a fonte do nome
seletoresDeFonteNome.forEach(seletor => {
  seletor.addEventListener("click", (e) => {
    fonteNome = e.target.value;
    desenharCartao();
  });
});

// Recupera a fonte da profissão
seletoresDeFonteProf.forEach(seletor => {
  seletor.addEventListener("click", (e) => {
    fonteProfissao = e.target.value;
    desenharCartao();
  });
});

// Digita o nome
document.querySelector("#form-name").addEventListener("change", (e) => {
  nome = e.target.value || "Nome";
  if (nome.length > 10) {
    tamNome = "15px";
  }
  desenharCartao();
});

// Salva o nome
document.querySelector("#save-name").addEventListener("click", () => {
  desabilitarCampo("name");
});

// Edita o nome
document.querySelector("#edit-name").addEventListener("click", () => {
  var element = document.querySelector("#form-name");
  element.removeAttribute("disabled");
});

// Digita a profissao
document.querySelector("#form-role").addEventListener("change", (e) => {
  profissao = e.target.value || "Profissão";
  if (profissao.length > 17) {
    tamProfissao = "12px";
  }
  desenharCartao();
});

// Salva a profissão
document.querySelector("#save-role").addEventListener("click", () => {
  desabilitarCampo("role");
});

// Edita a profissão
document.querySelector("#edit-role").addEventListener("click", () => {
  habilitarCampo("role");
});

// Digita o email
document.querySelector("#form-email").addEventListener("change", (e) => {
  contatos.email.value = e.target.value;
  desenharCartao();
});

// Salva o email
document.querySelector("#save-email").addEventListener("click", () => {
  desabilitarCampo("email");
});

// Edita o email
document.querySelector("#edit-email").addEventListener("click", () => {
  habilitarCampo("email");
});

// Digita o telefone
document.querySelector("#form-phone").addEventListener("change", (e) => {
  var regexTelefone = /\(?\d{2}\)?([-\/\.])\d{5}\1\d{4}/;
  var element = document.querySelector("#phone-alert");
  contatos.telefone.value = e.target.value;

  if (regexTelefone.exec(contatos.telefone.value) && contatos.telefone.value.length == 13) {
    element.remove("#phone-alert");
    desenharCartao();
  } else {
    imprimirOrientacaoTelefone();
  }
});

// Salva o telefone
document.querySelector("#save-phone").addEventListener("click", () => {
  desabilitarCampo("phone");
});

// Edita o telefone
document.querySelector("#edit-phone").addEventListener("click", () => {
  habilitarCampo("phone");
});

// Digita o instagram
document.querySelector("#form-instagram").addEventListener("change", (e) => {
  if(e.target.value == "") {
    contatos.instagram.value = e.target.value;
    desenharCartao();
  } else {
    contatos.instagram.value = "@" + e.target.value;
    desenharCartao();
  }
});

// Salva o insta
document.querySelector("#save-instagram").addEventListener("click", () => {
  desabilitarCampo("instagram");
});

// Edita o insta
document.querySelector("#edit-instagram").addEventListener("click", () => {
  habilitarCampo("instagram");
});

// Digita o facebook
document.querySelector("#form-facebook").addEventListener("change", (e) => {
  contatos.facebook.value = e.target.value;
  desenharCartao();
});

// Salva o face
document.querySelector("#save-facebook").addEventListener("click", () => {
  desabilitarCampo("facebook");
});

// Edita o face
document.querySelector("#edit-facebook").addEventListener("click", () => {
  habilitarCampo("facebook");
});

// Bold ou italic
estilosDeFonteDoNome.forEach(estiloNome => {
  estiloNome.addEventListener("change", desenharCartao);
});

estilosDeFonteDaProfissao.forEach(estiloProfissao => {
  estiloProfissao.addEventListener("change", desenharCartao);
});

// Borda
estilosDeBorda.forEach(estiloBorda => {
  estiloBorda.addEventListener("change", (e) => {
    if("line" == e.target.value) {
      linha = !linha;
      desenharCartao();
    }

    if("frame" == e.target.value) {
      borda = !borda;
      desenharCartao();
    }
  })
});