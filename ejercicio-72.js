



//72. Crea una función que tome un objeto y devuelva un nuevo objeto con todas las 
//claves y valores intercambiados.


export default function cambiarValores(objeto ,btnCambiar, btnLimpiar){


    //creando objeto inicial con valores iniciales
    const objetoInicial = {
        nombre: "Matias",
        apellido: "Moscone",
        edad: 27,
        profesion: "Desarrollador"
    };

    //guardando valores del objeto creado en un array
    const arrayInicial = [objetoInicial.nombre, objetoInicial.apellido, objetoInicial.edad,
    objetoInicial.profesion];

    //obtiene un numero entre 0 y 3
    const obtenerRandom = () => {
        return Math.floor(Math.random() * 4);
    }

    //creando variables referenciales al DOM
    const $objeto = document.querySelector(objeto);
    const $btnCambiar = document.querySelector(btnCambiar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    //refleja el objeto en el DOM, con sus respectivos valores
    $objeto.innerHTML = `Nombre: ${objetoInicial.nombre} <br> Apellido: ${objetoInicial.apellido} 
    <br> Edad: ${objetoInicial.edad} <br> Profesion: ${objetoInicial.profesion}`;



    //console.log(objetoInicial);

    //console.log(arrayInicial);



    //Captando evento click del boton Cambiar
    $btnCambiar.addEventListener("click", () => {

        //console.log(obtenerRandom());


        //crea un nuevo objeto con valores vacios
        const nuevoObjeto = {nombre: "", apellido: "", edad: "", profesion: ""};

        //crea una coleccion nueva de indices
        const indicesUsados = new Set();

        //funcion que obtiene un indice que no se repite entre 0 y 3
        const obtenerIndiceNoRepetido = () => {

            //crea una variable de indice
            let indiceAleatorio;

            //guarda en indiceAleatorio un valor entre 0 y 3, si indiceAleatorio ya esta 
            //en la coleccion de "indicesUsados", volvera a pedir otro indice
            do{
                indiceAleatorio = obtenerRandom();
            }while(indicesUsados.has(indiceAleatorio));
            //una vez que se obtiene un indice que no estaba en la coleccion, se agrega
            //a la misma
            indicesUsados.add(indiceAleatorio);
            //devuelve el indiceAleatorio unico
            return indiceAleatorio;
        }


        //Guarda en el nuevo objeto un valor del array previamente creado que tenia los valores
        //iniciales del objeto. Esto lo hace mediante indices random que se generan al llamar 
        //la funcion obtenerIndiceNoRepetido()
        nuevoObjeto.nombre = arrayInicial[obtenerIndiceNoRepetido()];
        nuevoObjeto.apellido = arrayInicial[obtenerIndiceNoRepetido()];
        nuevoObjeto.edad = arrayInicial[obtenerIndiceNoRepetido()];
        nuevoObjeto.profesion = arrayInicial[obtenerIndiceNoRepetido()];
    
        //console.log(nuevoObjeto);
    
        //Refleja en el DOM el nuevo objeto creado con sus respectivos valores
        $objeto.innerHTML = `Nombre: ${nuevoObjeto.nombre} <br> Apellido: ${nuevoObjeto.apellido} 
        <br> Edad: ${nuevoObjeto.edad} <br> Profesion: ${nuevoObjeto.profesion}`;

    });


    //capta el evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpia los valores del objeto creado
        $objeto.innerHTML = `Nombre:  <br> Apellido: 
        <br> Edad: <br> Profesion: `;
    });
    
}




