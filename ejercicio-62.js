


//62. Validador de formularios: Crea un validador de formularios que verifique diferentes 
//campos, como dirección de correo electrónico, contraseña segura, número de teléfono, etc.


export default function validarFormulario(btnValidar, btnLimpiar, nombre, apellido, email, fechaNac, resultado){

    const $btnValidar = document.querySelector(btnValidar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    const letra = /[a-zA-Z]+/;
    const numero = /[0-9]+/;
    const simbolo = /[\W_]+/;

    const validarNombre = (nom) => {
        if(numero.test(nom) || numero.test(simbolo)){
            console.log("Ingrese un nombre valido (solo letras)...");
        }else{
            console.log("Nombre valido!");
        }
    }


    $btnValidar.addEventListener("click", () => {

        validarNombre(document.querySelector(nombre).value);



    });


}



