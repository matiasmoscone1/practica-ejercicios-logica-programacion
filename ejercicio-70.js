

//70. Autocompletado de búsqueda: Crea un cuadro de búsqueda con una lista predefinida
//de opciones. A medida que el usuario escriba en el cuadro de búsqueda, muestra 
//las opciones coincidentes en una lista desplegable debajo.

export default function autocompletar(texto){


    const $texto = document.querySelector(texto);

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
        return provincias.filter(provincia => provincia.toLowerCase().startsWith(cadenaTexto.toLowerCase()));
    }


    $texto.addEventListener("keyup", (e) => {

        let valorTexto = "";
        valorTexto += e.target.value;
        console.log(valorTexto);

        const prueba = filtarOpciones(valorTexto);
        console.log(prueba);

        


    });



}


