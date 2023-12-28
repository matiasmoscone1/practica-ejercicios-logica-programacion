

//114. Web Workers: a. Crea un Web Worker que realice cálculos pesados en segundo plano 
//sin afectar la interfaz de usuario principal.
//b. Implementa la comunicación entre la interfaz de usuario y un Web Worker.

export default function webWorker(){

    let worker = new Worker("./webWorkers/complemento-114.js");
    worker.postMessage({message: "Hola desde hilo principal"});
        

    //console.log(worker);

    window.addEventListener("message", (e) => {
        console.log(`El mensaje es: ${e.data}`);
        
        window.postMessage({message: "Hola desde el web Worker"});
    });

    console.log(worker);

    console.log(window);

}

