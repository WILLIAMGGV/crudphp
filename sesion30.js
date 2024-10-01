function chequearescaneo(){


var estatus=document.getElementById('estatusescaneo').value;

if(estatus=="1"){
setTimeout(function(){ verificarescaneo(); }, 7000);


}
else{




var detallessolicitar=document.getElementById('botonsolicitar');


detallessolicitar.innerHTML = '<button class="btn btn-primary" type="button" onclick="escanear2()">Solicitar Pago</button>';








}





}



function verificarescaneo(){

var iduser=document.getElementById('iduser').value;



 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaverificarescaneo;
    conexion1.open('GET','verificarescaneo.php?iduser='+iduser, true);
    conexion1.send(null);


}


function cargaverificarescaneo()
{




var error=1;
var error1=0;

var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error==error2){

document.getElementById('estatusescaneo').value='1';

chequearescaneo();



    }

if(error1==error2){

document.getElementById('estatusescaneo').value='0';

chequearescaneo();



    }




}


}


function escanear2(){


swal({
          title: "Desea Solicitar el Pago?",
          text: "Recuerde esta seguro de esta Informacion",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Enviar",
          cancelButtonText: "No, Cancelar",
          closeOnConfirm: false,
          closeOnCancel: false
        }, function(isConfirm) {
          if (isConfirm) {
            enviardatos();

          } else {
            swal("Cancelado", "Su Solicitud no se Envio", "error");
          }
        });


}



function escanear(){

var iduser=document.getElementById('iduser').value;



var detallessolicitar=document.getElementById('botonsolicitar');


detallessolicitar.innerHTML = '<button>En Espera que su Carnet de Membresia sea Escaneado.</button>';






 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaescanear;
    conexion1.open('GET','activarescaner.php?iduser='+iduser, true);
    conexion1.send(null);





}






function cargaescanear()
{




var error=20;
var error2=conexion1.responseText;
var error3=40;


  if(conexion1.readyState == 4)
  {
    if(error==error2){

document.getElementById('estatusescaneo').value='1';

chequearescaneo();



    }
    else{




    swal("Error!", "Problemas en la Red (Falla de Conexion)", "error");






    }


}


}






function enviarda2(){


    var casilla1=document.getElementById('casilla1').value;
    var casilla2=document.getElementById('casilla2').value;
    var casilla3=document.getElementById('casilla3').value;
    var casilla4=document.getElementById('casilla4').value;
    var casilla5=document.getElementById('casilla5').value;
    var casilla6=document.getElementById('casilla6').value;

    var casilla7=document.getElementById('casilla7').value;




var iduser=document.getElementById('iduser').value;









 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaenviarda2;
    conexion1.open('GET','enviarda2.php?iduser='+iduser+'&casilla1='+casilla1+'&casilla2='+casilla2+'&casilla3='+casilla3+'&casilla4='+casilla4+'&casilla5='+casilla5+'&casilla6='+casilla6+'&casilla7='+casilla7, true);
    conexion1.send(null);



}


function cargaenviarda2()
{




var error=20;
var error2=conexion1.responseText;
var error3=40;


  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Datos Guardados con Exito!",
          text: "El Dinero retirado se enviara a la cuenta bancaria configurada.",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "configuracion.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }
    else{




    swal("Error!", "Los Datos no fueron enviados", "error");






    }


}


}













function enviarda1(){


    var codigop=document.getElementById('codigop').value;


    var numerot=document.getElementById('numerot').value;
var iduser=document.getElementById('iduser').value;









 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaenviarda1;
    conexion1.open('GET','enviarda1.php?iduser='+iduser+'&codigop='+codigop+'&numerot='+numerot, true);
    conexion1.send(null);



}


function cargaenviarda1()
{




var error=20;
var error2=conexion1.responseText;
var error3=40;


  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Numero Guardado con Exito!",
          text: "Recibira notificaciones al numero indicado.",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "configuracion.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }
    else{




    swal("Error!", "Los Datos no fueron enviados", "error");






    }


}


}



























