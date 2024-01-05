
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

    let variableGlobal = 0;

    $btnAgregar.addEventListener("click", () => {
        const $inputNum = document.querySelector(inputNum).value;

        console.log($inputNum);

        nuevoArray.push($inputNum);

        $arrayNum.textContent = `[${nuevoArray}]`;
       

        document.querySelector(inputNum).value = "";
    });

    $btnBuscar.addEventListener("click", () => {
        
        console.log(variableGlobal);
        console.log(nuevoArray);
        let cont = 0;
        
        
        for(let i = 0; i <= nuevoArray.length; i++){
            for(let j = i + 1; j < nuevoArray.length; j++){
                if((parseInt(nuevoArray[i]) + parseInt(nuevoArray[j])) === parseInt(variableGlobal)){
                    cont++;
                }
            }
        }
        console.log(cont);

    });

    $btnCheck.addEventListener("click", () => {
        const $inputCheck = document.querySelector(inputCheck).value;

        variableGlobal = $inputCheck;

        $resCheck.textContent = `Numero a chequear: ${$inputCheck}`;

        document.querySelector(inputCheck).value = "";

    });

    

}



