

//115. Escribe una funcion donde va a recibir una cadena de texto, donde va a recibir parentesis,
//llaves o corchetes y determinar si el orden de estos simbolos es valido, devuelve true si se estan
//devolviendo en el orden esperado y false si es invalido.
//orden: {}, [], (), ([{}])


export default function devsLeagueReto(input, btnAgregar, btnLimpiar ,almacenamiento, resultado){

    const $btnAgregar = document.querySelector(btnAgregar);
    
    const $btnLimpiar = document.querySelector(btnLimpiar);
    
    const $almacenamiento = document.querySelector(almacenamiento);
    const $resutlado = document.querySelector(resultado);

    const stack = [];
    let cadena = "";
    const validaInput = /^(\(\)|\{\}|\[\]|\(\[\{\}\]\))*$/;

    $almacenamiento.textContent = `Cadena: ${cadena}`;

    $btnAgregar.addEventListener("click", () => {
        const $caracter = document.querySelector(input).value;


        stack.push($caracter);

        cadena = stack.join("");
    
        if(validaInput.test(cadena)){
            console.log("Input validado con exito!!!");
            $resutlado.textContent = "Input validado con exito!!!";
        }else{
            console.log("Input invalido...");
            $resutlado.textContent = "Input invalido...";
        }


        console.log(cadena);

        $almacenamiento.textContent = `Cadena: ${cadena}`;

        document.querySelector(input).value = "";

    });

    $btnLimpiar.addEventListener("click", () => {
        cadena = " ";
        stack.length = 0;
        $almacenamiento.textContent = `Cadena: ${cadena}`;
    });

}








