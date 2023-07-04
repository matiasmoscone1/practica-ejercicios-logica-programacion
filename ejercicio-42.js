




//42. Diseña un programa que permita al usuario ingresar una lista de tareas y 
//marcarlas como completadas utilizando la tecla "Espacio".


export default function taskList(btnEmpezar, btnTerminar, btnLimpiar){

    const $btnEmpezar = document.querySelector(btnEmpezar);
    const $btnTerminar = document.querySelector(btnTerminar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    let bloqTaskList = false;
    let index = 1;
    

    const keyUpHandler = (e) => {
        if(e.code === "Space" && !e.repeat){
            //console.log("ASDASD") 
            const check = document.querySelector(`.check-${index}`);
            if(check){
                check.checked = true; 
                index++;
                console.log(index);
            }
        }
    };


    $btnEmpezar.addEventListener("click", () => {
        bloqTaskList = true;
        document.addEventListener("keyup", keyUpHandler);
    });


    $btnLimpiar.addEventListener("click", (e) => {
        for(let j = 1; j < index; j++){
            const check = document.querySelector(`.check-${j}`);
        if(check){
            check.checked = false;
        }
        }
        index = 1;
        e.preventDefault()
    });


}










