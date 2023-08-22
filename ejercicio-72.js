



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

    //
    $objeto.innerHTML = `Nombre: ${objetoInicial.nombre} <br> Apellido: ${objetoInicial.apellido} 
    <br> Edad: ${objetoInicial.edad} <br> Profesion: ${objetoInicial.profesion}`;



    //console.log(objetoInicial);

    //console.log(arrayInicial);




    $btnCambiar.addEventListener("click", () => {

        //console.log(obtenerRandom());


        //crear nuevo objeto 
        //y crear un ciclo para meter de acuerdo al numero random 
        //con las mismas propiedades y con el numero random que haya tocado

        const nuevoObjeto = {nombre: "", apellido: "", edad: "", profesion: ""};

        const indicesUsados = new Set();

        const obtenerIndiceNoRepetido = () => {

            let indiceAleatorio;

            do{
                indiceAleatorio = obtenerRandom();
            }while(indicesUsados.has(indiceAleatorio));
            indicesUsados.add(indiceAleatorio);
            return indiceAleatorio;
        }


        nuevoObjeto.nombre = arrayInicial[obtenerIndiceNoRepetido()];
        nuevoObjeto.apellido = arrayInicial[obtenerIndiceNoRepetido()];
        nuevoObjeto.edad = arrayInicial[obtenerIndiceNoRepetido()];
        nuevoObjeto.profesion = arrayInicial[obtenerIndiceNoRepetido()];
    
        //console.log(nuevoObjeto);
    
        $objeto.innerHTML = `Nombre: ${nuevoObjeto.nombre} <br> Apellido: ${nuevoObjeto.apellido} 
        <br> Edad: ${nuevoObjeto.edad} <br> Profesion: ${nuevoObjeto.profesion}`;

    });


    $btnLimpiar.addEventListener("click", () => {
        $objeto.innerHTML = `Nombre:  <br> Apellido: 
        <br> Edad: <br> Profesion: `;
    });
    
}




