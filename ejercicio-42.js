

//42. Diseña un programa que permita al usuario ingresar una lista de tareas y 
//marcarlas como completadas utilizando la tecla "Espacio".


export default function taskList(btnEmpezar, btnLimpiar){

    //Declarando variables referenciales al DOM
    const $btnEmpezar = document.querySelector(btnEmpezar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    //Declarando variables de bandera para lista de tareas activa y un index que refleja el
    //numero de checkbox a marcar.
    let bloqTaskList = false;
    let index = 1;
    
    //Funcion que controla el evento keyup apretado cuando se le da click al boton empezar
    const keyUpHandler = (e) => {
        //Si el evento de teclado es la barra espaciadora, crea una variable check que referencia
        //cada checkbox del DOM. !e.repeat => sirve para q no se repita el evento mas de 1 vez.
        if(e.code === "Space" && !e.repeat){
            const check = document.querySelector(`.check-${index}`);
            //si check existe, pone el .checked de la checkbox en true
            if(check){
                check.checked = true; 
                //aumenta en 1 el index para que el proximo keyup vaya dirigido a la proxima
                //checkbox
                index++;
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










