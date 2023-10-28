
//94. Filtrar palabras largas: Escribe una función que tome una cadena de palabras y filtre 
//las palabras que tienen más de n caracteres.

export default function filtrarPalabrasLargas(textArea, input, btnFiltrar, btnLimpiar, resultado){


    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    

    const filtraPalabras = (texto, num) => {

        const nuevoArray = texto.split(" ");
        //console.log(nuevoArray);

        return nuevoArray.map((pal) => pal > num);
        
    }


    $btnFiltrar.addEventListener("click", () => {

        const $textArea = document.querySelector(textArea).value;
        const $inputNum = document.querySelector(input).value;
            
        const res = filtraPalabras($textArea, $inputNum);

        console.log(res);
    });






}


