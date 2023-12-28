

//115. Escribe una funcion donde va a recibir una cadena de texto, donde va a recibir parentesis,
//llaves o corchetes y determinar si el orden de estos simbolos es valido, devuelve true si se estan
//devolviendo en el orden esperado y false si es invalido.
//orden: {}, [], (), ([{}])


export default function devsLeagueReto(input, caracter, almacenamiento, btnPrueba, btnFrenar, resultado){


    const $btnPrueba = document.querySelector(btnPrueba);
    const $btnFrenar = document.querySelector(btnFrenar);


    $btnPrueba.addEventListener("click", () => {

        const $caracter = document.querySelector(caracter).value;
        const $input = document.querySelector(input).value;

        console.log($caracter);


    });



}








