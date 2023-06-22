//Obtener color del input color y cambiar color de fondo body
var colorInput = document.getElementById('colorInput');
var body = document.getElementById('body');

colorInput.addEventListener('input', function () {
    var color = colorInput.value;
    body.style.backgroundColor = color;
});

//Función para poder descargar el dibujo del lienzo
function downloadCanvas() {
    // Obtener referencia al lienzo
    var canvas = document.getElementById("myCanvas");

    // Crear un enlace para descargar la imagen
    var link = document.createElement('a');

    // Establecer el atributo 'download' con el nombre del archivo
    link.download = 'mi_dibujo.png';

    // Obtener la imagen en formato base64 desde el lienzo
    link.href = canvas.toDataURL('image/png');

    // Hacer clic en el enlace para iniciar la descarga
    link.click();
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Variables para almacenar las coordenadas iniciales y finales del dibujo
var startX, startY, endX, endY;
var isDrawing = false;

// Evento de inicio de dibujo (click del mouse)
canvas.addEventListener("mousedown", function (event) {
    startX = event.clientX - canvas.getBoundingClientRect().left;
    startY = event.clientY - canvas.getBoundingClientRect().top;
    isDrawing = true;
});

// Evento de seguimiento de movimiento del mouse
canvas.addEventListener("mousemove", function (event) {
    if (isDrawing) {
        endX = event.clientX - canvas.getBoundingClientRect().left;
        endY = event.clientY - canvas.getBoundingClientRect().top;

        // Dibujar la línea en el lienzo
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Actualizar las coordenadas iniciales
        startX = endX;
        startY = endY;
    }
});

// Evento de finalización de dibujo (soltar el botón del mouse)
canvas.addEventListener("mouseup", function () {
    isDrawing = false;
});

// Evento del botón para borrar el dibujo
var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});




//Función Geolocalización
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("La geolocalización no es compatible con este navegador.");
    }
}

function showPosition(position) {
    alert("Latitud: " + position.coords.latitude +
        "\nLongitud: " + position.coords.longitude);
}


//Función Drag and drop
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

//Funcion WEB storage
function saveName() {
    var name = document.getElementById("nameInput").value;
    localStorage.setItem("name", name);
    alert("Nombre guardado exitosamente.");
}

// Para recuperar el nombre almacenado:
var storedName = localStorage.getItem("name");
if (storedName) {
    alert("Nombre almacenado: " + storedName);
}

//Función Web Workers
// Crear un archivo de script externo llamado "worker.js"
// Contenido del archivo "worker.js":
// self.onmessage = function(event) {
//   var result = event.data * 2;
//   self.postMessage(result);
// };

var worker = new Worker("worker.js");
worker.onmessage = function (event) {
    alert("Resultado: " + event.data);
};

worker.postMessage(5); // Enviar un mensaje al Web Worker

//Función SSE Server-Sent Events
var eventSource = new EventSource("server.php");
eventSource.onmessage = function (event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
};


//Función barra de navegación
document.addEventListener('DOMContentLoaded', function() {
    var dropdownItems = document.querySelectorAll('.dropdown');
    for (var i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].addEventListener('click', function() {
        this.querySelector('.dropdown-menu').classList.toggle('show');
      });
    }
  });

