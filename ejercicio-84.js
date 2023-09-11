

//84. Implementa una clase Estudiante con propiedades para nombre, edad y una lista 
//de calificaciones, y un método para calcular el promedio de calificaciones.


export default function estudiantes(btnAgregar, btnLimpiar,  lista, btnCalcular, resultado){


    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $lista = document.querySelector(lista);
    const $resultado = document.querySelector(resultado);


    class Estudiante{
        constructor(nombre, edad, calificaciones){
            this.nombre = nombre;
            this.edad = edad;
            this.calificaciones = calificaciones;
        }

        calcularPromedio(calificaciones){
            let res = 0;
            this.calificaciones.map((nota) => {
                res += parseFloat(nota);
            });
            return(res / 3);
       }
    
    }

    $btnAgregar.addEventListener("click", (e) => {
        e.preventDefault();
        const nombre = document.querySelector(".input-nombre-ej-84").value;
        const edad = document.querySelector(".input-edad-ej-84").value;
        const matematicas = document.querySelector(".input-cal-uno-ej-84").value;
        const historia = document.querySelector(".input-cal-dos-ej-84").value;
        const lengua = document.querySelector(".input-cal-tres-ej-84").value;

        const nuevasCalificaciones = [];
        nuevasCalificaciones.push(matematicas);
        nuevasCalificaciones.push(historia);
        nuevasCalificaciones.push(lengua);

        const instanciaEstudiante = new Estudiante(nombre, edad, nuevasCalificaciones)

        console.log(instanciaEstudiante);

        $lista.innerHTML = `Nombre: ${instanciaEstudiante.nombre}<br> Edad: ${instanciaEstudiante.edad}
        <br> Matematicas: ${instanciaEstudiante.calificaciones[0]} Historia: ${instanciaEstudiante.calificaciones[1]}
        Lengua: ${instanciaEstudiante.calificaciones[2]}`;

        $btnCalcular.addEventListener("click", () => {
        
            $resultado.textContent = `El promedio es: ${instanciaEstudiante.calcularPromedio().toFixed(2)}`;

        });

    });



    $btnLimpiar.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".input-nombre-ej-84").value = "";
        document.querySelector(".input-edad-ej-84").value = "";
        document.querySelector(".input-cal-uno-ej-84").value = "";
        document.querySelector(".input-cal-dos-ej-84").value = "";
        document.querySelector(".input-cal-tres-ej-84").value = "";
        $lista.innerHTML = "";
        $resultado.textContent = "";
    });
    
}


