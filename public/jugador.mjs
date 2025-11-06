import Jugada from "./jugada.mjs";
import { numeroJugadas } from "./jugada.mjs";
import { jugadas } from "./jugada.mjs";

export class Jugador{
    #jugada
    #nombre = "Pepe";
    #puntuacion = 0;

    elegirJugada(opcion){  
        this.#jugada = jugadas[opcion];
    }

    luchaJugador(){
        let nonPlayer = new Jugador();
        nonPlayer.nombreBot();

        if((this.#jugada.luchaJugada(nonPlayer.bot())) === 0) {
            this.Jugador.sumarPunto();
            
        } else if((this.#jugada.luchaJugada(nonPlayer.jugarBot())) === 1){
            nonPlayer.sumarTresPuntos();
            
        } else if((this.#jugada.luchaJugada(nonPlayer.jugarBot())) === null) {
            this.Jugador.sumarPunto();
            nonPlayer.sumarPunto();

        }
    }

    nombreBot(){
        this.#nombre = "Bot";
    }

    jugarBot() {

        let posicion = Math.floor(Math.random() * numeroJugadas);
        let eleccion = jugadas[posicion];
        return eleccion;
    }

    getJugada(){
        return this.#jugada;
    }

   
    sumarPunto(){
        this.#puntuacion = this.#puntuacion + 1 ;
    }

    sumarTresPuntos(){
        this.#puntuacion = this.#puntuacion + 3 ;
    }


    getPuntuacion(){
        return this.#puntuacion;
    }
}