

//70. Autocompletado de búsqueda: Crea un cuadro de búsqueda con una lista predefinida
//de opciones. A medida que el usuario escriba en el cuadro de búsqueda, muestra 
//las opciones coincidentes en una lista desplegable debajo.

export default function autocompletar(texto, lista){


    const $texto = document.querySelector(texto);
    const $lista = document.querySelector(lista);

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


    const filtarOpciones = (cadenaTexto) => {
        return provincias.filter(provincia => {
            const provinciaSinDiacriticos = provincia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return provinciaSinDiacriticos.toLowerCase().startsWith(cadenaTexto.toLowerCase());
        });
    }


    $texto.addEventListener("keyup", (e) => {

        let valorTexto = "";
        valorTexto += e.target.value;
        console.log(valorTexto);

        $lista.innerHTML = "";

        if (valorTexto.length === 0) {
            // No mostrar opciones si el texto está vacío
            return; 
        }

        const opcFiltradas = filtarOpciones(valorTexto);
        //console.log(opcFiltradas);

        opcFiltradas.forEach(opcion => {
            const provinciaSeleccionada = document.createElement("li");
            provinciaSeleccionada.textContent = opcion;
       
        
            provinciaSeleccionada.addEventListener("click", () => {
                $texto.value = opcion;
                $lista.innerHTML = "";
            });

    
            $lista.appendChild(provinciaSeleccionada);
        });

    });



}


