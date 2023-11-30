

//104. Almacenar y recuperar datos en localStorage: Crea una página con dos campos de texto 
//y un botón. El objetivo es permitir que el usuario escriba su nombre y edad, y al hacer 
//clic en el botón, los datos se almacenen en localStorage. Luego, al recargar la página, muestra los datos almacenados.


export default function almacenamientoLocalStorage(inputNombre, inputApellido, inputEmail, btnEnviar, btnTraerInfo, btnLimpiar, resultado){


    //creando variables referenciales al DOM
    const $btnEnviar = document.querySelector(btnEnviar);
    const $btnTraerInfo = document.querySelector(btnTraerInfo);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    //captando evento click del boton Enviar
    $btnEnviar.addEventListener("click", (e) => {
        //previene el comportamiento por default al enviar dentro de un form, ya que sino se envia
        //la info y se recarga el navegador por el "submit"
        e.preventDefault();
        //tomando valores escritos por el usuario en los inputs
        const $inputNombre = document.querySelector(inputNombre).value;
        const $inputApellido = document.querySelector(inputApellido).value;
        const $inputEmail = document.querySelector(inputEmail).value;
        
        
        //creando/obteniendo lista de usuarios que se almacenara en localstorage
        const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];


        //console.log(usuarios);
        //agrega un objeto usuario a la lista de usuarios, y le pasa las propiedades caracteristicas
        usuarios.push({
            Nombre: $inputNombre,
            Apellido: $inputApellido,
            Email: $inputEmail
        });

        //guarda la lista de usuarios como "Usuarios" en el localStorage
        localStorage.setItem("Usuarios", JSON.stringify(usuarios))
        

        //console.log(JSON.parse(localStorage.getItem("Usuarios")));

        //limpia el valor de los inputs una vez que se haya guardado en el localStorage la info
        document.querySelector(inputNombre).value = "";
        document.querySelector(inputApellido).value = "";
        document.querySelector(inputEmail).value = "";
        
    });


    //captando evento click del boton TraerInfo
    $btnTraerInfo.addEventListener("click", () => {
        //crea una variable que almacena la lista de usuarios
        const listaUsuarios = JSON.parse(localStorage.getItem("Usuarios"));


        //console.log(listaUsuarios);

        //crea otra variable que genera una tabla en el DOM
        let tablaUsuarios = `<table border={1}>
        <thead>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Email</td>
        </thead>
        <tbody>`
        ;


        //ciclo for que por cada usuario se le agregue a la tabla creada anteriormente la informacion
        //de dicho usuario 
        for(let i = 0; i < listaUsuarios.length; i++){
        tablaUsuarios += ` 
            <tr>
                <td>${listaUsuarios[i].Nombre}</td>
                <td>${listaUsuarios[i].Apellido}</td>
                <td>${listaUsuarios[i].Email}</td>
            </tr>
        
        `;
        }

        //se cierra la tabla correspondientemente
        tablaUsuarios += `
            </tbody>
        </table>
        `;

        //se muestra en el DOM toda la tabla de usuarios creada - se hace con innerHTML para que
        //se agreguen las etiquetas correctamente
        $resultado.innerHTML = tablaUsuarios;

    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el localStorage y el resultado en el DOM
        localStorage.clear();
        $resultado.textContent = "";
        document.querySelector(inputNombre).value = "";
        document.querySelector(inputApellido).value = "";
        document.querySelector(inputEmail).value = "";
    });


}

