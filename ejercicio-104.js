

//104. Almacenar y recuperar datos en localStorage: Crea una página con dos campos de texto 
//y un botón. El objetivo es permitir que el usuario escriba su nombre y edad, y al hacer 
//clic en el botón, los datos se almacenen en localStorage. Luego, al recargar la página, muestra los datos almacenados.


export default function almacenamientoLocalStorage(inputNombre, inputApellido, inputEmail, btnEnviar, btnTraerInfo, btnLimpiar){


    const $btnEnviar = document.querySelector(btnEnviar);
    const $btnTraerInfo = document.querySelector(btnTraerInfo);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    

    $btnEnviar.addEventListener("click", () => {

        console.log("asd");

    });



}

