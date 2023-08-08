


//65. Teclas de acceso rápido: Crea una página con un div vacío. Al presionar una combinación
//de teclas específica (por ejemplo, Ctrl + Alt + K), agrega un mensaje dentro del div.


export default function teclaAccesoRapido(btnHabilitar, btnLimpiar, resultado){


    const $btnHabilitar = document.querySelector(btnHabilitar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    $btnHabilitar.addEventListener("click", () => {
        document.addEventListener("keypress", (e) => {
            if(e.key === "Control" && e.key === "Alt" && e.key === "H"){
                console.log("Hola buenos dias!");
            }
            console.log(e);
        });


    });



}


