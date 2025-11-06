export const jugadas = ["piedra", "papel", "tijera"]; 
export const numeroJugadas = 3;

export class Jugada{
    #tipo

    luchaJugadas(jugada){
        let ganadora;
        if(this.#tipo.equals("piedra") && jugada.equals("piedra")){
            ganadora = null;

        } else if(this.#tipo.equals("piedra") && jugada.equals("papel")){
            ganadora = 1;

        } else if(this.#tipo.equals("piedra") && jugada.equals("tijera")){
            ganadora = 1;

        } else if(this.#tipo.equals("papel") && jugada.equals("piedra")){
            ganadora = 0;

        } else if(this.#tipo.equals("papel") && jugada.equals("papel")){
            ganadora = null;

        } else if(this.#tipo.equals("papel") && jugada.equals("tijera")){
            ganadora = 1;

        } else if(this.#tipo.equals("tijera") && jugada.equals("piedra")){
            ganadora = 1;

        } else if(this.#tipo.equals("tijera") && jugada.equals("papel")){
            ganadora = 0;

        } else if(this.#tipo.equals("tijera") && jugada.equals("tijera")){
            ganadora = null;
        }

        return ganadora;
    }




}