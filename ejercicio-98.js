

//98. Promesa que resuelve después de un tiempo: Crea una función que devuelve una promesa 
//que se resuelve después de un cierto tiempo (por ejemplo, 2 segundos). Luego, usa 
//async/await para esperar la resolución de la promesa y mostrar un mensaje cuando se complete.

export default function devolverPromesa(input, btnComenzar, btnLimpiar, resultado){


    const $btnComenzar = document.querySelector(btnComenzar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    const creaPromesa = (texto) => {
        return new Promise((res) => {
            setTimeout(() => {
                res($resultado.textContent = `El resultado es: ${texto}`);
            }, 2000);
        });
        }


    $btnComenzar.addEventListener("click", async () => {
        const $inputText = document.querySelector(input).value;

        await creaPromesa($inputText)
            .then((resultado) => $resultado.textContent = resultado)
            .catch((err) => $resultado.textContent = `Hubo un error: ${err}`);


    
    });


}