function enviardatos4(){





 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaenviardatos4;
    conexion1.open('GET','enviardatos4.php', true);
    conexion1.send(null);




}

function cargaenviardatos4()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Lista Creada con Exitoso!",
          text: "Chequea todos los pagos Retrasados",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "mensualidades.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }
    else{


    swal("Error!", "Los Datos no fueron enviados, La Lista ya Existe", "error");





    }


}


}










function enviardatos3(){



var iduser=document.getElementById('iduser').value;
var cantidad=document.getElementById('cantidad').value;
var maquina=document.getElementById('maquina').value;

var fondoactual=document.getElementById('fondoactual').value;

var comision=0;

comision=cantidad*0.2;
comision=cantidad-comision;


if(parseInt(comision)>parseInt(fondoactual)){

   swal("Error", "Sus fondos no son suficientes para Pagar el Servicio", "error");

}else{


 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaenviardatos3;
    conexion1.open('GET','enviardatos3.php?iduser='+iduser+'&cantidad='+cantidad+'&maquina='+maquina, true);
    conexion1.send(null);



}

}

function cargaenviardatos3()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Pago de Maquina Virtual Exitoso!",
          text: "Manten al Dia el Pago de las Maquinas Para Disfrutar del Servicio.",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "pagarmensualidad.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }
    else{


    swal("Error!", "Los Datos no fueron enviados, La Maquina ya estaba Pagada", "error");





    }


}


}











function buscarvalor(){



var idmaquina=document.getElementById('maquina').value;






 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargabuscarvalor;
    conexion1.open('GET','buscarvalor.php?idmaquina='+idmaquina, true);
    conexion1.send(null);




}

function cargabuscarvalor()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {

 document.getElementById('cantidad').value=conexion1.responseText;

  cambiavaloresopinet3();

}


}






function cambiavaloresopinet3()
{






var cantidad=document.getElementById('cantidad').value;


  var subtotal=cantidad;
  var comision=subtotal*0.2;
  var total=subtotal-comision;


  var detallessubtotal=document.getElementById('subtotal');
   var detallescomision=document.getElementById('comision');

var detallestotal=document.getElementById('total');

document.getElementById('valorsubtotal').value=subtotal;
document.getElementById('valorcomision').value=comision;
document.getElementById('valortotal').value=total;

subtotal=number_format(subtotal,0);

comision=number_format(comision,0);
total=number_format(total,0);

        detallessubtotal.innerHTML = '<label class="control-label" for="select"><b>Sub-Total:</b> '+subtotal+' USD</label>  ';
        detallescomision.innerHTML = '<label class="control-label" for="select"><b>Descuento (20%):</b> '+comision+' USD</label>';
        detallestotal.innerHTML = '<label class="control-label" for="select"><b>Total:</b> <font color="green">'+total+' USD</font></label>';







}




function enviardatos2(){



var iduser=document.getElementById('iduser').value;
var cantidad=document.getElementById('cantidad').value;


var fondoactual=document.getElementById('fondoactual').value;


if(parseInt(cantidad)>parseInt(fondoactual)){

   swal("Error", "Sus fondos no son suficientes para esta Cantidad", "error");

}else{



    if(cantidad=="0" || cantidad==""){

 swal("Error", "No se ha ingresado la Cantidad", "error");

    }
    else {




 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaenviardatos2;
    conexion1.open('GET','enviardatos2.php?iduser='+iduser+'&cantidad='+cantidad, true);
    conexion1.send(null);

    }

}

}

function cargaenviardatos2()
{




var error=20;
var error2=conexion1.responseText;

var error3=40;

  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Retiro de Fondo Solicitado!",
          text: "Se procesara en el Transcurso de 48 Hrs Maximo.",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "retirarfondos.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }
    else{


      if(error2==error3){


swal("Error!", "Tienes Retraso de Pago de Maquina Virtual, Debes Cancelar tus Deudas antes de Retirar tus Fondos", "error");



      }else{



    swal("Error!", "Los Datos no fueron enviados", "error");

      }



    }


}


}


















