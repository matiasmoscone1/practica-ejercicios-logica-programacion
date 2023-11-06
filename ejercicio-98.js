

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

    //capta evento click del boton Comenzar y se le asigna una callback asincrona
    $btnComenzar.addEventListener("click", async () => {
        //toma el valor del input escrito por el usuario
        const $inputText = document.querySelector(input).value;

        //la funcion asincrona anterior no se ejecutara hasta que esta funcion haya sido
        //ejecutada correctamente, se le pasa el valor del input por parametro
        await creaPromesa($inputText)
        //luego si todo sale bien, la promesa devuelve el resultado correctamente
            .then((resultado) => $resultado.textContent = resultado)
        //sino muestra el error en el DOM
            .catch((err) => $resultado.textContent = `Hubo un error: ${err}`);
    });

    //capta evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el resultado en el DOM y el input 
        $resultado.textContent = "";
        document.querySelector(input).value = "";
    });

}

