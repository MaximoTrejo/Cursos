 $(window).load(function() {
    $('.flexslider').flexslider({
    	touch: true,
    	pauseOnAction: false,
    	pauseOnHover: false,
    });
  });








function mostrarLista(lista) {
	var elemento = document.getElementById(lista)
	if (elemento.style.display=='none') {
	elemento.style.display='block'
    }else{
    	elemento.style.display='none'
    }
}




var logo = document.getElementById('logo')
logo.innerHTML='<h1> Desarollo de JavaScript</h1>'
logo.style.fontSize ='18px'
logo.style.fontFamily='"century gothic"'
logo.style.color='white'










var usuario =document.getElementById('usuario')
var apellido =document.getElementById('apellido')
var email =document.getElementById('email')
var telefono =document.getElementById('telefono')
var consulta =document.getElementById('consulta')


function validarDatos() {
	usuario.addEventListener('input',validarUsuario)
	apellido.addEventListener('input',validarApellido)
	email.addEventListener('input', validarEmail)
	telefono.addEventListener('input', validarTel)
	consulta.addEventListener('input', validarConsulta)
	validarConsulta()
	validarUsuario()
	validarApellido() 
	validarEmail()
	validarTel()

} 

function validarUsuario(){
if (usuario.value=='') {
	usuario.style.backgroundColor='#fa8aB2'
	usuario.setCustomValidity('Ingrese su nombre')
}else{
	usuario.style.backgroundColor='#b9e69a'
	usuario.setCustomValidity('')
}

}

function validarApellido(){
	if (apellido.value=='') {
	apellido.style.backgroundColor='#fa8aB2'
	apellido.setCustomValidity('Ingrese su apellido')
}else{
	apellido.style.backgroundColor='#b9e69a'
	apellido.setCustomValidity('')
}

	
}
function validarEmail(){
	if (email.value=='') {
	email.style.backgroundColor='#fa8aB2'
	email.setCustomValidity('Ingrese su email')
}else{
	email.style.backgroundColor='#b9e69a'
	email.setCustomValidity('')
}
}

function validarTel(){
	if (telefono.value=='') {
	telefono.style.backgroundColor='#fa8aB2'
	telefono.setCustomValidity('Ingrese su numero telefonico')
}else{
	telefono.style.backgroundColor='#b9e69a'
	telefono.setCustomValidity('')
}
}

function validarConsulta(){
	if (consulta.value=='') {
	consulta.style.backgroundColor='#fa8aB2'
	consulta.setCustomValidity('Escriba su consulta (si no tiene una consulta especifiquelo')
}else{
	consulta.style.backgroundColor='#b9e69a'
	consulta.setCustomValidity('')
}
}







window.addEventListener('load',validarDatos)


var footer = document.getElementById('footer')
footer.innerHTML ='<h4>Desarrollo de JabaScript -JS 6/9/2020-</h4>'