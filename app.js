
let textEncript = document.getElementById('text-respuestas');

textEncript.innerHTML = 'Aún no se ha encontrado una frase para encriptar';

document.getElementById("btnCopiar").style.display = "none";
document.getElementById("robot2").style.display = "none";


//En esta funcion se encontraran las acciones que realizara el botón de encriptado
function btnEncriptar(){
    let text = document.getElementById("txtUsuario").value;

    if (text == '') {
        textEncript.innerHTML = 'Por Favor escribe tu frase para ser encriptada';
        document.getElementById("robot1").style.display = "";
        document.getElementById("robot2").style.display = "none";
        document.getElementById("btnCopiar").style.display = "none"
    } else {
        
        /**
         * El "igm" le permite a la función revisar mayusculas y minusculas por igual
         * gracias al i, que revise la frace completa con el g y el m revisa parrafos
         */
        var txtCifrado = text.replace(/e/igm,"enter");
        var txtCifrado = txtCifrado.replace(/i/img,"imes");
        var txtCifrado = txtCifrado.replace(/a/img,"ai");
        var txtCifrado = txtCifrado.replace(/o/img,"ober");
        var txtCifrado = txtCifrado.replace(/u/img,"ufat");
        
        document.getElementById("robot1").style.display = "none";
        document.getElementById("robot2").style.display = "";
        document.getElementById("btnCopiar").style.display = "";
        textEncript.innerHTML = txtCifrado;
        document.querySelector('#txtUsuario').value = '';
    }    
}

function btnDesencriptar(){
    let text = document.getElementById("txtUsuario").value;

    if (text == '') {
        textEncript.innerHTML = 'Por Favor escribe tu frase para ser desencriptada';
        document.getElementById("robot1").style.display = "";
        document.getElementById("robot2").style.display = "none";
        document.getElementById("btnCopiar").style.display = "none"
    } else {
        
        /**
         * El "igm" le permite a la función revisar mayusculas y minusculas por igual
         * gracias al i, que revise la frace completa con el g y el m revisa parrafos
         */
        var txtCifrado = text.replace(/enter/igm,"e");
        var txtCifrado = txtCifrado.replace(/imes/img,"i");
        var txtCifrado = txtCifrado.replace(/ai/img,"a");
        var txtCifrado = txtCifrado.replace(/ober/img,"o");
        var txtCifrado = txtCifrado.replace(/ufat/img,"u");
        
        document.getElementById("robot1").style.display = "none";
        document.getElementById("robot2").style.display = "";
        document.getElementById("btnCopiar").style.display = "";
        textEncript.innerHTML = txtCifrado;
        document.querySelector('#txtUsuario').value = '';
    }
}

function copiar(){
    navigator.clipboard.writeText(document.getElementById('text-respuestas').value);
}