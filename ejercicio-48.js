

//48.Ejercicio de validación de fecha: Crea un programa que pida al usuario ingresar una 
//fecha en formato "dd/mm/yyyy" por teclado. El programa debe validar si la fecha 
//ingresada es válida y mostrar un mensaje indicando si es correcta o no.


export default function validacionFecha(inputFecha, btnValidar, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnValidar = document.querySelector(btnValidar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //Creando expresion regular para darle formato al input
    let formatoFecha = /^\d{2}\/\d{2}\/\d{4}$/;


    //captando evento click del boton Validar
    $btnValidar.addEventListener("click", () => {

        //Tomando el valor escrito por el usuario en el input
        const $inputFecha = document.querySelector(inputFecha).value;

        //console.log($inputFecha);

        //Chequea si el formato del input escrito por el usuario coincide con la exp regular
        if(formatoFecha.test($inputFecha)){
            //Separa el valor del input escrito x el usuario por cada /
            let divFecha = $inputFecha.split("/");
            //Convierte el dia, mes y anio que esta escrito en "texto" en formato de "numero"
            //basicamente convierte texto en numero decimal - (10, significa la base numerica)
            let dia = parseInt(divFecha[0], 10);
            let mes = parseInt(divFecha[1], 10);
            let anio = parseInt(divFecha[2], 10);
        
            //Valida dia, mes y anio con respectivos parametros
            if(dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && anio >= 1900 && anio <= 2050){
                //console.log("FECHA VALIDA");
                //Muestar en el DOM el resultado
                $resultado.textContent = `${$inputFecha} es una fecha VALIDA`;
            }else{
                //console.log("FECHA INVALIDA");
                //Muestra en el DOM el resultado
                $resultado.textContent = `${$inputFecha} es una fecha INVALIDA`;    
            }
        }else{
            //console.log("EL FORMATO NO COINCIDE");
            //Muestra en el DOM si no coincide el formato
            $resultado.textContent = `El formato de ${inputFecha} NO es el indicado`;
        }

        //captando evento click del boton Limpiar
        $btnLimpiar.addEventListener("click", () => {
            //Limpia el DOM y el input donde escribe la fecha el usuario
            $resultado.textContent = "";
            document.querySelector(inputFecha).value = "";
        });
    });
}










