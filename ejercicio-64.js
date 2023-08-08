


//64. Generador de tarjetas de presentación: Crea una aplicación que genere tarjetas 
//de presentación personalizadas a partir de la información proporcionada por el 
//usuario, como nombre, ocupación, información de contacto, etc.

export default function tarjetaPresentacion(btnGenerar, btnLimpiar, inputNombre, inputApellido, inputTelefono, inputEmail, inputOcupacion, resultado){

    //creando variables referenciales al DOM
    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    
    //captando evento click del boton Generar
    $btnGenerar.addEventListener("click", () => {
        //tomando el valor de los input escritos por el usuario
        const $inputNombre = document.querySelector(inputNombre).value;
        const $inputApellido = document.querySelector(inputApellido).value;
        const $inputTelefono = document.querySelector(inputTelefono).value;
        const $inputEmail = document.querySelector(inputEmail).value;
        const $inputOcupacion = document.querySelector(inputOcupacion).value;        

        //Mostrando el resultado en el DOM y creando la carta de presentacion.
        $resultado.innerHTML = `Hola soy ${$inputNombre} ${$inputApellido}, me dedico a 
        ${$inputOcupacion}. Me pueden contactar a traves de mi mail: ${$inputEmail} o a traves
        de mi telefono: ${$inputTelefono}. Saludos cordiales!`;
        
    });

    //Captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpia todos los inputs 
        document.querySelector(inputNombre).value = " ";
        document.querySelector(inputApellido).value = " ";
        document.querySelector(inputTelefono).value = " ";
        document.querySelector(inputEmail).value = " ";
        document.querySelector(inputOcupacion).value = " ";   
        //limpia el resultado en el DOM
        $resultado.innerHTML = " ";        
    });


}


