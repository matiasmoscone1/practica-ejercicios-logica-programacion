

//74. Lo mismo que el ejercicio 73 pero esta vez cuando se envie el formulario de carga
//que guarde el valor del input de tipo contraseña. (no todas las letras presionadas)


export default function valorInputsFormulario(btnEnviar){


    const $btnEnviar = document.querySelector(btnEnviar);

    const keyUp = (e) => {

        //console.log(e);

        if(e.target.form.tagName === "form"){
            console.log(e);
        }

    

    }


    $btnEnviar.addEventListener("click", (e) => {
        e.preventDefault();


    });


    document.addEventListener("keyup", keyUp);

    
    
}







