var nombres = document.getElementById("nombre");
var email = document.getElementById('email');
var fono = document.getElementById('fono');
var errore = document.getElementById('error');



function enviarFormulario(){


var mensajesError = [];

if (nombres.value==null || nombres.value==''){
    errore.style.color = "#fa0000";
      mensajesError.push("ingresa tu nombre");
}



if (email.value===null || email.value===''){
    errore.style.color = "#fa0000";
    mensajesError.push("ingresa tu email");

}


if (fono.value===null || fono.value===''){
    errore.style.color = "#fa0000";
    mensajesError.push("ingresa tu Telefono");
}

if (fono.value!=null && fono.value!='' && email.value!=null && email.value!='' && nombres.value!=null && nombres.value!=''){
    alert("Nos pondremos en contacto a la brevedad");
    nombres.value="";
    email.value="";
    fono.value="";
}







error.innerHTML=   mensajesError.join(", ");   


return false;
}