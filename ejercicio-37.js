


//37. Movimiento de un objeto: Diseña un programa que permita mover un objeto en la 
//página HTML utilizando las teclas de dirección (arriba, abajo, izquierda, derecha). 
//Cada vez que se presione una tecla de dirección, el objeto debe moverse en la dirección 
//correspondiente.


export default function moverPelota(btnJugar,btnStop,stage,bola){
    
    const $btnJugar = document.querySelector(btnJugar);    
    const $btnStop = document.querySelector(btnStop);
    const $stage = document.querySelector(stage);
    const $moverBola = document.querySelector(bola);
    let condicionalJuego = false;

    $btnJugar.addEventListener("click", () => {
        condicionalJuego = true;
    });
    $btnStop.addEventListener("click", () => {
        condicionalJuego = false;
    });

  
    document.addEventListener("keydown", (e) => {
        const ballStyle = getComputedStyle($moverBola); 
        const ballTop = parseInt(ballStyle.top); 
        const ballLeft = parseInt(ballStyle.left);
  
        if(condicionalJuego){
            switch(e.key){
                case "ArrowUp": $moverBola.style.top = `${ballTop - 2}px`;
                break;
                case "ArrowLeft": $moverBola.style.left = `${ballLeft - 2}px`; 
                break;
                case "ArrowDown": $moverBola.style.top = `${ballTop + 2}px`;
                break;
                case "ArrowRight":$moverBola.style.left = `${ballLeft + 2}px`; 
                break;
            }
            /*
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
            }*/
        }
    });


    
}





