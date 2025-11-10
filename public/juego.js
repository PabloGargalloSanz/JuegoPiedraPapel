import {Jugador} from "./jugador.mjs";
import {jugadas} from "./jugada.mjs";


//Variables zonas
let zona0 = document.getElementById("info0");
let zona1 = document.getElementById("info1");
let zona2 = document.getElementById("ganador");


//Iniciar jugadores
let jugador0 = new Jugador();
let bot = new Jugador();
bot.nombreBot();

//Cargar pagina
window.addEventListener("load", iniciarPagina);

//Variables botones
let btnPiedra = document.getElementById("piedra");
let btnPapel = document.getElementById("papel");
let btnTijera = document.getElementById("tijera");

// Iniciar los botones y los renders
function iniciarPagina(){

    jugador0.render(zona0);
    bot.render(zona1);
    
    btnPiedra.addEventListener("click", () => {
        iniciarJugada("piedra"); 
    });

    btnPapel.addEventListener("click", () => {
        iniciarJugada("papel");
    });

    btnTijera.addEventListener("click", () => {
        iniciarJugada("tijera");
    });
}

//Jugar 
function iniciarJugada(nombreJugada){
    
    // Obtiene objeto Jugada del mapa jugadas usando el nombre como clave
    let jugadaElegida = jugadas[nombreJugada];
    
    // Ejecuta miesntras la puntuacion sea inferior a 3
    if (jugadaElegida && jugador0.getPuntuacion() < 3 && bot.getPuntuacion() < 3) {
        
        //Lucha de jugadores devolviendo la jugada de bot para poder mostrarla
        let jugadaBot = jugador0.luchaJugador(bot, jugadaElegida); 
        
        // Renderizar y muestra la jugada elegida
        jugador0.renderJugada(zona0, jugadaElegida);
        bot.renderJugada(zona1, jugadaBot);
       
        //Comprueba si se ha alcanzado la puntuación de 3
        if (jugador0.getPuntuacion() >= 3){ 
            jugador0.renderGanador(zona2);
            deshabilitarBotones();
    
        } else if(bot.getPuntuacion() >= 3){
            bot.renderGanador(zona2);
            deshabilitarBotones();
        }
    }
}

//Ocutal botones cuadno salga ganador
function deshabilitarBotones() {
    btnPiedra.style.display = 'none';
    btnPapel.style.display = 'none';
    btnTijera.style.display = 'none';
}


// Para recargar la pagina con el botom de partida nueva
let botonNuevaPartida = document.getElementById("nuevaPartida");
    botonNuevaPartida.addEventListener("click", function() {
    location.reload();
});