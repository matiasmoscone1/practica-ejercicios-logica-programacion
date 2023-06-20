


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
        const stageRect = $stage.getBoundingClientRect();

        const stageTop = stageRect.top;
        const stageLeft = stageRect.left;
        const stageBottom = stageRect.bottom - $moverBola.offsetHeight;
        const stageRight = stageRect.right - $moverBola.offsetWidth;
        
        //console.log(ballTop);
        //console.log(ballLeft);

        console.log(ballTop);
        console.log(stageTop);
        if(condicionalJuego){
            e.preventDefault();
            switch(e.key){
                case "ArrowUp": 
                    if(ballTop > stageTop && ballTop > 4346){
                        $moverBola.style.top = `${ballTop - 2}px`;
                    }
                    break;
                case "ArrowLeft": 
                    if(ballLeft > stageLeft){
                        $moverBola.style.left = `${ballLeft - 2}px`; 
                    }
                    break;
                case "ArrowDown": 
                    if(ballTop > stageBottom && ballTop < 4476){
                        $moverBola.style.top = `${ballTop + 2}px`;
                    }
                    break;
                case "ArrowRight":
                    if(ballLeft < stageRight){
                        $moverBola.style.left = `${ballLeft + 2}px`; 
                    }
                    break;
            }
            
        }
    });
}





