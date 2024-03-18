function salvarOpcoes() {
  var permitirCookiesEssenciais = document.getElementById("permitir-cookies-essenciais").checked;
  var bloquearCookiesTerceiros = document.getElementById("bloquear-cookies-terceiros").checked;
  var listaPermissoes = document.getElementById("lista-permissoes").value;
  var listaBloqueios = document.getElementById("lista-bloqueios").value;

  // Salvar as opções no armazenamento local
  chrome.storage.local.set({
    permitirCookiesEssenciais: permitirCookiesEssenciais,
    bloquearCookiesTerceiros: bloquearCookiesTerceiros,
    listaPermissoes: listaPermissoes,
    listaBloqueios: listaBloqueios
  });

  // Recarregar a página para aplicar as novas opções
  chrome.tabs.reload();
}

function carregarOpcoes() {
  chrome.storage.local.get(["permitirCookiesEssenciais", "bloquearCookiesTerceiros", "listaPermissoes", "listaBloqueios"], function(resultado) {
    var permitirCookiesEssenciais = resultado.permitirCookiesEssenciais;
    var bloquearCookiesTerceiros = resultado.bloquearCookiesTerceiros;
    var listaPermissoes = resultado.listaPermissoes;
    var listaBloqueios = resultado.listaBloqueios;

    document.getElementById("permitir-cookies-essenciais").checked = permitirCookiesEssenciais;
    document.getElementById("bloquear-cookies-terceiros").checked = bloquearCookiesTerceiros;
    document.getElementById("lista-permissoes").value = listaPermissoes;
    document.getElementById("lista-bloqueios").value = listaBloqueios;
  });
}

carregarOpcoes();
