

//84. Implementa una clase Estudiante con propiedades para nombre, edad y una lista 
//de calificaciones, y un método para calcular el promedio de calificaciones.


export default function estudiantes(btnAgregar, btnLimpiar, lista, resultado){


    const $btnAgregar = document.querySelector(btnAgregar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $lista = document.querySelector(lista);
    const $resultado = document.querySelector(resultado);


    class Estudiante{
        constructor(nombre, edad, calificaciones){
            this.nombre = "";
            this.edad = "";
            this.calificaciones = [];
        }
    
    
    }

    $btnAgregar.addEventListener("click", () => {
        const nombre = document.querySelector(".input-nombre-ej-84");
        const edad = document.querySelector(".input-edad-ej-84");
        const matematicas = document.querySelector(".input-cal-uno-ej-84");
        const historia = document.querySelector(".input-cal-dos-ej-84");
        const lengua = document.querySelector(".input-cal-tres-ej-84");



        
    });


    
}


