

//113. LocalStorage y SessionStorage: 
//a. Crea una aplicación que almacene información en el localStorage y recupere
// los datos al recargar la página.
//b. Utiliza el sessionStorage para almacenar datos temporales que se borran al cerrar 
// la ventana del navegador.


export default function almacenamientoNavegador(btnGuardar, btnLimpiar, resultado){


    const $btnGuardar = document.querySelector(btnGuardar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //localStorage.clear();  

    $btnGuardar.addEventListener("click", () => {
        
        const $inputNombre = document.querySelector(".input-nombre-ej-113").value;
        const $inputApellido = document.querySelector(".input-apellido-ej-113").value;
        const $inputEmail = document.querySelector(".input-email-ej-113").value;
        const $inputTelefono = document.querySelector(".input-telefono-ej-113").value;

        
        localStorage.clear();

        const array = JSON.parse(localStorage.getItem("ListaUsuarios")) || [];


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


