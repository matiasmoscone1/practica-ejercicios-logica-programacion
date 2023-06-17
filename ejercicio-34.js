


//34. Contador de vocales: Desarrolla un programa que registre y muestre en la página HTML 
//la cantidad de veces que se han pulsado las vocales (a, e, i, o, u) en cualquier orden.


export default function contadorVocalesTeclado(btnMostrar, btnLimpiar, resultado){

    //Inicializando variables referenciales al DOM
    const $btnMostrar = document.querySelector(btnMostrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoVocales = document.querySelector(resultado);
    //Inicializando variable contador 
    let contador = 0;

    //Captando evento de tecla presionada cuando carga el DOM
    document.addEventListener("keyup", (e) => {
        //Ver si la tecla presionada matchea con alguna vocal, si matchea contador suma 1
        if(e.key === "a"|| e.key === "e" || e.key === "i" || e.key === "o" || e.key === "u" ||
        e.key === "A"|| e.key === "E" || e.key === "I" || e.key === "O" || e.key === "U"){
            contador += 1;
        }        
    });

    //Captando evento click del boton mostrar para mostrar el resultado en DOM
    $btnMostrar.addEventListener("click", () => {
        //console.log(contador);
        //Mostrando resultado en el DOM
        $resultadoVocales.innerHTML = `Las vocales presionadas fueron: ${contador}`;
    });

    //Captando evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpiando el DOM
        $resultadoVocales.innerHTML = "";
    });
    
}






