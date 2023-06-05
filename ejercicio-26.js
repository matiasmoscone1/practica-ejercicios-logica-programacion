


//26. Verificación de números perfectos: Escribe una función que
//determine si un número dado es un número perfecto.


//Un número perfecto es un número entero 
//positivo que es igual a la suma de sus divisores propios positivos.


export default function numeroPerfecto(numero, btn, resultado){

    const $btnNumeroPerfecto = document.querySelector(btn);
    const $resultadoNumeroPerfecto = document.querySelector(resultado);

    $btnNumeroPerfecto.addEventListener("click", () => {
        const $numeroInput = document.querySelector(numero).value;

        
        // numeroPerfecto = (2 ** ($numeroInput - 1)) * ((2 ** $numeroInput) - 1); 

        let sumaDivisores = 0;

        for(let i = 1; i <= $numeroInput/2; i++){
            if($numeroInput % i === 0){
                sumaDivisores += i;
            }
        }
        if(sumaDivisores === $numeroInput){
            console.log("es perfecto");
        }else{
            console.log("no es perfecto");
        }

        console.log(sumaDivisores);


    });



}