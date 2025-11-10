import {Jugador} from "./jugador.mjs";
import jugadas from "./jugada.mjs";

//Variables

let zona0 = document.getElementById("info0");
let zona1 = document.getElementById("info1");
let zona2 = document.getElementById("jugada0");
let zona3 = document.getElementById("jugada1");
let zona4 = document.getElementById("ganador");

//Iniciar jugadores
let jugador0 = new Jugador();
let bot = new Jugador();
bot.nombreBot();

//Cargar pagina
window.addEventListener("load", iniciarPagina);

function iniciarPagina(){
    jugador0.render(zona0);
    bot.render(zona1);

    btnPiedra.addEventListener("click", () => {
        iniciarJugada("Piedra"); 
    });

    btnPapel.addEventListener("click", () => {
        iniciarJugada("Papel");
    });

    btnTijera.addEventListener("click", () => {
        iniciarJugada("Tijera");
    });
}

//Jugar 
jugador0.luchaJugador(bot, jugada());

while (jugador0.getPuntuacion() < 3 && bot.getPuntuacion() < 3){
    let jugadaElegida = jugadas[nombreJugada]; 
    
    if (jugadaElegida) {
        
        jugador0.luchaJugador(bot, jugadaElegida); 
        
        jugador0.render(zona0);
        bot.render(zona1);

    }
    jugador0.luchaJugador(bot);

    if (jugador0.getPuntuacion() === 3){
        jugador0.renderGanador(zona4);

    } else if(bot.getPuntuacion() === 3){
        bot.renderGanador(zona4);
    }
}
