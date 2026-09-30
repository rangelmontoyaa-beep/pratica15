const casillas = document.querySelectorAll(".casilla");

const turno = document.getElementById("turno");

const mensaje = document.getElementById("mensaje");

const reiniciar = document.getElementById("reiniciar");

let tablero = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

let jugadorActual = "X";

let juegoActivo = true;


const combinacionesGanadoras = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]

];


casillas.forEach(function(casilla) {

    casilla.addEventListener("click", function() {

        const posicion = Number(casilla.dataset.posicion);

        if (tablero[posicion] !== "") {
            return;
        }

        if (!juegoActivo) {
            return;
        }

        tablero[posicion] = jugadorActual;

        casilla.textContent = jugadorActual;

        comprobarResultado();

    });

});


function comprobarResultado() {

    for (let combinacion of combinacionesGanadoras) {

        const posicion1 = combinacion[0];

        const posicion2 = combinacion[1];

        const posicion3 = combinacion[2];


        if (
            tablero[posicion1] !== "" &&
            tablero[posicion1] === tablero[posicion2] &&
            tablero[posicion1] === tablero[posicion3]
        ) {

            mensaje.textContent =
                "¡Ganó el jugador " + jugadorActual + "!";

            juegoActivo = false;

            return;
        }

    }


    if (!tablero.includes("")) {

        mensaje.textContent = "¡Empate!";

        juegoActivo = false;

        return;
    }


    if (jugadorActual === "X") {

        jugadorActual = "O";

    } else {

        jugadorActual = "X";

    }


    turno.textContent =
        "Turno del jugador: " + jugadorActual;

}


reiniciar.addEventListener("click", function() {

    tablero = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    jugadorActual = "X";

    juegoActivo = true;


    casillas.forEach(function(casilla) {

        casilla.textContent = "";

    });


    turno.textContent = "Turno del jugador: X";

    mensaje.textContent = "";

});