

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

    //captando evento click del boton Guardar
    $btnGuardar.addEventListener("click", () => {
        
        //tomando los valores de los inputs escritos por el usuario
        const $inputNombre = document.querySelector(".input-nombre-ej-113").value;
        const $inputApellido = document.querySelector(".input-apellido-ej-113").value;
        const $inputEmail = document.querySelector(".input-email-ej-113").value;
        const $inputTelefono = document.querySelector(".input-telefono-ej-113").value;

        //llama a la funcion que valida los inputs
        validarInpupts($inputNombre, $inputApellido, $inputEmail, $inputTelefono);
        //console.log(flag);

        //si flag es true, ejecuta la logica del localStorage y sessionStorage
        if(flag){

            //crea un array en localStorage para almacenar usuarios
            const array = JSON.parse(localStorage.getItem("ListaUsuarios")) || [];

            //crea un array en sessionStorage para almacenar los usuarios que se creen
            //mientras el navegador este abierto
            const arraySession = JSON.parse(sessionStorage.getItem("UsuariosLogueados")) || [];
    
    
            //almacena datos en el array creado
            array.push({
                nombre: $inputNombre,
                apellido: $inputApellido,
                email: $inputEmail,
                telefono: $inputTelefono
            });
            //almacena datos en el array creado
            arraySession.push({
                nombre: $inputNombre,
                apellido: $inputApellido,
                email: $inputEmail,
                telefono: $inputTelefono
            });

            //guarda los datos en localStorage
            localStorage.setItem("ListaUsuarios", JSON.stringify(array));
            //guarda los datos en sessionStorage
            sessionStorage.setItem("UsuariosLogueados", JSON.stringify(arraySession));
    
            //console.log(localStorage);
    
            //extrae los datos de usuarios del sessionStorage
            const usuariosLogeados = JSON.parse(sessionStorage.getItem("UsuariosLogueados"));
    
            //extrae los datos de usuarios del localStorage
            const usuario = JSON.parse(localStorage.getItem("ListaUsuarios"));
    
            //console.log(usuario);
    
            //$resultado.innerHTML = `${usuario[i].nombre} - ${usuario[i].apellido} - ${usuario[i].email} - ${usuario[i].telefono}`;
    

            //muestra en el dom la tabla del localStorage
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
    
            //muestra en el DOM la tabla creada
            $resultado.innerHTML = tabla; 
            
            //llama a la funcion limpiaInputs para vaciar los inputs
            limpiaInputs();
         
            //console.log(sessionStorage);
    
            //muestra en el dom la tabla del sessionStorage
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

            //muestra en el DOM la tabla creada
            $session.innerHTML = tablaLogueados;
            
        }
    });

    //limpia los inputs del usuario
    const limpiaInputs = () => {
        document.querySelector(".input-nombre-ej-113").value = "";
        document.querySelector(".input-apellido-ej-113").value = "";
        document.querySelector(".input-email-ej-113").value = "";
        document.querySelector(".input-telefono-ej-113").value = "";
    }


    //capta el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //vacia el localStorage, limpia los inputs y borra las tablas del DOM 
        localStorage.clear();
        limpiaInputs();
        $resultado.innerHTML = "";
        $session.innerHTML = "";
    });




    





}