function cambiavaloresopinet2()
{




   var cantidad=document.getElementById('cantidad').value;
        var preciodolar=document.getElementById('preciodolar').value;





  var subtotal=cantidad*preciodolar;
  var comision=subtotal*0.2;
  var total=subtotal;


  var detallessubtotal=document.getElementById('subtotal');
   var detallescomision=document.getElementById('comision');

var detallestotal=document.getElementById('total');

document.getElementById('valorsubtotal').value=subtotal;
document.getElementById('valorcomision').value=comision;
document.getElementById('valortotal').value=total;

subtotal=number_format(subtotal,0);

comision=number_format(comision,0);
total=number_format(total,0);

        detallessubtotal.innerHTML = '<label class="control-label" for="select"><b>Sub-Total:</b> '+subtotal+' Bs</label>  ';
        detallescomision.innerHTML = '<label class="control-label" for="select"><b>Comision (20%):</b><s> '+comision+' </s>Bs</label>';
        detallestotal.innerHTML = '<label class="control-label" for="select"><b>Total:</b> <font color="green">'+total+' Bs</font></label>';







}





function buscarsolicitud(){


    var usuario2=document.getElementById('usuario2').value;


 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargabuscarsolicitud;
    conexion1.open('GET','buscarsolicitud.php?usuario2='+usuario2, true);
    conexion1.send(null);



}


function cargabuscarsolicitud()
{


   var detalles3=document.getElementById('resultados');

var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
          detalles3.innerHTML = conexion1.responseText;

  }
  else{

          detalles3.innerHTML = "Buscando...";
  }


}















function confirmarsolicitud2(id){



        swal({
          title: "Desea Confirmar esta Solicitud?",
          text: "",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Confirmo",
          cancelButtonText: "No, Cancelar",
          closeOnConfirm: false,
          closeOnCancel: false
        }, function(isConfirm) {
          if (isConfirm) {

                 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaconfirmarsolicitud2;
    conexion1.open('GET','confirmarsolicitud2.php?id='+id, true);
    conexion1.send(null);

          }
        });



}


function cargaconfirmarsolicitud2()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Registro Confirmado Con Exito",
          text: "",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarcuenta.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }

}

}


function confirmarrevision(id){



        swal({
          title: "Ha Revisado esta solicitud?",
          text: "",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Confirmo",
          cancelButtonText: "No, Cancelar",
          closeOnConfirm: false,
          closeOnCancel: false
        }, function(isConfirm) {
          if (isConfirm) {

                 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaconfirmarrevision;
    conexion1.open('GET','confirmarrevision.php?id='+id, true);
    conexion1.send(null);

          }
        });



}


function cargaconfirmarrevision()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {



swal({
          title: "Solicitud Revisada en Espera",
          text: "",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarpago.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");



}

}







function confirmarsolicitud(id){



        swal({
          title: "Desea Confirmar esta Solicitud?",
          text: "",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Confirmo",
          cancelButtonText: "No, Cancelar",
          closeOnConfirm: false,
          closeOnCancel: false
        }, function(isConfirm) {
          if (isConfirm) {

                 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaconfirmarsolicitud;
    conexion1.open('GET','confirmarsolicitud.php?id='+id, true);
    conexion1.send(null);

          }
        });



}


function cargaconfirmarsolicitud()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {



swal({
          title: "Registro Confirmado Con Exito",
          text: "",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarpago.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");



}

}




function cancelarsolicitud2(id){



        swal({
          title: "Desea Cancelar esta Solicitud?",
          text: "",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Eliminar",
          cancelButtonText: "No, Cancelar",
          closeOnConfirm: false,
          closeOnCancel: false
        }, function(isConfirm) {
          if (isConfirm) {

                 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargacancelarsolicitud2;
    conexion1.open('GET','cancelarsolicitud2.php?id='+id, true);
    conexion1.send(null);

          }
        });



}


function cargacancelarsolicitud2()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Registro Cencelado Con Exito",
          text: "",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarcuenta.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }

}

}








