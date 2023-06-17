


//34. Contador de vocales: Desarrolla un programa que registre y muestre en la página HTML 
//la cantidad de veces que se han pulsado las vocales (a, e, i, o, u) en cualquier orden.


export default function contadorVocalesTeclado(btnMostrar, btnLimpiar, resultado){

    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoVocales = document.querySelector(resultado);
    let contador = 0;

    document.addEventListener("keyup", (e) => {
        if(e.key === "a"|| e.key === "e" || e.key === "i" || e.key === "o" || e.key === "u" ||
        e.key === "A"|| e.key === "E" || e.key === "I" || e.key === "O" || e.key === "U"){
            contador += 1;
        }        
    });

    $btnMostrar.addEventListener("click", () => {
        //console.log(contador);
        $resultadoVocales.innerHTML = `Las vocales presionadas fueron: ${contador}`;
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultadoVocales.innerHTML = "";
    });
    
}






