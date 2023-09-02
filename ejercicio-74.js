

//74. Lo mismo que el ejercicio 73 pero esta vez cuando se envie el formulario de carga
//que guarde el valor del input de tipo contraseña. (no todas las letras presionadas)


export default function valorInputsFormulario(btnEnviar){


    const $btnEnviar = document.querySelector(btnEnviar);

    let guardaCaracteres = "";


    const keyUp = (e) => {

        //console.log(e);

        if(e.target.form.tagName === "FORM" && e.target.type === "password"){
            guardaCaracteres = e.target.value;
            //console.log(guardaCaracteres);
        }
    }


    $btnEnviar.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(guardaCaracteres);

        const borrarInputs = document.querySelectorAll("input");

        borrarInputs.forEach((input) => {
            input.value = "";
        })

        document.removeEventListener("keyup", keyUp);


    });


    document.addEventListener("keyup", keyUp);
    
}