function cancelarsolicitud(id){



        swal({
          title: "Desea Cancelar esta Solicitud?",
          text: "",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Eliminar",
          cancelButtonText: "No, Cancelar",
          closeOnConfirm: false,
          closeOnCancel: false
        }, function(isConfirm) {
          if (isConfirm) {

                 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargacancelarsolicitud;
    conexion1.open('GET','cancelarsolicitud.php?id='+id, true);
    conexion1.send(null);

          }
        });



}


function cargacancelarsolicitud()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Registro Cencelado Con Exito",
          text: "",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarpago.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }

}

}






function eliminarsolicitud2(id){



        swal({
          title: "Desea Eliminar Este Registro?",
          text: "",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Eliminar",
          cancelButtonText: "No, Cancelar",
          closeOnConfirm: false,
          closeOnCancel: false
        }, function(isConfirm) {
          if (isConfirm) {

                 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaeliminarsolicitud2;
    conexion1.open('GET','eliminarsolicitud2.php?id='+id, true);
    conexion1.send(null);

          }
        });



}


function cargaeliminarsolicitud2()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Registro Eliminado Con Exito",
          text: "",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarcuenta.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }

}

}







function eliminarsolicitud(id){



        swal({
          title: "Desea Eliminar Este Registro?",
          text: "",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Eliminar",
          cancelButtonText: "No, Cancelar",
          closeOnConfirm: false,
          closeOnCancel: false
        }, function(isConfirm) {
          if (isConfirm) {

                 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaeliminarsolicitud;
    conexion1.open('GET','eliminarsolicitud.php?id='+id, true);
    conexion1.send(null);

          }
        });



}


function cargaeliminarsolicitud()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Registro Eliminado Con Exito",
          text: "",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarpago.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }

}

}









function number_format(amount, decimals) {

    amount += ''; // por si pasan un numero en vez de un string
    amount = parseFloat(amount.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto

    decimals = decimals || 0; // por si la variable no fue fue pasada

    // si no es un numero o es igual a cero retorno el mismo cero
    if (isNaN(amount) || amount === 0)
        return parseFloat(0).toFixed(decimals);

    // si es mayor o menor que cero retorno el valor formateado como numero
    amount = '' + amount.toFixed(decimals);

    var amount_parts = amount.split('.'),
        regexp = /(\d+)(\d{3})/;

    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, '$1' + '.' + '$2');

    return amount_parts.join(',');
}





function enviardatos5(){


    var maquina=document.getElementById('maquina').value;


    var encuestadora=document.getElementById('encuestadora').value;
var iduser=document.getElementById('iduser').value;






 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaenviardatos5;
    conexion1.open('GET','enviardatos5.php?iduser='+iduser+'&maquina='+maquina+'&encuestadora='+encuestadora, true);
    conexion1.send(null);



}


function cargaenviardatos5()
{




var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error==error2){


swal({
          title: "Solicitud Enviada!",
          text: "Se procesara en el Transcurso de 48-72 Hrs Maximo.",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarcuenta.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }
    else{

    swal("Error!", "Los Datos no fueron enviados, Tienes retrasos de Pagos de Mensualidad, Mantente al Dia con el Pago de las Maquinas Virtuales", "error");





    }


}


}












function enviardatos(){


    var maquina=document.getElementById('maquina').value;


    var encuestadora=document.getElementById('encuestadora').value;
var iduser=document.getElementById('iduser').value;
var cantidad=document.getElementById('cantidad').value;



var porNombre=document.getElementsByName("tipopago");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre.length;i++)
        {
            if(porNombre[i].checked)
                tipop=porNombre[i].value;
        }


var porNombre2=document.getElementsByName("moneda");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre2.length;i++)
        {
            if(porNombre2[i].checked)
                tipop2=porNombre2[i].value;
        }




    if(cantidad=="0" || cantidad==""){

 swal("Error", "No se ha ingresado la Cantidad", "error");

    }
    else {




 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaenviardatos;
    conexion1.open('GET','enviardatos.php?iduser='+iduser+'&maquina='+maquina+'&encuestadora='+encuestadora+'&cantidad='+cantidad+'&tipop='+tipop+'&moneda='+tipop2, true);
    conexion1.send(null);

    }

}


