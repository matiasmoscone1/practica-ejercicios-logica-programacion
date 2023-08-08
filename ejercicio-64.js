


//64. Generador de tarjetas de presentación: Crea una aplicación que genere tarjetas 
//de presentación personalizadas a partir de la información proporcionada por el 
//usuario, como nombre, ocupación, información de contacto, etc.

export default function tarjetaPresentacion(btnGenerar, btnLimpiar, inputNombre, inputApellido, inputTelefono, inputEmail, inputOcupacion, resultado){


    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    
    $btnGenerar.addEventListener("click", () => {
        const $inputNombre = document.querySelector(inputNombre).value;
        const $inputApellido = document.querySelector(inputApellido).value;
        const $inputTelefono = document.querySelector(inputTelefono).value;
        const $inputEmail = document.querySelector(inputEmail).value;
        const $inputOcupacion = document.querySelector(inputOcupacion).value;        


        


    });

}


