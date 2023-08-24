

//73. Capta determinados tipos de inputs en el documento y los guarda en una variable.


export default function valorInputs(btnInicio, btnFinalizar){

    //Creando variables referenciales al DOM
    const $btnInicio = document.querySelector(btnInicio);
    const $btnFinalizar = document.querySelector(btnFinalizar);
    

    //captando evento click del boton Inicio
    $btnInicio.addEventListener("click", () => {

        //creando variable que contendra las teclas presionadas en el input tipo password
        let guardaCaracteres = "";

        //creando funcion callback que pasa como parametro el evento
        const keyUp = (e) => {
            //verifica si tagName del evento es un input y si el tipo del input es "password"
            if(e.target.tagName === "INPUT" && e.target.type === "password"){
                //console.log("HOLA!");
                //guarda las teclas presionadas en la variable creada anteriormente
                guardaCaracteres += e.target.value;
            }
            //muestra en consola la cadena de caracteres presionados en el input tipo password
            console.log(guardaCaracteres);
        }

        //capta evento keyup del documento y le pasa como parametro la callback creada
        document.addEventListener("keyup", keyUp);


        //capta evento click del boton Finalizar
        $btnFinalizar.addEventListener("click", () => {
            //remueve el evento escuchado (en este caso el keyup captado)
            document.removeEventListener("keyup", keyUp);
            
        });

    });

   





}





