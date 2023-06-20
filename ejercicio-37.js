


//37. Movimiento de un objeto: Diseña un programa que permita mover un objeto en la 
//página HTML utilizando las teclas de dirección (arriba, abajo, izquierda, derecha). 
//Cada vez que se presione una tecla de dirección, el objeto debe moverse en la dirección 
//correspondiente.


export default function moverPelota(stage,bola){
    
    const $stage = document.querySelector(stage);
    const $moverBola = document.querySelector(bola);

    document.addEventListener("keydown", (e) => {
        const ballStyle = getComputedStyle($moverBola); 
        const ballTop = parseInt(ballStyle.top); 
        const ballLeft = parseInt(ballStyle.left);
    
        if(e.key === "ArrowUp"){
            $moverBola.style.top = `${ballTop - 2}px`; 
        }
        if(e.key === "ArrowLeft"){
            $moverBola.style.left = `${ballLeft - 2}px`; 
        }
        if(e.key === "ArrowDown"){
            $moverBola.style.top = `${ballTop + 2}px`;
        }
        if(e.key === "ArrowRight"){
            $moverBola.style.left = `${ballLeft + 2}px`; 
        }

    });

    
}





