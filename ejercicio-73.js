

//73. Capta determinados tipos de inputs en el documento y los guarda en una variable.


export default function valorInputs(btnInicio, btnFinalizar){

    const $btnInicio = document.querySelector(btnInicio);
    const $btnFinalizar = document.querySelector(btnFinalizar);
    

    $btnInicio.addEventListener("click", () => {

        let guardaCaracteres = "";

        const keyUp = (e) => {
            if(e.target.tagName === "INPUT" && e.target.type === "password"){
                //console.log("HOLA!");
                guardaCaracteres += e.target.value;
            }
            console.log(guardaCaracteres);
        }

        document.addEventListener("keyup", keyUp);
        
    });

    $btnFinalizar.addEventListener("click", () => {
        document.removeEventListener("keyup", keyUp);

    });





}





