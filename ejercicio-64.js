


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


        $resultado.innerHTML = `Hola soy ${$inputNombre} ${$inputApellido}, me dedico a 
        ${$inputOcupacion}. Me pueden contactar a traves de mi mail: ${$inputEmail} o a traves
        de mi telefono: ${$inputTelefono}. Saludos cordiales!`;
        
    });

    $btnLimpiar.addEventListener("click", () => {
        document.querySelector(inputNombre).value = " ";
        document.querySelector(inputApellido).value = " ";
        document.querySelector(inputTelefono).value = " ";
        document.querySelector(inputEmail).value = " ";
        document.querySelector(inputOcupacion).value = " ";   
        $resultado.innerHTML = " ";        
    });


}


