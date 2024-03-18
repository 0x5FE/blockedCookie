chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.type === "cookie") {
      // Verificar se o site está na lista de permissões
      if (listaPermissoes.includes(details.url)) {
        return {cancel: false};
      }

      // Verificar se o site está na lista de bloqueios
      if (listaBloqueios.includes(details.url)) {
        return {cancel: true};
      }
      
