

//84. Implementa una clase Estudiante con propiedades para nombre, edad y una lista 
//de calificaciones, y un método para calcular el promedio de calificaciones.


export default function estudiantes(btnAgregar, btnLimpiar,  lista, btnCalcular, resultado){

    //Creando las variables referenciales al DOM
    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $lista = document.querySelector(lista);
    const $resultado = document.querySelector(resultado);


    //Creando clase Estudiante
    class Estudiante{
        //creando el constructor de la clase donde recibe por parametro los valores de los
        //inputs escritos por el usuario
        constructor(nombre, edad, calificaciones){
            this.nombre = nombre;
            this.edad = edad;
            this.calificaciones = calificaciones;
        }

        //metodo que toma todas las calificaciones del Estudiante y devuelve el promedio
        calcularPromedio(){
            let res = 0;
            this.calificaciones.map((nota) => {
                res += parseFloat(nota);
            });
            return(res / 3);
       }
    
    }

    //captando evento click del boton Agregar
    $btnAgregar.addEventListener("click", (e) => {
        //previene por defecto el comportamiento del evento xq esta dentro del form y sino 
        //submitea al hacer click
        e.preventDefault();
        //Toma todos los valores de los inputs escritos por el usuario
        const nombre = document.querySelector(".input-nombre-ej-84").value;
        const edad = document.querySelector(".input-edad-ej-84").value;
        const matematicas = document.querySelector(".input-cal-uno-ej-84").value;
        const historia = document.querySelector(".input-cal-dos-ej-84").value;
        const lengua = document.querySelector(".input-cal-tres-ej-84").value;

        //crea un nuevo array para las calificaciones y las mete en orden (matematicas, historia,
        //lengua)
        const nuevasCalificaciones = [];
        nuevasCalificaciones.push(matematicas);
        nuevasCalificaciones.push(historia);
        nuevasCalificaciones.push(lengua);

        //crea la instancia de la clase Estudiante
        const instanciaEstudiante = new Estudiante(nombre, edad, nuevasCalificaciones)

        //console.log(instanciaEstudiante);

        //Muestra en el DOM ordenadamente el estudiante agregado
        $lista.innerHTML = `Nombre: ${instanciaEstudiante.nombre}<br> Edad: ${instanciaEstudiante.edad}
        <br> Matematicas: ${instanciaEstudiante.calificaciones[0]} Historia: ${instanciaEstudiante.calificaciones[1]}
        Lengua: ${instanciaEstudiante.calificaciones[2]}`;

        //capta el evento click del boton Calcular
        $btnCalcular.addEventListener("click", () => {
        
            //Muestra en el DOM el resultado del promedio llamando al metodo de la clase instanciada
            //y fixea el resultado a dos lugares despues de la coma solamente
            $resultado.textContent = `El promedio es: ${instanciaEstudiante.calcularPromedio().toFixed(2)}`;

        });

    });


    //capta el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", (e) => {
        //previene por defecto el comportamiento del evento porque esta dentor del form y sino
        //submitea la informacion
        e.preventDefault();
        //limpia todos los inputs escritos por el usuario
        document.querySelector(".input-nombre-ej-84").value = "";
        document.querySelector(".input-edad-ej-84").value = "";
        document.querySelector(".input-cal-uno-ej-84").value = "";
        document.querySelector(".input-cal-dos-ej-84").value = "";
        document.querySelector(".input-cal-tres-ej-84").value = "";
        //limpia el resultado en el DOM tanto del alumno como el resultado del promedio
        $lista.innerHTML = "";
        $resultado.textContent = "";
    });
    
}


