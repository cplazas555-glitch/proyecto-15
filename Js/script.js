
const tarjeta = [
    {
        pregunta: "¿Qué es JavaScript?",
        respuesta: "Es un lenguaje de programación que permite crear páginas interactivas."
    },
    {
        pregunta: "¿Qué es HTML?",
        respuesta: "Es el lenguaje que estructura el contenido de una página web."
    },
    {
        pregunta: "¿Qué es CSS?",
        respuesta: "Es el lenguaje que permite dar estilos a una página web."
    },
    {
        pregunta: "¿Qué es React?",
        respuesta: "Es una biblioteca de JavaScript para crear interfaces."
    },
    {
        pregunta: "¿Qué es una variable?",
        respuesta: "Es un espacio donde podemos almacenar información."
    },
    {
        pregunta: "¿Para qué sirve let?",
        respuesta: "Permite declarar variables cuyo valor puede cambiar."
    },
    {
        pregunta: "¿Para qué sirve const?",
        respuesta: "Permite declarar variables que no pueden reasignarse."
    },
    {
        pregunta: "¿Qué es una función?",
        respuesta: "Es un bloque de código que realiza una tarea."
    },
    {
        pregunta: "¿Qué es un arreglo?",
        respuesta: "Es una estructura que almacena varios elementos."
    },
    {
        pregunta: "¿Qué es un objeto?",
        respuesta: "Es una estructura que almacena datos mediante propiedades."
    },
    {
        pregunta: "¿Qué es useState?",
        respuesta: "Es un Hook de React que permite manejar estados."
    },
    {
        pregunta: "¿Qué es JSX?",
        respuesta: "Es una extensión de JavaScript que permite escribir estructuras similares a HTML."
    },
    {
        pregunta: "¿Qué es un componente?",
        respuesta: "Es una parte reutilizable de una interfaz en React."
    },
    {
        pregunta: "¿Qué es una condición if?",
        respuesta: "Permite ejecutar código dependiendo de una condición."
    },
    {
        pregunta: "¿Qué significa return?",
        respuesta: "Devuelve un valor o resultado desde una función."
    },
    {
        pregunta: "¿Qué es un evento onClick?",
        respuesta: "Es un evento que ejecuta una función cuando hacemos clic."
    },
    {
        pregunta: "¿Qué es el DOM?",
        respuesta: "Es la representación estructurada de un documento HTML."
    },
    {
        pregunta: "¿Qué es un operador ternario?",
        respuesta: "Es una forma corta de escribir una condición."
    },
    {
        pregunta: "¿Qué es npm?",
        respuesta: "Es un gestor de paquetes utilizado en proyectos JavaScript."
    },
    {
        pregunta: "¿Qué es Vite?",
        respuesta: "Es una herramienta para desarrollar y construir aplicaciones web."
    }
];

let actual = 0;
let mostrarRespuesta = false;

const pregunta = document.getElementById("pregunta");
const porcentaje = document.getElementById("porcentaje");
const relleno = document.getElementById("relleno");

const botonAnterior = document.getElementById("anterior");
const botonMostrar = document.getElementById("mostrar");
const botonSiguiente = document.getElementById("siguiente");


function actualizarTarjeta() {

    const cajaTarjeta = document.querySelector(".tarjeta");

    if (mostrarRespuesta) {
        pregunta.textContent = tarjeta[actual].respuesta;
        botonMostrar.textContent = "Ocultar respuesta";
        cajaTarjeta.classList.add("respuesta-activa");

    } else {
        pregunta.textContent = tarjeta[actual].pregunta;
        botonMostrar.textContent = "Mostrar respuesta";
        cajaTarjeta.classList.remove("respuesta-activa");
    }

    porcentaje.textContent = `${Math.round(((actual + 1) / tarjeta.length) * 100)}%`;

    relleno.style.width = `${((actual + 1) / tarjeta.length) * 100}%`;
}


botonMostrar.addEventListener("click", function () {
    mostrarRespuesta = !mostrarRespuesta;
    actualizarTarjeta();
});

botonAnterior.addEventListener("click", function () {
    if (actual > 0) {
        actual--;
        mostrarRespuesta = false;
        actualizarTarjeta();
    }
});

botonSiguiente.addEventListener("click", function () {
    if (actual < tarjeta.length - 1) {
        actual++;
        mostrarRespuesta = false;
        actualizarTarjeta();
    }
});

actualizarTarjeta();
