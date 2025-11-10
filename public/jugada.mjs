export const numeroJugadas = 3;
export class Jugada{
    #tipo

    //Constructor de tipo 
    constructor(tipo) {
        this.#tipo = tipo; 
    }

    //Logica de la lucha, comparando todo
    luchaJugada(jugadaRival){
        let ganadora;
        let jugada = jugadaRival.getTipo();

        if(this.#tipo === ("piedra") && jugada === ("piedra")){
            ganadora = null;

        } else if(this.#tipo === ("piedra") && jugada === ("papel")){
            ganadora = 1;

        } else if(this.#tipo === ("piedra") && jugada === ("tijera")){
            ganadora = 1;

        } else if(this.#tipo === ("papel") && jugada === ("piedra")){
            ganadora = 0;

        } else if(this.#tipo === ("papel") && jugada === ("papel")){
            ganadora = null;

        } else if(this.#tipo === ("papel") && jugada === ("tijera")){
            ganadora = 1;

        } else if(this.#tipo === ("tijera") && jugada === ("piedra")){
            ganadora = 1;

        } else if(this.#tipo === ("tijera") && jugada === ("papel")){
            ganadora = 0;

        } else if(this.#tipo === ("tijera") && jugada === ("tijera")){
            ganadora = null;
        }

        return ganadora;
    }

    //Obtiene tipo
    getTipo() {
        return this.#tipo;
    }

}

// Exporta jugadas como objetos
export const jugadas = {
    "piedra": new Jugada("piedra"),
    "papel": new Jugada("papel"),
    "tijera": new Jugada("tijera")
};