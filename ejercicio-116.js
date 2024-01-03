
//116. Combinaciones de Suma: Dado un array de números y un valor objetivo, escribe una 
//función que encuentre todas las combinaciones de números en el array que suman 
//el valor objetivo.

//function combinacionesDeSuma(array, objetivo) {}

export default function combinacionSuma(inputNum, btnAgregar, btnLimpiar, arrayNum, btnBuscar, resultado){

    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $arrayNum = document.querySelector(arrayNum);
    const $btnBuscar = document.querySelector(btnBuscar);
    const $resultado = document.querySelector(resultado);


    $btnAgregar.addEventListener("click", () => {
        const $inputNum = document.querySelector(inputNum).value;

        console.log($inputNum);

        const nuevoArray = [];

        nuevoArray.push($inputNum);

        $arrayNum.textContent = `[${nuevoArray}]`;

        document.querySelector(inputNum).value = "";
    });




}



