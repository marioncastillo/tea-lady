var imprimir = document.getElementById("clientes");

function mostrarData(){
var nombre = document.getElementById("nombredueño").value;
var apellido = document.getElementById("apellido").value;
var email = document.getElementById("Email").value;
var direccion = document.getElementById("Dirección").value;
var fono = document.getElementById("telefono").value;

var escribirInfo = ("<br>" + "Nombre: " + nombre + "<br>" + "<br>" + "Apellido: " + apellido +  "<br>" + "<br>" + "Mail: " + email +  "<br>" + "<br>" + "Dirección: " + direccion +  "<br>" + "<br>" + "Teléfono: " + fono);



imprimir.innerHTML = (escribirInfo);
}