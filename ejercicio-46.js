



//46. Crear una función que tome un número entero como parámetro y devuelva su 
//representación binaria.


export default function convertirDecimalABinario(inputNumero, btnConvertir, btnLimpiar, resultado){

    const $btnConvertir = document.querySelector(btnConvertir);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $btnConvertir.addEventListener("click", () => {
        const $inputNumero = document.querySelector(inputNumero).value;
    
        console.log($inputNumero);

    });




}







