

//51. Ejercicio de cálculo de edad: Crea un programa que solicite al usuario ingresar su 
//fecha de nacimiento en formato "dd/mm/yyyy" por teclado. Luego, el programa debe calcular 
//la edad del usuario en años, meses y días, y mostrar los resultados.


export default function calculoEdad(inputFecha, btnCalcular, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del boton calcular
    $btnCalcular.addEventListener("click", () => {
        //tomando valor del input escrito por el usuario
        const $inputFecha = document.querySelector(inputFecha).value;
        //Convirtiendo la fecha ingresada por el usuario en un array separando anios dias y meses
        let arrayFecha = $inputFecha.split("-");
        //console.log(arrayFecha);

        //Separando anios meses y dias con el array creado
        let anio = parseInt(arrayFecha[0]);
        let mes = parseInt(arrayFecha[1]);
        let dia = parseInt(arrayFecha[2]); 

        //console.log(dia, mes, anio);

        //Creando un objeto Date para que guarde la fecha actual
        const fechaHoy = new Date();

        //Creando variables actuales de dia, mes y anio
        let mesHoy = parseInt(fechaHoy.getMonth() + 1);
        //let diaHoy = parseInt(fechaHoy.getDate());
        let anioHoy = parseInt(fechaHoy.getFullYear());

        //Creando variables que calculan la diferencia actuales
        let diffDias = 31 - dia;
        let diffMeses = mes - mesHoy;
        let diffAnios = anioHoy - anio;

        /* //Para que siempre de positivo (Igual se resuelve con Math.abs() => da el valor absoluto del numero)
        if(diffDias < 0){
            diffDias = -diffDias;
        };
        if(diffMeses < 0){
            diffMeses = -diffMeses;
        };*/

        //Mostrando el resultado en el DOM y poniendo valor absoluto en los calculos por si da negativo
        $resultado.innerHTML = `Dia: ${Math.abs(diffDias)} <br> Mes: ${Math.abs(diffMeses)} <br> Año: ${diffAnios}`;

        
        //console.log(resultado);

    });

    //Captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpiando el DOM y el input ingresado por el usuario
        document.querySelector(inputFecha).value = "";
        $resultado.textContent = "";
    });


}













