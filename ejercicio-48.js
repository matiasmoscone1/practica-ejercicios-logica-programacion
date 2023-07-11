

//48.Ejercicio de validación de fecha: Crea un programa que pida al usuario ingresar una 
//fecha en formato "dd/mm/yyyy" por teclado. El programa debe validar si la fecha 
//ingresada es válida y mostrar un mensaje indicando si es correcta o no.


export default function validacionFecha(inputFecha, btnValidar, btnLimpiar, resultado){

    const $btnValidar = document.querySelector(btnValidar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    let formatoFecha = /^\d{2}\/\d{2}\/\d{4}$/;


    $btnValidar.addEventListener("click", () => {

        const $inputFecha = document.querySelector(inputFecha).value;

        console.log($inputFecha);

        if(formatoFecha.test($inputFecha)){
            let divFecha = $inputFecha.split("/");
            let dia = parseInt(divFecha[0], 10);
            let mes = parseInt(divFecha[1], 10);
            let anio = parseInt(divFecha[2], 10);
        
            if(dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && anio >= 1900 && anio <= 2050){
                //console.log("FECHA VALIDA");
                $resultado.textContent = `${$inputFecha} es una fecha VALIDA`;
            }else{
                //console.log("FECHA INVALIDA");
                $resultado.textContent = `${$inputFecha} es una fecha INVALIDA`;    
            }
        }else{
            //console.log("EL FORMATO NO COINCIDE");
            $resultado.textContent = `El formato de ${inputFecha} NO es el indicado`;
        }

        $btnLimpiar.addEventListener("click", () => {
            $resultado.textContent = "";
            document.querySelector(inputFecha).value = "";
        });






    });


}










