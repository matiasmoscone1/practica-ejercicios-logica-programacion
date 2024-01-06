
//116. Combinaciones de Suma: Dado un array de números y un valor objetivo, escribe una 
//función que encuentre todas las combinaciones de números en el array que suman 
//el valor objetivo.

//function combinacionesDeSuma(array, objetivo) {}

export default function combinacionSuma(inputNum, btnAgregar, btnLimpiar, arrayNum, inputCheck, btnCheck, resCheck, btnBuscar, resultado){

    //creando variables referenciales al DOM
    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $arrayNum = document.querySelector(arrayNum);
    const $btnCheck = document.querySelector(btnCheck);
    const $resCheck = document.querySelector(resCheck);
    const $btnBuscar = document.querySelector(btnBuscar);
    const $resultado = document.querySelector(resultado);

    //creando array vacio que almacenara los numeros del array creado por el usuario
    const nuevoArray = [];

    //creando una variable global que almacenara el numero similar al de las busqueda de sumas
    let variableGlobal = 0;

    //captando evento click del boton Agregar
    $btnAgregar.addEventListener("click", () => {
        //tomando el valor del input escrito por el usuario (el numero de array)
        const $inputNum = document.querySelector(inputNum).value;

        //console.log($inputNum);

        //agrega al array el numero agregado por el usuario en el input
        nuevoArray.push($inputNum);

        //muestra en el DOM el array creado
        $arrayNum.textContent = `[${nuevoArray}]`;
       
        //vacia el input despues de agregar el numero al array asi da pie a agregar otro numero
        document.querySelector(inputNum).value = "";
    });

    //captando evento click del boton Buscar
    $btnBuscar.addEventListener("click", () => {
        
        //console.log(variableGlobal);
        //console.log(nuevoArray);
        
        //creando variable contador que almacenara el numero de sumas pares posibles
        let cont = 0;
        
        //ciclo que recorre una matriz (array) de numeros y va comparando la suma de los numeros
        //que va iterando a ver si coincide con el numero ingresado en el input del usuario
        for(let i = 0; i <= nuevoArray.length; i++){
            for(let j = i + 1; j < nuevoArray.length; j++){
                //hace la comparativa de la suma con el numero
                if((parseInt(nuevoArray[i]) + parseInt(nuevoArray[j])) === parseInt(variableGlobal)){
                    //si es correcto, suma el contador en 1
                    cont++;
                }
            }
        }
        $resultado.textContent = `Las sumas que hay disponibles son: ${cont}`;
        //console.log(cont);

    });

    $btnCheck.addEventListener("click", () => {
        const $inputCheck = document.querySelector(inputCheck).value;

        variableGlobal = $inputCheck;

        $resCheck.textContent = `Numero a chequear: ${$inputCheck}`;

        document.querySelector(inputCheck).value = "";

    });

    $btnLimpiar.addEventListener("click", () => {
        document.querySelector(inputNum).value = "";
        document.querySelector(inputCheck).value = "";
        $resultado.textContent = "";
        $resCheck.textContent = "";
    });


}



