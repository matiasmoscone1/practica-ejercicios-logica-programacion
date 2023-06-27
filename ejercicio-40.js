
//40. Implementa un juego de "Simon Says" donde el programa muestra un mensaje en la consola 
//y el jugador debe repetirlo presionando las teclas correspondientes.


export default function simonSays(btnJugar, btnStop, contadorSimonSays, letraSimon){

    const $btnJugar = document.querySelector(btnJugar);
    const $btnStop = document.querySelector(btnStop);
    let juegoActivo = false;
    const $letraSimon = document.querySelector(letraSimon);
    const $resultadoContador = document.querySelector(contadorSimonSays);
    

    $btnJugar.addEventListener("click", () => {
        juegoActivo = true;
        const contenedorLetras = ["A","B","C","D","E","F","G","H","I","J","K","M","N","L","O",
        "P","Q","R","S","T","X","Y","W","Z"];

        let letraGenerada = Math.random(0, contenedorLetras.length) * contenedorLetras.length;
       
         if(juegoActivo){
            let contador = 0;
            
            letraGenerada = contenedorLetras[Math.floor(letraGenerada)];
            
            setInterval(() => {
                $letraSimon.textContent = "";    
            }, 3000);
        
            document.addEventListener("keydown", (e) => {
                if(e.key.toUpperCase() === letraGenerada){
                    $letraSimon.textContent = `BIEN`;
                    contador += 1;
                    $resultadoContador.textContent = `Puntaje: ${contador}`;
                    while(e.key.toUpperCase() === letraGenerada){              
                        let letraAleatoria = Math.floor(Math.random() * 23);  
                        letraGenerada = contenedorLetras[letraAleatoria];
                        $letraSimon.textContent = `${letraGenerada}`;
                    }
                    console.log(letraGenerada);
                }else{
                    $letraSimon.innerHTML = `Letra equivocada... PRESIONE NUEVAMENTE JUGAR`;
                    contador = 0;
                    $resultadoContador.textContent = `Puntaje: ${contador}`;
                }
               
            });
            console.log(letraGenerada);
            $letraSimon.textContent = `${letraGenerada}`;
           
        }

    });
    
    $btnStop.addEventListener("click", () => {
        juegoActivo = false;
        $letraSimon.innerHTML = "";
    });  

    
}




