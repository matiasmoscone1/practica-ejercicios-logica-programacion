

//77. Define una clase llamada Persona con un constructor que tome los 
//parámetros nombre y edad, y luego crea una instancia de la clase.

export default function crearPersona(btnCrear, btnLimpiar, nombre, apellido, edad, resultado){

    const $btnCrear = document.querySelector(btnCrear);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    class Persona{

        constructor(nombre, apellido, edad){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
    }

    
    $btnCrear.addEventListener("click", () => {
        const $nombre = document.querySelector(nombre).value;

        console.log($nombre);

    });
    const instanciaPersona = new Persona()




}
