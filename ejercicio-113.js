

//113. LocalStorage y SessionStorage: 
//a. Crea una aplicación que almacene información en el localStorage y recupere
// los datos al recargar la página.
//b. Utiliza el sessionStorage para almacenar datos temporales que se borran al cerrar 
// la ventana del navegador.


export default function almacenamientoNavegador(btnGuardar, btnLimpiar){


    const $btnGuardar = document.querySelector(btnGuardar);
    const $btnLimpiar = document.querySelector(btnLimpiar);


    //localStorage.clear();  

    $btnGuardar.addEventListener("click", () => {
        
        const $inputNombre = document.querySelector(".input-nombre-ej-113");
        const $inputApellido = document.querySelector(".input-apellido-ej-113");
        const $inputEmail = document.querySelector(".input-email-ej-113");
        const $inputTelefono = document.querySelector(".input-telefono-ej-113");

        

        const array = [];


        array.push({
            nombre: $inputNombre,
            apellido: $inputApellido,
            email: $inputEmail,
            telefono: $inputTelefono
        });

        localStorage.setItem("ListaUsuarios", JSON.stringify(array));

        console.log(localStorage);

    });




}


