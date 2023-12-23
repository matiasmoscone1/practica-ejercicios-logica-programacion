

//113. LocalStorage y SessionStorage: 
//a. Crea una aplicación que almacene información en el localStorage y recupere
// los datos al recargar la página.
//b. Utiliza el sessionStorage para almacenar datos temporales que se borran al cerrar 
// la ventana del navegador.


export default function almacenamientoNavegador(btnGuardar, btnLimpiar, resultado, session){


    const $btnGuardar = document.querySelector(btnGuardar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    const $session = document.querySelector(session);

    //localStorage.clear();  

    $btnGuardar.addEventListener("click", () => {
        
        const $inputNombre = document.querySelector(".input-nombre-ej-113").value;
        const $inputApellido = document.querySelector(".input-apellido-ej-113").value;
        const $inputEmail = document.querySelector(".input-email-ej-113").value;
        const $inputTelefono = document.querySelector(".input-telefono-ej-113").value;


        const array = JSON.parse(localStorage.getItem("ListaUsuarios")) || [];


        array.push({
            nombre: $inputNombre,
            apellido: $inputApellido,
            email: $inputEmail,
            telefono: $inputTelefono
        });

        localStorage.setItem("ListaUsuarios", JSON.stringify(array));

        sessionStorage.setItem("UsuariosLogueados", JSON.stringify(array));

        //console.log(localStorage);


        const usuario = JSON.parse(localStorage.getItem("ListaUsuarios"));

        console.log(usuario);

        //$resultado.innerHTML = `${usuario[i].nombre} - ${usuario[i].apellido} - ${usuario[i].email} - ${usuario[i].telefono}`;

        let tabla = `<table border={1}>
            <thead>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>Email</td>
                <td>Telefono</td>
            </thead>
            <tbody>
        `;

        for(let i = 0; i < usuario.length; i++){        
            tabla += `
                <tr>
                    <td>${usuario[i].nombre}</td>
                    <td>${usuario[i].apellido}</td>
                    <td>${usuario[i].email}</td>
                    <td>${usuario[i].telefono}</td>
                </tr>
        `}

        tabla += `
        </tbody>
        </table>` 

        $resultado.innerHTML = tabla; 
        
        limpiaInputs();
     

        
    });


    const limpiaInputs = () => {
        document.querySelector(".input-nombre-ej-113").value = "";
        document.querySelector(".input-apellido-ej-113").value = "";
        document.querySelector(".input-email-ej-113").value = "";
        document.querySelector(".input-telefono-ej-113").value = "";
    }



    $btnLimpiar.addEventListener("click", () => {
        localStorage.clear();
        limpiaInputs();
        $resultado.innerHTML = "";
    });




    //console.log(sessionStorage);





}


