


//65. Teclas de acceso rápido: Crea una página con un div vacío. Al presionar una combinación
//de teclas específica (por ejemplo, Ctrl + Alt + K), agrega un mensaje dentro del div.


export default function teclaAccesoRapido(btnHabilitar, btnLimpiar, resultado){


    const $btnHabilitar = document.querySelector(btnHabilitar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    $btnHabilitar.addEventListener("click", () => {
        document.addEventListener("keydown", (e) => {
            if(e.ctrlKey  && e.altKey && e.code === "KeyH"){
                console.log("Hola buenos dias!");
            }
            console.log(e);
        });

        document.addEventListener("keydown", (e) => {
            if(e.ctrlKey  && e.altKey && e.code === "KeyC"){
                console.log("Chau buenas noches!");
            }
            console.log(e);
        });

        document.addEventListener("keydown", (e) => {
            if(e.ctrlKey  && e.altKey && e.code === "KeyR"){
                //insertar reloj digital
            }
            console.log(e);
        });
    });



}


