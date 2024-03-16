function imprimirOrientacaoTelefone() {   
  document.querySelector("#phone-alert").innerHTML = "<span style='font-size:10px; color:red'>O telefone deve seguir o formato: DDD-00000-0000</span>";
}  

function desabilitarCampo(campo) {
  var element = document.querySelector("#form-" + campo);
  element.setAttribute("disabled", true);
}

function habilitarCampo(campo) {
  var element = document.querySelector("#form-" + campo);
  element.removeAttribute("disabled");
}