function cargaenviardatos()
{




var error=20;
var error2=conexion1.responseText;
var error3=40;
var error4=80;


  if(conexion1.readyState == 4)
  {
    if(error==error2){



swal({
          title: "Pago Solicitado!",
          text: "Se procesara en el Transcurso de 48 Hrs Maximo.",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarpago.php"

          }
        });


     // swal("Pago Solicitado!", "Se procesara en el Transcurso de 48 Hrs Maximo.", "success");


    }
    else{

       if(error2==error3){



swal("Error!", "Tienes Retraso de Pago de Maquina Virtual, Debes Cancelar tus Deudas antes de hacer un Retiro, Solo Puedes Optar por la opcion ACUMULAR", "error");



      }else{


        if(error2==error4){



swal("Error!", "La Cantidad Maxima a Acumular es de 200 Pts (USD+GBP), Exede el Limite", "error");


        }else{


swal({
          title: "Pago Solicitado!",
          text: "Se procesara en el Transcurso de 48 Hrs Maximo.",
          type: "success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        }, function(isConfirm) {
          if (isConfirm) {
            window.location = "solicitarpago.php"

          }
        });





        }





      }






    }


}


}













function cambiavaloresopinet30()
{



var porNombre=document.getElementsByName("tipopago");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre.length;i++)
        {
            if(porNombre[i].checked)
                tipop=porNombre[i].value;
        }



var porNombre2=document.getElementsByName("moneda");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre2.length;i++)
        {
            if(porNombre2[i].checked)
                tipop2=porNombre2[i].value;
        }


var preciod1=document.getElementById('preciodolar').value;
var preciod2=document.getElementById('preciodolar2').value;



var detallesmostrarprecio=document.getElementById('mostrarprecio');

if(tipop2=="USD"){


detallesmostrarprecio.innerHTML = '<label class="control-label" for="select"><strong>Precio del Dolar:</strong> '+number_format(preciod1, 0)+' Bs</label>';

}
else{


detallesmostrarprecio.innerHTML = '<label class="control-label" for="select"><strong>Precio de la Libra:</strong> '+number_format(preciod2, 0)+' Bs</label>';

}



if(tipop=="Retirar"){

   var cantidad=document.getElementById('cantidad').value;
        var preciodolar=document.getElementById('preciodolar').value;
var preciodolar2=document.getElementById('preciodolar2').value;



if(tipop2=="USD"){
var subtotal=cantidad*preciodolar;
}
else{
  var subtotal=cantidad*preciodolar2;
}






  var comision=subtotal*0.3;
  var total=subtotal-comision;

var detallessolicitar=document.getElementById('botonsolicitar');
  var detallessubtotal=document.getElementById('subtotal');
   var detallescomision=document.getElementById('comision');

var detallestotal=document.getElementById('total');

document.getElementById('valorsubtotal').value=subtotal;
document.getElementById('valorcomision').value=comision;
document.getElementById('valortotal').value=total;

subtotal=number_format(subtotal,0);

comision=number_format(comision,0);
total=number_format(total,0);


        detallessubtotal.innerHTML = '<label class="control-label" for="select"><b>Sub-Total:</b> '+subtotal+' Bs</label>  ';
        detallescomision.innerHTML = '<label class="control-label" for="select"><b>Comision (30%):</b> '+comision+' Bs</label>';
        detallestotal.innerHTML = '<label class="control-label" for="select"><b>Total:</b> <font color="green">'+total+' Bs</font></label>';




}
else{

 var cantidad=document.getElementById('cantidad').value;
        var preciodolar=document.getElementById('preciodolar').value;





  var subtotal=cantidad;
  var comision=subtotal*0.3;
  var total=subtotal-comision;

var detallessolicitar=document.getElementById('botonsolicitar');

  var detallessubtotal=document.getElementById('subtotal');
   var detallescomision=document.getElementById('comision');

var detallestotal=document.getElementById('total');

document.getElementById('valorsubtotal').value=subtotal;
document.getElementById('valorcomision').value=comision;
document.getElementById('valortotal').value=total;

subtotal=number_format(subtotal,0);

comision=number_format(comision,0);
total=number_format(total,0);


        detallessubtotal.innerHTML = '<label class="control-label" for="select"><b>Sub-Total:</b> '+subtotal+' '+tipop2+'</label>  ';
        detallescomision.innerHTML = '<label class="control-label" for="select"><b>Comision (30%):</b> '+comision+' '+tipop2+'</label>';
        detallestotal.innerHTML = '<label class="control-label" for="select"><b>Total:</b> <font color="green">'+total+' '+tipop2+'</font></label>';





}




}








