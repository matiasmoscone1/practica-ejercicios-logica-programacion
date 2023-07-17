

//53. Validador de contraseñas: Crea una función que tome una contraseña como entrada y 
//la valide según ciertas reglas (por ejemplo, al menos 8 caracteres, al menos una letra 
//mayúscula, al menos un número, etc.).


export default function validarContrasenia(inputContra, btnValidar, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnValidar = document.querySelector(btnValidar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //Creando variables de expresiones regulares para validar contraseña
    const letra = /[a-zA-Z]+/;
    const numero = /[0-9]+/;
    const simbolo = /[\W_]+/;

    //captando evento click del boton Validar
    $btnValidar.addEventListener("click", () => {
        //tomando valor del input escrito por el usuario
        const $inputContra = document.querySelector(inputContra).value;

        //Validando contraseña, expReg.test(string) => busca coincidencia en la string y la exp reg
        //valida letras, numeros y simbolos y si tiene mas de 8 caracteres
        if(letra.test($inputContra) && numero.test($inputContra) && 
        simbolo.test($inputContra) && $inputContra.length > 8){
            //console.log("asd");
            //muestra resultado en DOM
            $resultado.textContent = `Contraseña VALIDA`;
        }else{
            //console.log("none");
            //muestra resultado en DOM
            $resultado.textContent = `Contraseña INVALIDA (debe tener mas de 8 caracteres y contener letras, numeros y simbolos)`;
        }
        
        /* A diferencia de test() que devuelve un booleano, el metodo search() devuelve el indice 
        de la coincidencia y si no la encuentra devuelve -1.
        let asd = $inputContra.search(letra);
        console.log(asd)
        */
    });
    
    //Captando evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpia el resultado en el DOM y el input escrito por el usuario
        $resultado.textContent = "";
        document.querySelector(inputContra).value = "";
    });


}

