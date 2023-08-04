


//62. Validador de formularios: Crea un validador de formularios que verifique diferentes 
//campos, como dirección de correo electrónico, contraseña segura, número de teléfono, etc.


export default function validarFormulario(btnValidar, btnLimpiar, nombre, apellido, email, fechaNac, resultadoNom, resultadoApe, resultadoEma, resultadoFech){

    const $btnValidar = document.querySelector(btnValidar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoNom = document.querySelector(resultadoNom);
    const $resultadoApe = document.querySelector(resultadoApe);
    const $resultadoEma = document.querySelector(resultadoEma);
    const $resultadoFech = document.querySelector(resultadoFech);



    const numero = /[0-9]+/;
    const simbolo = /[\W_]+/;
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z-.]+\.[a-zA-Z]{3}$/;
    const regFecha = /^\d{4}-\d{2}-\d{2}$/;
    
    
    const validarNombre = (nom) => {
        if(numero.test(nom) || simbolo.test(nom) || nom.length < 3){
            //console.log("Ingrese un nombre valido (solo letras)...");
            $resultadoNom.textContent = "Ingrese un nombre valido (solo letras)...";
        }else{
            //console.log("Nombre valido!");
            $resultadoNom.textContent = "Nombre valido!";
        }
    };
    
    const validarApellido = (ape) => {
        if(numero.test(ape) || simbolo.test(ape) || ape.length < 3){
            //console.log("Ingrese un Apellido valido (solo letras)...");
            $resultadoApe.textContent = "Ingrese un Apellido valido (solo letras)...";
        }else{
            //console.log("Apellido valido!");
            $resultadoApe.textContent = "Apellido valido!";
        }
    };

    const validarEmail = (ema) => {
        if(regEmail.test(ema)){
            //console.log("Email valido!");
            $resultadoEma.textContent = "Email valido!";
        }else{
            //console.log("Ingrese un email valido (xxxx@xxxx.xxx)");
            $resultadoEma.textContent = "Ingrese un email valido (xxxx@xxxx.xxx)";
        }
    };
    
    const validarFecha = (fecha) => {
        console.log(fecha);
        if(regFecha.test(fecha)){
            //console.log("Fecha valida!");
            $resultadoFech.textContent = "Fecha valida!"
        }else{
            //console.log("Ingrese una fecha valida (xx/xx/xxxx)");
            $resultadoFech.textContent = "Ingrese una fecha valida (xx/xx/xxxx)";
        }
    };


    $btnValidar.addEventListener("click", () => {
        const $nombre = document.querySelector(nombre).value;
        const $apellido = document.querySelector(apellido).value;
        const $email = document.querySelector(email).value;
        const $fecha = document.querySelector(fechaNac).value;

        validarNombre($nombre);
        validarApellido($apellido);
        validarEmail($email);
        validarFecha($fecha);


    });

    $btnLimpiar.addEventListener("click", () => {
        $resultadoNom.textContent = " ";
        $resultadoApe.textContent = " ";
        $resultadoEma.textContent = " ";
        $resultadoFech.textContent = " ";
        document.querySelector(nombre).value = " ";
        document.querySelector(apellido).value = " ";
        document.querySelector(email).value = " ";
        document.querySelector(fecha).value = " ";
    });



}



