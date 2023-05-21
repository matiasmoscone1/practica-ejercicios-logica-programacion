


//16. Escribir un programa que transforme las temperaturas en Celsius y Farenheit


export default function cambiarTemperaturas(celsius,btnCelsius,farenheit,btnFarenheit,resultado){

    const $gradosFarenheit = document.querySelector(farenheit).value;

    const $resultado = document.querySelector(resultado);

    document.addEventListener("click", (e) => {
        const $gradosCelsius = document.querySelector(celsius).value;



        if(e.target.matches(btnCelsius)){

            let res = $gradosCelsius * 9 / 5 + 32;

            $resultado.textContent = `${$gradosCelsius} C° = ${res} F°`;
        }
    })


}