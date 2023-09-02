

//77. Define una clase llamada Persona con un constructor que tome los 
//parámetros nombre y edad, y luego crea una instancia de la clase.

export default function crearPersona(btnCrear, btnLimpiar, nombre, apellido, edad, resultado){

    const $btnCrear = document.querySelector(btnCrear);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    class Persona{
        constructor(nombre, apellido, edad){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
    }

    
    $btnCrear.addEventListener("click", () => {
        const $nombre = document.querySelector(nombre).value;
        const $apellido = document.querySelector(apellido).value;
        const $edad = document.querySelector(edad).value;

        
        const instanciaPersona = new Persona($nombre, $apellido, $edad);

        $resultado.innerHTML = `* Persona creada con exito * <br>
         Nombre: ${instanciaPersona.nombre} <br>
         Apellido: ${instanciaPersona.apellido} <br>
         Edad: ${instanciaPersona.edad}`;


        //console.log(instanciaPersona);

        //console.log($nombre, $apellido, $edad);

    });


    $btnLimpiar.addEventListener("click", () => {
        $resultado.innerHTML = "";
        document.querySelector(nombre).value = "";
        document.querySelector(apellido).value = "";
        document.querySelector(edad).value = "";
    });




}
