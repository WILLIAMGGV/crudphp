function guardar() {
  var email = document.getElementById("email").value;
  var comentario = document.getElementById("comentario").value;

  var tipo = document.getElementsByName("tipopago");
  var tipop = "";
  for (var i = 0; i < tipo.length; i++) {
    if (tipo[i].checked) tipop = tipo[i].value;
  }

  conexion1 = crearXMLHttpRequest();
  conexion1.onreadystatechange = cargarguardar;
  conexion1.open(
    "GET",
    "guardar.php?email=" +
      email +
      "&comentario=" +
      comentario +
      "&tipop=" +
      tipop,
    true
  );
  conexion1.send(null);
}

function cargarguardar() {
  var detalles4 = document.getElementById("error");

  var error2 = conexion1.responseText;

  if (conexion1.readyState == 4) {
    if (parseInt(error2) == 20) {
      detalles4.innerHTML =
        '<font color="red">Los Datos son Incorrectos</font>';
    } else {
      detalles4.innerHTML = error2;
    }
  } else {
    detalles4.innerHTML = "Cargando... ";
  }
}

function addEvent(elemento, nomevento, funcion, captura) {
  if (elemento.attachEvent) {
    elemento.attachEvent("on" + nomevento, funcion);
    return true;
  } else if (elemento.addEventListener) {
    elemento.addEventListener(nomevento, funcion, captura);
    return true;
  } else return false;
}

function crearXMLHttpRequest() {
  var xmlHttp = null;
  if (window.ActiveXObject) xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  else if (window.XMLHttpRequest) xmlHttp = new XMLHttpRequest();
  return xmlHttp;
}
