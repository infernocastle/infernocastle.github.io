function loadView(view) {
    var contentDiv = document.getElementById('content');
  
    // Cargar el contenido de la vista en el div de contenido
    contentDiv.innerHTML = '<object data="' + view + '.html" type="text/html"></object>';
  }