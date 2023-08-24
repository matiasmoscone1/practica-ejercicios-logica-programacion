

//73. Capta determinados tipos de inputs en el documento y los guarda en un conjunto.


export default function valorInputs(btnInicio, btnFinalizar){

    const $btnInicio = document.querySelector(btnInicio);
    const $btnFinalizar = document.querySelector(btnFinalizar);
    

    $btnInicio.addEventListener("click", () => {

        let guardaCaracteres;

        document.addEventListener("keyup", (e) => {
            
            console.log(e);

            if(e.target.tagName === "INPUT" && e.target.type === "password"){
                console.log("HOLA!");
            }
            
        });

    });





}





