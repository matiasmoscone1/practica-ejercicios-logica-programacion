
//116. Combinaciones de Suma: Dado un array de números y un valor objetivo, escribe una 
//función que encuentre todas las combinaciones de números en el array que suman 
//el valor objetivo.

//function combinacionesDeSuma(array, objetivo) {}

export default function combinacionSuma(inputNum, btnAgregar, btnLimpiar, arrayNum, inputCheck, btnCheck, resCheck, btnBuscar, resultado){

    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $arrayNum = document.querySelector(arrayNum);
    const $btnCheck = document.querySelector(btnCheck);
    const $resCheck = document.querySelector(resCheck);
    const $btnBuscar = document.querySelector(btnBuscar);
    const $resultado = document.querySelector(resultado);


    const nuevoArray = [];

    

    $btnAgregar.addEventListener("click", () => {
        const $inputNum = document.querySelector(inputNum).value;

        console.log($inputNum);

        nuevoArray.push($inputNum);

        $arrayNum.textContent = `[${nuevoArray}]`;
       
        /*
        let cont = 0;

        for(let i = 0; i <= arrayNum.lenght; i++){
            for(let j = 1; i < arrayNum.lengt; j++){
                if(arrayNum[i] + arrayNum[j] === $inputNum){
                    console.log(cont);
                }
            }
        }
        */

        
    

        document.querySelector(inputNum).value = "";
    });

    $btnBuscar.addEventListener("click", () => {
        const $inputNum = document.querySelector(inputNum).value;
        console.log(nuevoArray);
        let cont = 0;
        
        for(let i = 0; i <= arrayNum.lenght; i++){
            for(let j = 1; i < arrayNum.lengt; j++){
                if(arrayNum[i] + arrayNum[j] === $inputNum){
                    cont++;
                    console.log(cont);
                }
            }
        }

    });

    $btnCheck.addEventListener("click", () => {
        const $inputCheck = document.querySelector(inputCheck).value;

        $resCheck.textContent = `Numero a chequear: ${$inputCheck}`;

        document.querySelector(inputCheck).value = "";

    });

    

}



