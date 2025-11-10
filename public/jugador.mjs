import { numeroJugadas } from "./jugada.mjs";
import { jugadas } from "./jugada.mjs";

export class Jugador{
    #jugada
    #nombre = "Pepe";
    #puntuacion = 0;

    elegirJugada(opcion){  
        this.#jugada = jugadas[opcion];
    }

    luchaJugador(nonPlayer, jugada){
        
        if((jugada.luchaJugada(nonPlayer.bot())) === 0) {
            this.Jugador.sumarPunto();
            
        } else if((jugada.luchaJugada(nonPlayer.jugarBot())) === 1){
            nonPlayer.sumarTresPuntos();
            
        } else if((jugada.luchaJugada(nonPlayer.jugarBot())) === null) {
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

    sumarPunto(){
        this.#puntuacion = this.#puntuacion + 1 ;
    }

    sumarTresPuntos(){
        this.#puntuacion = this.#puntuacion + 3 ;
    }

    getJugada(){
        return this.#jugada;
    }

    render(elto) {
        let nombre = document.createElement("h2");
        nombre.innerText = this.getNombre();

        let puntuacion = document.createElement("p");
        puntuacion.innerText = "Puntuacion: " + this.getPuntuacion();

        elto.appendChild(nombre);
        elto.appendChild(puntuacion);

    }

    renderGanador(elto) {
        let nombre = document.createElement("h1");
        nombre.innerText = "El ganador es " + this.getNombre();

        elto.appendChild(nombre);

    }
   
    

    getNombre(){
        return this.#nombre;
    }
    getPuntuacion(){
        return this.#puntuacion;
    }
}