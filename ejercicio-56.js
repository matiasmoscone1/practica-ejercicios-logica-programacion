


//56. Hacer como una cuenta regresiva con distintos codigos como x ejemplo de whatsapp 
//cuando pedis el numero para vincualr y te nmandan un codigo por 2 minutos


export default function codigoWhatsapp(btnGenerar, btnLimpiar, timer, resultado){


    const $btnGenerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    $btnGenerar.addEventListener("click", () => {
        let tiempo = setInterval(() => {
            console.log("asd");
        }, 200000);

    });


}

