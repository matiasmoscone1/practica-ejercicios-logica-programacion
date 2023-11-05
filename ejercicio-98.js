

//98. Promesa que resuelve después de un tiempo: Crea una función que devuelve una promesa 
//que se resuelve después de un cierto tiempo (por ejemplo, 2 segundos). Luego, usa 
//async/await para esperar la resolución de la promesa y mostrar un mensaje cuando se complete.

export default function devolverPromesa(input, btnComenzar, btnLimpiar, resultado){


    //creando variables referenciales al DOM
    const $btnComenzar = document.querySelector(btnComenzar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    //creando promesa, se le pasa un texto como parametro
    const creaPromesa = (texto) => {
        //retorna la nueva promesa, pasandole por parametro res que significa resolucion
        return new Promise((res) => {
            //despues de los 2 segundos resuelve la promesa
            setTimeout(() => {
                //se resuelve la promesa, mostrando en pantalla el texto pasado por parametro
                res($resultado.textContent = `El resultado es: ${texto}`);
            //se agregan 2000 milisegundos, que son 2 segundos para el timeout
            }, 2000);
        });
    }


    $btnComenzar.addEventListener("click", async () => {
        const $inputText = document.querySelector(input).value;

        await creaPromesa($inputText)
            .then((resultado) => $resultado.textContent = resultado)
            .catch((err) => $resultado.textContent = `Hubo un error: ${err}`);
    
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
        document.querySelector(input).value = "";
    });

}

