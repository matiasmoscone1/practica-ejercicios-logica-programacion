

//78. Define una clase Rectángulo con propiedades para ancho y altura, 
//y un método para calcular su área.


export default function calcularArea(btnCalcular, btnLimpiar, ancho, alto, resultado){

    //creando variables referenciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {
        //tomando valor de los inputs del usuario
        const $ancho = document.querySelector(ancho).value;
        const $alto = document.querySelector(alto).value;

        //creando la clase Rectangulo
        class Rectangulo{
            //construyendo clase con los atributos
            constructor(ancho, alto){
                this.ancho = ancho;
                this.alto = alto;
            }

            //creando metodo de la clase Rectangulo
            calcularArea(){
                //devuelve el area multiplicando el ancho por el alto
                return(this.ancho * this.alto);
            }

        }

        //creando instancia de la clase Rectangulo y pasandole por parametro a los atributos
        //el valor de los inputs del usuario
        const nuevoRectangulo = new Rectangulo($ancho, $alto);

        //console.log(nuevoRectangulo.calcularArea());
        
        //mostrando el resultado en el DOM
        $resultado.textContent = `El area es: ${nuevoRectangulo.calcularArea()}cm`;

    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el resutlado del DOM y los valores de los inputs 
        $resultado.textContent = "";
        document.querySelector(ancho).value = "";
        document.querySelector(alto).value = "";
    });


}



