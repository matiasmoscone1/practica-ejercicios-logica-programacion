

//70. Autocompletado de búsqueda: Crea un cuadro de búsqueda con una lista predefinida
//de opciones. A medida que el usuario escriba en el cuadro de búsqueda, muestra 
//las opciones coincidentes en una lista desplegable debajo.

export default function autocompletar(texto){


    const $texto = document.querySelector(texto);


    $texto.addEventListener("onchange", (e) => {

        let valorTexto = "";
        valorTexto = e.target.value;
        console.log(e);


    });



}


