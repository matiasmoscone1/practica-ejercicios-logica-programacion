




//42. Diseña un programa que permita al usuario ingresar una lista de tareas y 
//marcarlas como completadas utilizando la tecla "Espacio".


export default function taskList(btnEmpezar, btnTerminar, btnLimpiar, resultado){

    const $btnEmpezar = document.querySelector(btnEmpezar);
    const $btnTerminar = document.querySelector(btnTerminar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultadoTaskList = document.querySelector(resultado);
    let bloqTaskList = false;

    

    $btnEmpezar.addEventListener("click", () => {
        bloqTaskList = true;
        if(bloqTaskList){
            document.addEventListener("keydown", (e) => {
                if(e.code === "Space"){
                    console.log("ASDASD");
                }
            });
        }    
    });


}










