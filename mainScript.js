//Escribir en html cogiendo id
document.getElementById("demo").innerHTML = "Hola JavaScript";

/*// Definir un array de preguntas y respuestas
var preguntas = [
    { pregunta: "¿Cuál es tu nombre?", respuesta: "" },
    { pregunta: "¿Cuál es tu edad?", respuesta: "" },
    { pregunta: "¿Cuál es tu color favorito?", respuesta: "" }
  ];
  
  // Iterar a través de las preguntas y obtener las respuestas
  for (var i = 0; i < preguntas.length; i++) {
    preguntas[i].respuesta = prompt(preguntas[i].pregunta);
  }*/
  var edad = 25;
  var resultado = edad * 2;
  console.log(resultado);

 
  // Manipulación del DOM
document.getElementById("miElemento").innerHTML = "Nuevo contenido";

document.getElementById("miBoton").addEventListener("click", function() {
  console.log("Se hizo clic en el botón");
});

// Eventos
document.getElementById("eventoBoton").addEventListener("click", function() {
  alert("Se disparó un evento");
});

// Manipulación de estilos y animaciones
var elementoEstilo = document.getElementById("miElementoEstilo");
elementoEstilo.style.transition = "background-color 1s";

elementoEstilo.addEventListener("mouseover", function() {
  elementoEstilo.style.backgroundColor = "blue";
});

elementoEstilo.addEventListener("mouseout", function() {
  elementoEstilo.style.backgroundColor = "initial";
});


  
 