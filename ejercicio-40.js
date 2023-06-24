
//40. Implementa un juego de "Simon Says" donde el programa muestra un mensaje en la consola 
//y el jugador debe repetirlo presionando las teclas correspondientes.


export default function simonSays(btnJugar, btnStop, letraSimon){

    const $btnJugar = document.querySelector(btnJugar);
    const $btnStop = document.querySelector(btnStop);
    let juegoActivo = false;
    const $letraSimon = document.querySelector(letraSimon);
    


    $btnJugar.addEventListener("click", () => {
        juegoActivo = true;
        const contenedorLetras = ["A","B","C","D","E","F","G","H","I","J","K","M","N","L","O",
        "P","Q","R","S","T","X","Y","W","Z"];

        let letraGenerada = Math.random(0, contenedorLetras.length) * contenedorLetras.length;
        if(juegoActivo){
            letraGenerada = contenedorLetras[Math.floor(letraGenerada)];
            console.log(letraGenerada);
            //$letraSimon.textContent = `${letraSimon}`;

        }

    });
    
    




    
}




