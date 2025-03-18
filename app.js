// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let nombreAmigo = document.getElementById("amigo").value;
  
  // Validar la entrada
  if (nombreAmigo.trim() === "") { //cuando encuentra vacío muestra un aviso
    alert("Por favor, inserte un nombre.");
    return;
  }
  
  // Actualizar el array de amigos
  amigos.push(nombreAmigo);//añade un miembre o integrante
  
  actualizarListaAmigos(amigos);
  
  // Limpiar el campo de entrada
  document.getElementById("amigo").value = "";
}



