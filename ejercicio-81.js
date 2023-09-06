

//81. Crea una clase Libro con propiedades para título, autor y año de publicación.


export default function modificarLibro(titulo, autor, anio, btnCrear, btnLimpiar, resultado){

    const $btnCrear = document.querySelector(btnCrear);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    class Libro{
        constructor(titulo, autor, anio){
            this.titulo = titulo;
            this.autor = autor;
            this.anio = anio;
        }

        crearLibro(tit, aut, an){
            this.titulo = tit;
            this.autor = aut;
            this.anio = an;
        }

    }


    $btnCrear.addEventListener("click", () => {

        const $titulo = document.querySelector(titulo).value;
        const $autor = document.querySelector(autor).value;
        const $anio = document.querySelector(anio).value;
    

        

    });



}


