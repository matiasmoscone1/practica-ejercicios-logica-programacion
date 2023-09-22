

//87. Crea una promesa que simule una llamada a una API y maneja tanto el caso de 
//éxito como el caso de error. (API JSON)

//https://jsonplaceholder.org/users

export default function datosUsuarios(btnIniciar, btnParar, resultado){

    const URL = "https://jsonplaceholder.org/users";

    const $btnIniciar = document.querySelector(btnIniciar);
    const $btnParar = document.querySelector(btnParar);
    const $resultado = document.querySelector(resultado);

    let datos = [];

    const callAPI = async () => {
        
        try{            
            await fetch(URL)
            .then((response) => response.json())
            .then((data) => {datos = [...data]});
        }catch(e){
            console.log({e});
        }
        //console.log(datos)

    };



    $btnIniciar.addEventListener("click", async () => {
        
        await callAPI();
        console.log(datos);
        
        $resultado.innerHTML = `${datos.map((usuario) => `Usuario: ${usuario} <br>`)}`;


    });

}

