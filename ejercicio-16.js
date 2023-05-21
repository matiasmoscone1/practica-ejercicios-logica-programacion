


//16. Escribir un programa que transforme las temperaturas en Celsius y Farenheit


export default function cambiarTemperaturas(celsius,btnCelsius,farenheit,btnFarenheit,resultado){

    const $gradosCelsius = document.querySelector(celsius).value;

    const $gradosFarenheit = document.querySelector(farenheit).value;

    const $resultado = document.querySelector(resultado);

    document.addEventListener("click", (e) => {

        if(e.target.matches(btnCelsius)){

            let res = $gradosCelsius * 9 / 5 + 32;

            $resultado.textContent = `${$gradosCelsius} C° = ${res} F°`;
        }
    })


}