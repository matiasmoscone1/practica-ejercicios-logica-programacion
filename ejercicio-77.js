

//77. Define una clase llamada Persona con un constructor que tome los 
//parámetros nombre y edad, y luego crea una instancia de la clase.

export default function crearPersona(btnCrear, btnLimpiar, nombre, apellido, edad, resultado){

    //creando variables referenciales al DOM
    const $btnCrear = document.querySelector(btnCrear);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //construyendo la clase persona
    class Persona{
        //toma como parametros nombre(texto), apellido(texto), y edad(numero)
        constructor(nombre, apellido, edad){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
    }

    //captando evento click del boton Crear
    $btnCrear.addEventListener("click", () => {
        //tomando los valores de los input del usuario
        const $nombre = document.querySelector(nombre).value;
        const $apellido = document.querySelector(apellido).value;
        const $edad = document.querySelector(edad).value;

        //crea una instancia de la clase Persona con los parametros de los valores de
        //los inputs
        const instanciaPersona = new Persona($nombre, $apellido, $edad);

        //Muestra en el DOM el resultado
        $resultado.innerHTML = `* Persona creada con exito * <br>
         Nombre: ${instanciaPersona.nombre} <br>
         Apellido: ${instanciaPersona.apellido} <br>
         Edad: ${instanciaPersona.edad}`;


        //console.log(instanciaPersona);

        //console.log($nombre, $apellido, $edad);

    });

    //capta el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el resultado y los valores de los input 
        $resultado.innerHTML = "";
        document.querySelector(nombre).value = "";
        document.querySelector(apellido).value = "";
        document.querySelector(edad).value = "";
    });




}