function cambiavaloresopinet()
{



var porNombre=document.getElementsByName("tipopago");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre.length;i++)
        {
            if(porNombre[i].checked)
                tipop=porNombre[i].value;
        }



var porNombre2=document.getElementsByName("moneda");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre2.length;i++)
        {
            if(porNombre2[i].checked)
                tipop2=porNombre2[i].value;
        }


var preciod1=document.getElementById('preciodolar').value;
var preciod2=document.getElementById('preciodolar2').value;



var detallesmostrarprecio=document.getElementById('mostrarprecio');

if(tipop2=="USD"){


detallesmostrarprecio.innerHTML = '<label class="control-label" for="select"><strong>Precio del Dolar:</strong> '+number_format(preciod1, 0)+' Bs.S</label>';

}
else{


detallesmostrarprecio.innerHTML = '<label class="control-label" for="select"><strong>Precio de la Libra:</strong> '+number_format(preciod2, 0)+' Bs.S</label>';

}



if(tipop=="Retirar"){

   var cantidad=document.getElementById('cantidad').value;
        var preciodolar=document.getElementById('preciodolar').value;
var preciodolar2=document.getElementById('preciodolar2').value;



if(tipop2=="USD"){
var subtotal=cantidad*preciodolar;
}
else{
  var subtotal=cantidad*preciodolar2;
}






  var comision=subtotal*0.2;
  var total=subtotal-comision;

var detallessolicitar=document.getElementById('botonsolicitar');
  var detallessubtotal=document.getElementById('subtotal');
   var detallescomision=document.getElementById('comision');

var detallestotal=document.getElementById('total');

document.getElementById('valorsubtotal').value=subtotal;
document.getElementById('valorcomision').value=comision;
document.getElementById('valortotal').value=total;

subtotal=number_format(subtotal,0);

comision=number_format(comision,0);
total=number_format(total,0);


        detallessubtotal.innerHTML = '<label class="control-label" for="select"><b>Sub-Total:</b> '+subtotal+' Bs.S</label>  ';
        detallescomision.innerHTML = '<label class="control-label" for="select"><b>Comision (20%):</b> '+comision+' Bs.S</label>';
        detallestotal.innerHTML = '<label class="control-label" for="select"><b>Total:</b> <font color="green">'+total+' Bs.S</font></label>';




}
else{

 var cantidad=document.getElementById('cantidad').value;
        var preciodolar=document.getElementById('preciodolar').value;





  var subtotal=cantidad;
  var comision=subtotal*0.2;
  var total=subtotal-comision;

var detallessolicitar=document.getElementById('botonsolicitar');

  var detallessubtotal=document.getElementById('subtotal');
   var detallescomision=document.getElementById('comision');

var detallestotal=document.getElementById('total');

document.getElementById('valorsubtotal').value=subtotal;
document.getElementById('valorcomision').value=comision;
document.getElementById('valortotal').value=total;

subtotal=number_format(subtotal,0);

comision=number_format(comision,0);
total=number_format(total,0);


        detallessubtotal.innerHTML = '<label class="control-label" for="select"><b>Sub-Total:</b> '+subtotal+' '+tipop2+'</label>  ';
        detallescomision.innerHTML = '<label class="control-label" for="select"><b>Comision (20%):</b> '+comision+' '+tipop2+'</label>';
        detallestotal.innerHTML = '<label class="control-label" for="select"><b>Total:</b> <font color="green">'+total+' '+tipop2+'</font></label>';





}




}




