

//70. Autocompletado de búsqueda: Crea un cuadro de búsqueda con una lista predefinida
//de opciones. A medida que el usuario escriba en el cuadro de búsqueda, muestra 
//las opciones coincidentes en una lista desplegable debajo.

export default function autocompletar(texto, lista){

    //creando variables referenciales al DOM
    const $texto = document.querySelector(texto);
    const $lista = document.querySelector(lista);

    //creando array con todas las provincias de argentina
    const provincias = ["Buenos Aires",
    "Ciudad Autónoma de Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Tucumán"];


    //funcion que toma por parametro una cadena de texto y filtra las provincias
    const filtarOpciones = (cadenaTexto) => {
        return provincias.filter(provincia => {
            //se crea una variable que reemplaza los acentos por letras comunes para matchear
            const provinciaSinDiacriticos = provincia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            //devuelve la provincia matcheada con la funcion startsWith, a medida que va escribiendo texto
            return provinciaSinDiacriticos.toLowerCase().startsWith(cadenaTexto.toLowerCase());
        });
    }

    //captando evento keyup del input en el DOM
    $texto.addEventListener("keyup", (e) => {

        //Creando variable para almacenar lo que escribe el usuario
        let valorTexto = "";
        //almacenando las letras que va escribiendo el usuario en la variable mencionada
        valorTexto += e.target.value;
        //console.log(valorTexto);

        //limpia la lista del DOM
        $lista.innerHTML = "";

        //si el input esta vacio, no retorna nada.
        if (valorTexto.length === 0) {
            // no muestra las opciones
            return; 
        }

        //creando variable que llama a la funcion filtrarOpciones y le pasa por parametro lo que
        //escribio el usuario en el input
        const opcFiltradas = filtarOpciones(valorTexto);
        //console.log(opcFiltradas);

        //Por cada opcion filtrada recorre el array "opcFiltradas"
        opcFiltradas.forEach(opcion => {
            //por cada provincia, crea un list item y le agrega el nombre de la provincia que
            //esta iterando
            const provinciaSeleccionada = document.createElement("li");
            provinciaSeleccionada.textContent = opcion;
       
            //capta el evento click de la la lista de opciones
            provinciaSeleccionada.addEventListener("click", () => {
                //llena el input con el nombre de la provincia
                $texto.value = opcion;
                //borra la lista
                $lista.innerHTML = "";
            });

            //le agrega a la lista el list item creado con cada provincia filtrada.
            $lista.appendChild(provinciaSeleccionada);
        });

    });



}


