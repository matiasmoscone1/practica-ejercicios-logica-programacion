


//60. Generador de contraseñas seguras (Complejidad especifica): Crea una función que 
//genere contraseñas seguras con una longitud y complejidad específicas.
//- No debe tener caracteres repetidos
//- No debe tener el mismo tipo de caracter consecutivo

export default function generadorContraseniaAvanzado(btnGenerar, btnLimpiar, resultado){

    const $btnGnerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const numero = /[0-9]+/;
    const letra = /[a-zA-Z]+/;
    const simbolo = /[\W_]+/;

    let contrasenia = "";

    $btnGnerar.addEventListener("click", () => {
        
        for(let i = 0; i < 13; i++){
            
        }

    });


}






