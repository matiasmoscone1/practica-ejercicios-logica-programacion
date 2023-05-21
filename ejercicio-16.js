
//16. Escribir un programa que transforme las temperaturas en Celsius y Farenheit

export default function cambiarTemperaturas(celsius,btnCelsius,farenheit,btnFarenheit,resultado){

    //Creando variable DOM para el resultado
    const $resultado = document.querySelector(resultado);

    //Captando el evento click del DOM
    document.addEventListener("click", (e) => {
        //Creando variables que referencian los input del DOM para sacar el valor
        const $gradosCelsius = document.querySelector(celsius).value;
        const $gradosFarenheit = document.querySelector(farenheit).value;
        
        //Captando click del boton de celsius a farenheit
        if(e.target.matches(btnCelsius)){
            let res = $gradosCelsius * 9 / 5 + 32;
            //Poniendo resultado en el DOM
            $resultado.textContent = `${$gradosCelsius} C° = ${res} F°`;
        }
        //Captando click del boton de farenheit a celsius
        if(e.target.matches(btnFarenheit)){
            let res = ($gradosFarenheit - 32) * 5/9;
            //Poniendo resultado en el DOM
            $resultado.textContent = `${$gradosFarenheit} F° = ${parseFloat(res.toFixed(1))} C°`;
        }
    })

}