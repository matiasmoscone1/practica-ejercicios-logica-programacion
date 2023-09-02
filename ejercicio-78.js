

//78. Define una clase Rectángulo con propiedades para ancho y altura, 
//y un método para calcular su área.


export default function calcularArea(btnCalcular, btnLimpiar, ancho, alto, resultado){

    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $btnCalcular.addEventListener("click", () => {
        const $ancho = document.querySelector(ancho).value;
        const $alto = document.querySelector(alto).value;

        class Rectangulo{
            constructor(ancho, alto){
                this.ancho = ancho;
                this.alto = alto;
            }

            calcularArea(){
                return(this.ancho * this.alto);
            }

        }

        const nuevoRectangulo = new Rectangulo($ancho, $alto);

        //console.log(nuevoRectangulo.calcularArea());
        
        $resultado.textContent = `El area es: ${nuevoRectangulo.calcularArea()}cm`;

    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
        document.querySelector(ancho).value = "";
        document.querySelector(alto).value = "";
    });


}



