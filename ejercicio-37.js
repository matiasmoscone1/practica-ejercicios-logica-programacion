


//37. Movimiento de un objeto: Diseña un programa que permita mover un objeto en la 
//página HTML utilizando las teclas de dirección (arriba, abajo, izquierda, derecha). 
//Cada vez que se presione una tecla de dirección, el objeto debe moverse en la dirección 
//correspondiente.

let x = 0, y = 0;
export default function moverPelota(bola){
    
    const $moverBola = document.querySelector(bola);

    document.addEventListener("keydown", (e) => {

        if(e.key === "ArrowUp"){
            y--;
        }
        if(e.key === "ArrowLeft"){
            x--;
        }
        if(e.key === "ArrowDown"){
            y++;
        }
        if(e.key === "ArrowRight"){
            x++;
        }

    });

    
}





