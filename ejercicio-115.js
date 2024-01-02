

//115. Escribe una funcion donde va a recibir una cadena de texto, donde va a recibir parentesis,
//llaves o corchetes y determinar si el orden de estos simbolos es valido, devuelve true si se estan
//devolviendo en el orden esperado y false si es invalido.
//orden: {}, [], (), ([{}])


export default function devsLeagueReto(input, btnAgregar, btnLimpiar ,almacenamiento, resultado){

    //creando variables referenciales al DOM
    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $almacenamiento = document.querySelector(almacenamiento);
    const $resutlado = document.querySelector(resultado);

    //creando array que almacenara todo el input del usuario y cadena vacia
    const stack = [];
    let cadena = "";
    //creando expresion regular para validar el input
    const validaInput = /^(\(\)|\{\}|\[\]|\(\[\{\}\]\))*$/;

    //mostrando en el DOM el valor de la cadena
    $almacenamiento.textContent = `Cadena: ${cadena}`;

    //captando evento click del boton Agregar
    $btnAgregar.addEventListener("click", () => {
        //tomando el valor del input del usuario
        const $caracter = document.querySelector(input).value;

        //metiendo en variable stack todo lo del input
        stack.push($caracter);

        //convirtiendo el array en una cadena para poder validarlo
        cadena = stack.join("");
    
        //Si valida con exito la condicion, muestra en el DOM el resultado esperado
        if(validaInput.test(cadena)){
            //console.log("Input validado con exito!!!");
            $resutlado.textContent = "Input validado con exito!!!";
            //sino, muestra que es invalido el input
        }else{
            //console.log("Input invalido...");
            $resutlado.textContent = "Input invalido...";
        }


        //console.log(cadena);

        $almacenamiento.textContent = `Cadena: ${cadena}`;

        document.querySelector(input).value = "";

    });

    $btnLimpiar.addEventListener("click", () => {
        cadena = " ";
        stack.length = 0;
        $almacenamiento.textContent = `Cadena: ${cadena}`;
    });

}








