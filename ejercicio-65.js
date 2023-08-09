


//65. Teclas de acceso rápido: Crea una página con un div vacío. Al presionar una combinación
//de teclas específica (por ejemplo, Ctrl + Alt + K), agrega un mensaje dentro del div.


export default function teclaAccesoRapido(btnHabilitar, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnHabilitar = document.querySelector(btnHabilitar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    //Captando evento click del boton Habilitar 
    $btnHabilitar.addEventListener("click", () => {
        //captando tecla presionada
        document.addEventListener("keydown", (e) => {
            //logica para el acceso rapido
            if(e.ctrlKey  && e.altKey && e.code === "KeyB"){
                //console.log("Hola buenos dias!");
                //muestra resultado en DOM
                $resultado.textContent = "Hola buenos dias!";
            }
            //console.log(e);
        });

        //captando tecla presionada
        document.addEventListener("keydown", (e) => {
            //logica para el acceso rapido
            if(e.ctrlKey  && e.altKey && e.code === "KeyC"){
                //console.log("Chau buenas noches!");
                //muestra resutlado en DOM
                $resultado.textContent = "Chau buenas noches";
            }
            //console.log(e);
        });

       //captando tecla presionada
        document.addEventListener("keydown", (e) => {
            //logica para el acceso rapido
            if(e.ctrlKey  && e.altKey && e.code === "KeyH"){
                //crea objeto Date para despues mostrar la hora exacta en que se apreto las teclas
                const horaLocal = new Date();
                //console.log(`${horaLocal.getHours()}:${horaLocal.getMinutes()}:${horaLocal.getSeconds()}`);
                //muestra resutlado en el DOM
                $resultado.textContent = `${horaLocal.getHours()}:${horaLocal.getMinutes()}:${horaLocal.getSeconds()}`;
            }
            //console.log(e);
        });
    });

    //Captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpiando el DOM asignando al resultado una cadena con un espacio en blanco
        $resultado.textContent = " ";
    });

}


