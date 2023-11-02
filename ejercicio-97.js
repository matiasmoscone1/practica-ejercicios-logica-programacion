
//97. Escribe una función que tome una matriz de palabras y una palabra como argumento. 
//Utiliza filter para devolver una nueva matriz que solo contenga palabras sean iguales 
//al argumento.


export default function filtraPalabraConcreta(textArea, input, btnFiltrar, btnLimpiar, resultado){

    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    const filtrarMatriz = (arr, palabra) => {
        const arrayReducido = arr.reduce((acc, pal) => {
            if(pal === palabra){
                acc.push(pal);
            }
        }, []);
        return arrayReducido;
    }

    $btnFiltrar.addEventListener("click", () => {
        const $textArea = document.querySelector(textArea).value;
        const $input = document.querySelector(input).value;
    
        const arrayTexto = $textArea.split(" ");

        const res = filtrarMatriz(arrayTexto, $input);

        console.log(res);
    });


}


