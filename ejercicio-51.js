

//51. Ejercicio de cálculo de edad: Crea un programa que solicite al usuario ingresar su 
//fecha de nacimiento en formato "dd/mm/yyyy" por teclado. Luego, el programa debe calcular 
//la edad del usuario en años, meses y días, y mostrar los resultados.


export default function calculoEdad(inputFecha, btnCalcular, btnLimpiar, resultado){


    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $btnCalcular.addEventListener("click", () => {
        const $inputFecha = document.querySelector(inputFecha).value;
        let arrayFecha = $inputFecha.split("-");
        //console.log(arrayFecha);

        let anio = parseInt(arrayFecha[0]);
        let mes = parseInt(arrayFecha[1]);
        let dia = parseInt(arrayFecha[2]); 

        //console.log(dia, mes, anio);

        const fechaHoy = new Date();

        let mesHoy = parseInt(fechaHoy.getMonth() + 1);
        let diaHoy = parseInt(fechaHoy.getDate());
        let anioHoy = parseInt(fechaHoy.getFullYear());

        let resultado = `Dia: ${dia - diaHoy} \nMes: ${mes - mesHoy} \nAño: ${anioHoy - anio}`;

        console.log(resultado);

    });



}













