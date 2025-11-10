import { numeroJugadas } from "./jugada.mjs";
import { jugadas } from "./jugada.mjs";
let zona = document.getElementById("jugadaGanadora");

export class Jugador{
    #jugada
    #nombre = "Pepe";
    #puntuacion = 0;

    //Guarda jugada 
    elegirJugada(opcion){  
        this.#jugada = jugadas[opcion];
    }

    //Lucha jugador
    //0: gana jugador
    //1:gana bot
    // el resto sin puntos
    luchaJugador(nonPlayer, jugada){
        let jugadaBot = nonPlayer.jugarBot();    
        let resultado = jugada.luchaJugada(jugadaBot);

        if(resultado === 0 ) {
            this.sumarPunto();
            //renderiza el ganador
            this.renderPunto(zona);

        } else if(resultado === 1){
            nonPlayer.sumarPunto();
            nonPlayer.renderPunto(zona);
            
        } else {
            //renderiza el empate
            this.renderEmpate(zona);
        }
        return jugadaBot;
    }

    //Asigna el nombre al jugadro bot
    nombreBot(){
        this.#nombre = "Bot";
    }

    //juego automatico bot
    jugarBot() {

        // Crea lista de objetos con las jugadas
        const nombresJugadas = Object.keys(jugadas);
        let posicion = Math.floor(Math.random() * nombresJugadas.length);
        let nombreElegido = nombresJugadas[posicion];

        // Devuelve el OBJETO Jugada y lo guarda
        this.setJugada(nombreElegido);
        return jugadas[nombreElegido];

    }

    //Render nombre y puntuacion
    render(elto) {
        elto.innerHTML = "";
        let nombre = document.createElement("h2");
        nombre.innerText = this.getNombre();

        let puntuacion = document.createElement("p");
        puntuacion.innerText = "Puntuacion: " + this.getPuntuacion();

        elto.appendChild(nombre);
        elto.appendChild(puntuacion);
        
    }

    //Render jugada, nombre y puntuacion
    renderJugada(elto, jugadaElegida) {
        elto.innerHTML = "";
        let nombre = document.createElement("h2");
        nombre.innerText = this.getNombre();

        let eleccion = document.createElement("h3");
        eleccion.innerText = "Jugada: " + jugadaElegida.getTipo(); 

        let puntuacion = document.createElement("h4");
        puntuacion.innerText = "Puntuacion: " + this.getPuntuacion();


        //Debug
        console.log(this.#nombre + " " + jugadaElegida.getTipo() );  

        elto.appendChild(nombre);
        elto.appendChild(eleccion);
        elto.appendChild(puntuacion);
    }

    //Render del ganador del punto
    renderPunto(elto){
        elto.innerHTML = "";
        let nombre = document.createElement("h3");
        nombre.innerText = this.getNombre() + " gana el punto";

        elto.appendChild(nombre);
    }

    //Muestra en caso de empate
    renderEmpate(elto){
        elto.innerHTML = "";

        let empate = document.createElement("h3");
        empate.innerText = "Misma jugada, se empata el punto";

        elto.appendChild(empate);
    
    }

    renderGanador(elto) {
        elto.innerHTML = "";
        let nombre = document.createElement("h1");
        nombre.innerText = "El ganador es " + this.getNombre();

        elto.appendChild(nombre);
    }

    // getters y setters
    sumarPunto(){
        this.#puntuacion = this.#puntuacion + 1 ;
    }

    getJugada(){
        return this.#jugada;
    }
   
    getNombre(){
        return this.#nombre;
    }
    getPuntuacion(){
        return this.#puntuacion;
    }
    getJugada(){
        return this.#jugada;
    }
    setJugada(jugada){
        this.#jugada = jugada;
    }

    
}