function salir(){


    conexion5=crearXMLHttpRequest();
    conexion5.onreadystatechange = cargasalir;
    conexion5.open('GET','cerrar.php', true);
    conexion5.send(null);


}


function cargasalir()
{

  if(conexion5.readyState == 4)
  {

window.location = "index.php";

}



}





function registraruser(){


    var usuario=document.getElementById('usuario').value;
    var patrocinador=document.getElementById('patrocinador').value;
    var nombres=document.getElementById('nombres').value;
var apellidos=document.getElementById('apellidos').value;
var cedula=document.getElementById('cedula').value;
var email=document.getElementById('email').value;
var telefono=document.getElementById('telefono').value;
var direccion=document.getElementById('direccion').value;



  var detalles6=document.getElementById('error');

    if(usuario=="" || patrocinador=="" || nombres=="" || apellidos=="" || cedula=="" || email==""){

 detalles6.innerHTML = '<font color="red">Hay Campos Vacios</font>';

    }
    else {




 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaregistraruser;
    conexion1.open('GET','registrarusuario.php?usuario='+usuario+'&patrocinador='+patrocinador+'&nombres='+nombres+'&apellidos='+apellidos+'&cedula='+cedula+'&email='+email+'&telefono='+telefono+'&direccion='+direccion, true);
    conexion1.send(null);

    }

}


function cargaregistraruser()
{


  var detalles4=document.getElementById('error');


var error=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
    if(error=="1"){

      detalles4.innerHTML = '<font color="red">El Nombre de Usuario ya Existe</font>';


    }

    if(error=="3"){

      detalles4.innerHTML = '<font color="red">El Email ya Existe</font>';


    }

    if(error=="4"){

      detalles4.innerHTML = '<font color="red">La Cedula del Usuario ya Existe</font>';


    }

    if(error==""){

      detalles4.innerHTML = '<font color="green">Datos Guardados con Exito</font>';


    }




}
  else
  {
        detalles4.innerHTML = '<img src="cargando.gif">Guardando... ';
  }



}






function entrar(){


    var nombreu=document.getElementById('usuario').value;
	  var clave=document.getElementById('clave').value;



  var detalles6=document.getElementById('error');

	  if(nombreu=="" || clave==""){

 detalles6.innerHTML = '<font color="red">Hay Campos Vacios</font>';

	  }
	  else {




 conexion1=crearXMLHttpRequest();
    conexion1.onreadystatechange = cargaentrar;
    conexion1.open('GET','sesion2.php?nombreu='+nombreu+'&clave='+clave, true);
    conexion1.send(null);

	  }

}


function cargaentrar()
{


  var detalles4=document.getElementById('error');

var error=20;
var error2=conexion1.responseText;



  if(conexion1.readyState == 4)
  {
	  if(error==error2){

		  detalles4.innerHTML = '<font color="red">Los Datos son Incorrectos</font>';


	  }
	  else{

	  detalles4.innerHTML = '<font color="green"><img src="cargando.gif">Entrando...</font>';





	  }


}
  else
  {
        detalles4.innerHTML = '<img src="cargando.gif">Cargando... ';
  }



}






function addEvent(elemento,nomevento,funcion,captura)
{
  if (elemento.attachEvent)
  {
    elemento.attachEvent('on'+nomevento,funcion);
    return true;
  }
  else
    if (elemento.addEventListener)
    {
      elemento.addEventListener(nomevento,funcion,captura);
      return true;
    }
    else
      return false;
}

function crearXMLHttpRequest()
{
  var xmlHttp=null;
  if (window.ActiveXObject)
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  else
    if (window.XMLHttpRequest)
      xmlHttp = new XMLHttpRequest();
  return xmlHttp;
}
