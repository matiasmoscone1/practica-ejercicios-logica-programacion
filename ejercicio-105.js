
//105. Contador de visitas: Implementa un contador de visitas en una página web 
//utilizando localStorage. Al cargar la página, verifica si ya existe un contador 
//en localStorage. Si no existe, inicializa el contador en 1; si existe, 
//incrementa el contador. Muestra el contador en la página.

export default function contadorVisitas(resultado, btnLimpiar){

    //creando variables referenciales al DOM
    const $resultado = document.querySelector(resultado);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    //creando contador inicial
    let count = 0;
    
    //localStorage.clear();


    //escuchando el evento beforeunload (antes de recargar), del objeto window
    window.addEventListener("beforeunload", () => {

        //obteniendo en la variable contador, el "Contador" que ya tiene almacenado el localStorage
        //y sumandole 1, sino tiene nada el localStorage, se le suma 1 igual y queda con valor 1
        const contador = (parseInt(localStorage.getItem("Contador")) + 1)  || (parseInt(count) + 1);

        //guarda en localStorage el "Contador" y se le asigna la variable contador declarada recien
        localStorage.setItem("Contador", contador);

        
        //console.log("SE RECARGO 1 VEZ");
    });


    //crea nuevamente una variable contador pero para obtener la informacion del localStorage
    const contador = localStorage.getItem("Contador");

    //muestra el resultado en el DOM
    $resultado.textContent = `Visitas: ${contador}`;


    //console.log(contador);

    //capta el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el localStorage
        localStorage.clear();
        //recarga la pagina
        location.reload();
    })

    //console.log(location);

}


