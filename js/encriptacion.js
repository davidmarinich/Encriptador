//Escuchar el boton y mostrar texto ingresado en consola
var botonAdicionar = document.querySelector("#botonEncriptacion");
var botonDesencriptar = document.querySelector(".botonDesencriptar");
var contenedorImagenMuñeco = document.querySelector(".contenedorImagenMuñeco");
var avisoTextoFaltante = document.querySelector(".avisoTextoFaltante");
var avisoIngresarTexto = document.querySelector(".avisoIngresarTexto");
var textoDesencriptado = document.querySelector(".textoDesencriptado");
var botonCopiar = document.querySelector(".botonCopiar");
var conteiner = document.querySelector(".conteiner");
var conteiner2 = document.querySelector(".conteiner2");

botonAdicionar.addEventListener("click",encriptar);
botonDesencriptar.addEventListener("click",desencriptar);
botonCopiar.addEventListener("click",copiar);


function encriptar(){
	event.preventDefault();
	var campoEscritura = document.querySelector(".textareaEncriptacion");
	if (campoEscritura.value.length > 0){
		var campo = document.querySelector(".divTextarea");
	    var contenido = capturarTextarea(campo);
	    var texto_desencriptado = reemplazarLetras(contenido);
	    ocultar();
	    textoDesencriptado.value = texto_desencriptado;
	}
};

function ocultar(){
	contenedorImagenMuñeco.classList.add("invisible");
    avisoTextoFaltante.classList.add("invisible");
    avisoIngresarTexto.classList.add("invisible");
    textoDesencriptado.classList.add("block");
    botonCopiar.classList.add("block");
	conteiner.classList.add("extendConteiner");
	conteiner2.classList.add("extendConteiner2");
}

function desencriptar(){
	event.preventDefault();
	var campoEscritura = document.querySelector(".textareaEncriptacion");
	if (campoEscritura.value.length > 0){
		var campo = document.querySelector(".divTextarea");
	    var contenido = capturarTextarea(campo);
	    var texto_desencriptado = reemplazarLetrasDesencriptar(contenido);
	    ocultar();
	    textoDesencriptado.value = texto_desencriptado;
	}
};

//Funcion para extraer el contenido del textarea
function capturarTextarea(campo){
	var texto = campo.querySelector(".textareaEncriptacion");
	var textoContenido = texto.value;
	return textoContenido;
};


//Funcion para reemplazar letras

function reemplazarLetras(contenido){
	var reemplazos = {
		a:"ai",
		e:"enter",
		i:"imes",
		o:"ober",
		u:"ufat"
	};

	var regex = new RegExp(Object.keys(reemplazos).join('|'), 'gi');

	var resultado = contenido.replace(regex, function(match){
		return reemplazos[match];
	});

	return resultado;
};

function reemplazarLetrasDesencriptar(contenido){
	var reemplazos = {
		ai:"a",
		enter:"e",
		imes:"i",
		ober:"o",
		ufat:"u"
	};

	var regex = new RegExp(Object.keys(reemplazos).join('|'), 'gi');

	var resultado = contenido.replace(regex, function(match){
		return reemplazos[match];
	});

	return resultado;
}

function copiar(){

    var content = textoDesencriptado;
    
    content.select();
    document.execCommand('copy');

    alert("Copiado!");
}