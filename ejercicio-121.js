

//121. Implementación de Promesas: Crea tu propia implementación simplificada de Promesas 
//en JavaScript. Debería ser capaz de manejar las funciones then, catch y finally.


export default function ejercicioPromesa(btnPromesa, btnLimpiar, resultado){


    const $btnPromesa = document.querySelector(btnPromesa);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const URL = "https://jsonplaceholder.typicode.com/users";

    const callAPI = () => {

        fetch(URL)
        .then((response) => response.json())
        .then((data) => console.log(data));

    };


    $btnPromesa.addEventListener("click", () => {

        callAPI();
    });





}








