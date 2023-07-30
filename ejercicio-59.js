

//59. Validación de tarjeta de crédito: Escribe una función que tome un número de tarjeta 
//de crédito como entrada y verifique si es un número de tarjeta de crédito válido 
//utilizando el algoritmo de Luhn.


export default function validacionTarjetaCredito(inputNro, btnValidar, btnLimpiar, resultado){

    const formato = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/

    const $btnValidar = document.querySelector(btnValidar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    $btnValidar.addEventListener("click", () => {

        const $inputNro = document.querySelector(inputNro).value;


        //console.log($inputNro);

        if(formato.test($inputNro)){
            //console.log("ASD");
            $resultado.textContent = "Formato Valido!";
        }else{
            //console.log("AAAAAAAAAA");
            $resultado.textContent = "Formato Invalido";
        }

    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = " ";
        document.querySelector(inputNro).value = " ";
    });


}







