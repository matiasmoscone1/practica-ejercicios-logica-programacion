
//105. Contador de visitas: Implementa un contador de visitas en una página web 
//utilizando localStorage. Al cargar la página, verifica si ya existe un contador 
//en localStorage. Si no existe, inicializa el contador en 1; si existe, 
//incrementa el contador. Muestra el contador en la página.

export default function contadorVisitas(resultado, btnLimpiar){

    const $resultado = document.querySelector(resultado);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    let count = 1;
    
    //localStorage.clear();


    window.addEventListener("beforeunload", () => {

        const contador = (parseInt(localStorage.getItem("Contador")) + 1)  || (parseInt(count) + 1);

        localStorage.setItem("Contador", contador);

        
        //console.log("SE RECARGO 1 VEZ");
    });

    const contador = localStorage.getItem("Contador");

    $resultado.textContent = `Visitas: ${contador}`;
    

    //console.log(contador);





}


