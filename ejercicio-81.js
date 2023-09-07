

//81. Crea una clase Libro con propiedades para título, autor y año de publicación.


export default function modificarLibro(titulo, autor, anio, btnCrear, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnCrear = document.querySelector(btnCrear);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //creando clase Libro
    class Libro{
        //construyendo clase con las propiedades, titulo, autor, anio
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

    //captando evento click del boton Crear
    $btnCrear.addEventListener("click", () => {

        //tomando el valor de los inputs escritos por el usuario
        const $titulo = document.querySelector(titulo).value;
        const $autor = document.querySelector(autor).value;
        const $anio = document.querySelector(anio).value;
    
        //creando instancia de clase Libro
        const instanciaLibro = new Libro($titulo, $autor, $anio);
        
        //mostrando el resultado en el DOM
        $resultado.textContent = `Titulo: ${instanciaLibro.titulo} \nAutor: ${instanciaLibro.autor} \nAño: ${instanciaLibro.anio}`;
        
        //console.log(instanciaLibro.mostrarLibro());

    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el DOM y los inputs para que escriba el usuario
        $resultado.textContent = "";
        document.querySelector(titulo).value = "";
        document.querySelector(autor).value = "";
        document.querySelector(anio).value = "";
    });


}


