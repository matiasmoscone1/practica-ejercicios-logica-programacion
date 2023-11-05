
//97. Escribe una función que tome una matriz de palabras y una palabra como argumento. 
//Utiliza filter para devolver una nueva matriz que solo contenga palabras sean iguales 
//al argumento. CON REDUCE


export default function filtraPalabraConcreta(textArea, input, btnFiltrar, btnLimpiar, resultado){

    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    const filtrarMatriz = (arr, palabra) => {
        
        const arrayReducido = arr.reduce((acc, pal) => {
            if(pal === palabra){
                acc.push(pal);
            }
            return acc;
        }, []);
        return arrayReducido;

        //return arr.map((pal) => pal === palabra);
            
    }

    $btnFiltrar.addEventListener("click", () => {
        const $textArea = document.querySelector(textArea).value;
        const $input = document.querySelector(input).value;
    
        const arrayTexto = $textArea.split(" ");

        const res = filtrarMatriz(arrayTexto, $input);

        $resultado.textContent = `El array con palabras filtradas es: ${res}`;
        //console.log(res);
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
        document.querySelector(input).value = "";
        document.querySelector(textArea).value = "";
    })





}


