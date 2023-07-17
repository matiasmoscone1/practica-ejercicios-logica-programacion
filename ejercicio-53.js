

//53. Validador de contraseñas: Crea una función que tome una contraseña como entrada y 
//la valide según ciertas reglas (por ejemplo, al menos 8 caracteres, al menos una letra 
//mayúscula, al menos un número, etc.).


export default function validarContrasenia(inputContra, btnValidar, btnLimpiar, resultado){

    const $btnValidar = document.querySelector(btnValidar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    const letra = /[a-zA-Z]+/;
    const numero = /[0-9]+/;
    const simbolo = /[\W_]+/;

    $btnValidar.addEventListener("click", () => {
        const $inputContra = document.querySelector(inputContra).value;

        const arrayInput = $inputContra.split("");

        console.log(arrayInput);
        
        for(let i = 0; i <= $inputContra.length; i++){
            if(letra.test($inputContra[i])){
                console.log("hola");    
            }
        }

    });
    


}

