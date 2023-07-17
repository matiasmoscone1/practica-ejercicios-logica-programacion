

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

        
        if(letra.test($inputContra) && numero.test($inputContra) && simbolo.test($inputContra)){
            console.log("asd");
        }else{
            console.log("none");
        }
        
        /* A diferencia de test() que devuelve un booleano, el metodo search() devuelve el indice 
        de la coincidencia y si no la encuentra devuelve -1.
        let asd = $inputContra.search(letra);
        console.log(asd)
        */
    });
    


}

