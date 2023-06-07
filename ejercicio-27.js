

//27. Generación de patrones: Escribe un programa que genere un patrón de 
//asteriscos en forma de triángulo o cuadrado.


export default function generarPatron(triangulo, cuadrado, resultado){

    const $btnTriangulo = document.querySelector(triangulo);

    const $btnCuadrado = document.querySelector(cuadrado);

    const $resultadoForma = document.querySelector(resultado);

    $btnTriangulo.addEventListener("click", () => {

        let numFilas = 5; 
        let patron = "";
        for (let i = 1; i <= numFilas; i++) {
            let linea = '';
            for (let j = 1; j <= i; j++) {
              linea += '*';
            }
            console.log(linea);
            patron += linea + "\n";
        }
        
        $resultadoForma.innerHTML = patron.replace(/\n/g, "<br>");
        
    })
    
}
