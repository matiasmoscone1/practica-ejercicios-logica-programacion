

//81. Crea una clase Libro con propiedades para título, autor y año de publicación.


export default function modificarLibro(titulo, autor, anio, btnCrear, btnLimpiar, resultado){

    const $btnCrear = document.querySelector(btnCrear);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    class Libro{
        constructor(titulo, autor, anio){
            this.titulo = titulo;
            this.autor = autor;
            this.anio = anio;
        }

        /*
        mostrarLibro(){
            return($resultado.textContent = `Titulo: ${this.titulo} \nAutor: ${this.autor} \nAño: ${this.anio}`);
        }*/

    }


    $btnCrear.addEventListener("click", () => {

        const $titulo = document.querySelector(titulo).value;
        const $autor = document.querySelector(autor).value;
        const $anio = document.querySelector(anio).value;
    
        const instanciaLibro = new Libro($titulo, $autor, $anio);

        $resultado.textContent = `Titulo: ${instanciaLibro.titulo} \nAutor: ${instanciaLibro.autor} \nAño: ${instanciaLibro.anio}`;
        
        //console.log(instanciaLibro.mostrarLibro());

    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
        document.querySelector(titulo).value = "";
        document.querySelector(autor).value = "";
        document.querySelector(anio).value = "";
    });


}


