


//39. Crea un formulario que permita al usuario introducir su nombre y, al presionar la 
//tecla "Enter", muestre un mensaje de bienvenida con el nombre ingresado.

export default function formTeclado(formulario, input, resultado){

    //Inicializando variables referenciales al DOM
    const $input = document.querySelector(input);
    const $formulario = document.querySelector(formulario);
    const $resultado = document.querySelector(resultado);

    //Frenando el evento del submit para que no se "envie" el formulario
    $formulario.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    //Captando evento de tecla, si la tecla es igual a la tecla "Enter", muestra en el DOM
    //el resultado
    document.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            $resultado.textContent = `Hola ${$input.value} Komo e posible ete suceso`;
        }
    });
    


}





