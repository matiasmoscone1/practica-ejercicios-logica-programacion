

//44. Crear una función que tome un array de strings como parámetro y devuelva 
//un nuevo array con solo las palabras que tienen 5 o más de 5 letras.



export default function filtrarPalabrasCincoLetras(btnFiltrar, btnLimpiar, textArea, resultado){

    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    
    $btnFiltrar.addEventListener("click", () => {
        const $textArea = document.querySelector(textArea).value;
        let nuevoArray = $textArea.split(" ");
        let arrayFiltrado = [];
        for(let i = 0; i < nuevoArray.length; i++){
            if(nuevoArray[i].length >= 5){
                arrayFiltrado.push(nuevoArray[i]);
            }
        }

        $resultado.innerHTML = `Las palabras filtradas son: ${arrayFiltrado.join(", ")}`;
        //console.log(arrayFiltrado);
    });


    $btnLimpiar.addEventListener("click", () => {
        $resultado.innerHTML = "";
        document.querySelector(textArea).value = "";
    });


}





