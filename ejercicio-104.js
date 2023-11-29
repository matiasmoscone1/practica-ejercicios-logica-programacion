

//104. Almacenar y recuperar datos en localStorage: Crea una página con dos campos de texto 
//y un botón. El objetivo es permitir que el usuario escriba su nombre y edad, y al hacer 
//clic en el botón, los datos se almacenen en localStorage. Luego, al recargar la página, muestra los datos almacenados.


export default function almacenamientoLocalStorage(inputNombre, inputApellido, inputEmail, btnEnviar, btnTraerInfo, btnLimpiar, resultado){


    const $btnEnviar = document.querySelector(btnEnviar);
    const $btnTraerInfo = document.querySelector(btnTraerInfo);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    $btnEnviar.addEventListener("click", (e) => {
        e.preventDefault();
        const $inputNombre = document.querySelector(inputNombre).value;
        const $inputApellido = document.querySelector(inputApellido).value;
        const $inputEmail = document.querySelector(inputEmail).value;
        
        

        const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];


        //console.log(usuarios);
        usuarios.push({
            Nombre: $inputNombre,
            Apellido: $inputApellido,
            Email: $inputEmail
        });

        localStorage.setItem("Usuarios", JSON.stringify(usuarios))
        
        console.log(JSON.parse(localStorage.getItem("Usuarios")));

        document.querySelector(inputNombre).value = "";
        document.querySelector(inputApellido).value = "";
        document.querySelector(inputEmail).value = "";

        
    });


    $btnTraerInfo.addEventListener("click", () => {
        const listaUsuarios = JSON.parse(localStorage.getItem("Usuarios"));

        console.log(listaUsuarios);
        $resultado.innerHTML = `Los usuarios son: ${listaUsuarios[0].Nombre}`;

    });

    $btnLimpiar.addEventListener("click", () => {
        localStorage.clear();
    });





}

