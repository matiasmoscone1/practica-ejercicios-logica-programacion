

//113. LocalStorage y SessionStorage: 
//a. Crea una aplicación que almacene información en el localStorage y recupere
// los datos al recargar la página.
//b. Utiliza el sessionStorage para almacenar datos temporales que se borran al cerrar 
// la ventana del navegador.


export default function almacenamientoNavegador(btnGuardar, btnLimpiar, resultado, session){

    //creando variables referenciales al DOM
    const $btnGuardar = document.querySelector(btnGuardar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    const $session = document.querySelector(session);

    //localStorage.clear();  


    //creando variable bandera para validar usuarios o no
    let flag = false;

    //funcion que valida los inputs del usuario mediante regex
    const validarInpupts = (nombre, apellido, email, telefono) => {
        //expresiones regulares para validar datos
        const regNombreApellido = /^[a-zA-Z]{4,16}$/;
        const regEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        const regTelefono = /^[0-9]{8}$/;

        //si no cumple las 4 validaciones, muestra un error en pantalla hasta que esten 
        //correctamente los datos ingresados en los inputs
        if(regNombreApellido.test(nombre) && regNombreApellido.test(apellido)
        && regEmail.test(email) && regTelefono.test(telefono)){
            flag = true;
        }else{
            flag = false;
            $resultado.textContent = "Error: Los datos ingresados son incorrectos, verifique que cumplan las condiciones porfavor...";
            $session.textContent = "Error: Los datos ingresados son incorrectos, verifique que cumplan las condiciones porfavor...";
        }
    }

    
    $btnGuardar.addEventListener("click", () => {
        
        const $inputNombre = document.querySelector(".input-nombre-ej-113").value;
        const $inputApellido = document.querySelector(".input-apellido-ej-113").value;
        const $inputEmail = document.querySelector(".input-email-ej-113").value;
        const $inputTelefono = document.querySelector(".input-telefono-ej-113").value;

        validarInpupts($inputNombre, $inputApellido, $inputEmail, $inputTelefono);
        //console.log(flag);

        if(flag){

            const array = JSON.parse(localStorage.getItem("ListaUsuarios")) || [];

            const arraySession = JSON.parse(sessionStorage.getItem("UsuariosLogueados")) || [];
    
    
            array.push({
                nombre: $inputNombre,
                apellido: $inputApellido,
                email: $inputEmail,
                telefono: $inputTelefono
            });
    
            arraySession.push({
                nombre: $inputNombre,
                apellido: $inputApellido,
                email: $inputEmail,
                telefono: $inputTelefono
            });

            localStorage.setItem("ListaUsuarios", JSON.stringify(array));
    
            sessionStorage.setItem("UsuariosLogueados", JSON.stringify(arraySession));
    
            //console.log(localStorage);
    
            const usuariosLogeados = JSON.parse(sessionStorage.getItem("UsuariosLogueados"));
    
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
         
            console.log(sessionStorage);
    
            let tablaLogueados = `<table border={1}>
                <thead>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Email</td>
                    <td>Telefono</td>
                </thead>
                <tbody>
            `;

            for(let i = 0; i < usuariosLogeados.length; i++){
                tablaLogueados += `
                    <tr>
                        <td>${JSON.stringify(usuariosLogeados[i].nombre)}</td>
                        <td>${JSON.stringify(usuariosLogeados[i].apellido)}</td>
                        <td>${JSON.stringify(usuariosLogeados[i].email)}</td>
                        <td>${JSON.stringify(usuariosLogeados[i].telefono)}</td>
                    </tr>
                    `}

            tablaLogueados += `</tbody>
            </table>`;

            $session.innerHTML = tablaLogueados;
            
        }
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




    





}


