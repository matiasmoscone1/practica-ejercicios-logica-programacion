

//115. Escribe una funcion donde va a recibir una cadena de texto, donde va a recibir parentesis,
//llaves o corchetes y determinar si el orden de estos simbolos es valido, devuelve true si se estan
//devolviendo en el orden esperado y false si es invalido.
//orden: {}, [], (), ([{}])


export default function devsLeagueReto(input, btnAgregar, almacenamiento, btnPrueba, btnFrenar, resultado){

    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnPrueba = document.querySelector(btnPrueba);
    const $btnFrenar = document.querySelector(btnFrenar);
    const $almacenamiento = document.querySelector(almacenamiento);
    const $resutlado = document.querySelector(resultado);

    const stack = [];

    $btnPrueba.addEventListener("click", () => {

        
        

        console.log($caracter);


    });

    $btnAgregar.addEventListener("click", () => {
        const $caracter = document.querySelector(input).value;

        stack.push($caracter);
        console.log(stack);


    });



}








