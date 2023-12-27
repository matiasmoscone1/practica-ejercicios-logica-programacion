

//114. Web Workers: a. Crea un Web Worker que realice cálculos pesados en segundo plano 
//sin afectar la interfaz de usuario principal.
//b. Implementa la comunicación entre la interfaz de usuario y un Web Worker.

export default function webWorker(){

    let worker = new Worker({mensaje: "Hola muy buenos dias!!!"});

    console.log(worker);


}

