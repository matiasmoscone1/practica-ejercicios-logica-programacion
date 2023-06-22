


//39. Crea un formulario que permita al usuario introducir su nombre y, al presionar la 
//tecla "Enter", muestre un mensaje de bienvenida con el nombre ingresado.

export default function formTeclado(formulario, input, resultado){

    const $input = document.querySelector(input);
    const $formulario = document.querySelector(formulario);
    const $resultado = document.querySelector(resultado);

    $formulario.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    document.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            $resultado.textContent = `Hola ${$input.value} Komo e posible ete suceso`;
        }
    });
    


}





