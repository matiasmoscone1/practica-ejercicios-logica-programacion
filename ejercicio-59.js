

//59. Validación de tarjeta de crédito: Escribe una función que tome un número de tarjeta 
//de crédito como entrada y verifique si es un número de tarjeta de crédito válido 
//utilizando el algoritmo de Luhn.


export default function validacionTarjetaCredito(inputNro, btnValidar, btnLimpiar, resultado){

    //creando la expresion regular con el formato valido de las tarjetas
    const formato = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/

    //creando variables referenciales al DOM
    const $btnValidar = document.querySelector(btnValidar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    //Captando evento click del boton Validar
    $btnValidar.addEventListener("click", () => {

        //tomando el valor del input escrito por el usuario
        const $inputNro = document.querySelector(inputNro).value;


        //console.log($inputNro);

        //validando el input ingrsado a ver si coincide con la expresion regular.
        if(formato.test($inputNro)){
            //console.log("ASD");
            $resultado.textContent = "Formato Valido!";
        }else{
            //console.log("AAAAAAAAAA");
            $resultado.textContent = "Formato Invalido";
        }

    });

    //Captando evento click del evento Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpiando el resultado en el DOM y el input
        $resultado.textContent = " ";
        document.querySelector(inputNro).value = " ";
    });


}







