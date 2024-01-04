
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

    let cont = 0;
    

    $btnAgregar.addEventListener("click", () => {
        const $inputNum = document.querySelector(inputNum).value;

        console.log($inputNum);

        nuevoArray.push($inputNum);

        $arrayNum.textContent = `[${nuevoArray}]`;
        
        let i = 0;

        const cantidadSumas = nuevoArray.map((num) => {
            if((num + num[i]) === 10){
                cont++; 
            }
            i++;
            return cont;
        })
        $btnBuscar.addEventListener("click", () => {
            console.log(cantidadSumas);
        });

        document.querySelector(inputNum).value = "";
    });

    $btnBuscar.addEventListener("click", () => {
        console.log(nuevoArray);
    });

    $btnCheck.addEventListener("click", () => {
        const $inputCheck = document.querySelector(inputCheck).value;

        $resCheck.textContent = `Numero a chequear: ${$inputCheck}`;

        document.querySelector(inputCheck).value = "";

    });

    

}



