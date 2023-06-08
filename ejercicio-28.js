


//28. Patrón de números ascendentes: 
//Escribe un programa que genere un patrón de números ascendentes en forma de triángulo.


export default function patronNumAscendentes(btnGenerar, btnLimpiar, resultado){

    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoPatron = document.querySelector(resultado);


    $btnGenerar.addEventListener("click", () => {

        let numFila = 5;
        let patron = "";

        for(let i = 1; i <= numFila; i++){
            let linea = '';
            for(let j = 1; j <= i; j++){
                linea += i;
            }
            patron += linea + '\n';
        }
        
        console.log(patron);

    });


    
}