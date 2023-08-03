


//62. Validador de formularios: Crea un validador de formularios que verifique diferentes 
//campos, como dirección de correo electrónico, contraseña segura, número de teléfono, etc.


export default function validarFormulario(btnValidar, btnLimpiar, nombre, apellido, email, fechaNac, resultado){

    const $btnValidar = document.querySelector(btnValidar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    const letra = /[a-zA-Z]+/;
    const numero = /[0-9]+/;
    const simbolo = /[\W_]+/;
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z-.]+\.[a-zA-Z]{3}$/;

    
    
    const validarNombre = (nom) => {
        if(numero.test(nom) || simbolo.test(nom) || nom.length < 3){
            console.log("Ingrese un nombre valido (solo letras)...");
        }else{
            console.log("Nombre valido!");
        }
    };
    
    const validarApellido = (ape) => {
        if(numero.test(ape) || simbolo.test(ape) || ape.length < 3){
            console.log("Ingrese un Apellido valido (solo letras)...");
        }else{
            console.log("Apellido valido!");
        }
    };

    const validarEmail = (ema) => {
        if(regEmail.test(ema)){
            console.log("Email valido!");
        }else{
            console.log("Ingrese un email valido (xxxx@xxxx.xxx)");
        }

    };


    $btnValidar.addEventListener("click", () => {
        const $nombre = document.querySelector(nombre).value;
        const $apellido = document.querySelector(apellido).value;
        const $email = document.querySelector(email).value;

        validarNombre($nombre);
        validarApellido($apellido);
        validarEmail($email);


    });


}



