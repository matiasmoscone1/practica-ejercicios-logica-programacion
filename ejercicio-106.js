
//106. Crea un script en javascript que permita cambiar el fondo de la pagina web con botones,
// es decir modo oscuro y claro.


export default function cambiarFondo(btnOscuro, btnClaro){

    const $btnOscuro = document.querySelector(btnOscuro);
    const $btnClaro = document.querySelector(btnClaro);

    let flag = true;



    console.log(localStorage.getItem("color"));

    if(flag){
        localStorage.setItem("color", "white");
    }else{
        localStorage.setItem("color", "black");
    }

    $btnOscuro.addEventListener("click", () => {
        
    
        const colorFondo = localStorage.getItem("color");

        if(colorFondo === "white"){
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#FFFFFF";
            localStorage.setItem("color", "black");
        }else{
            document.body.style.backgroundColor = "#FFFFFF";
            document.body.style.color = "#000000";
            localStorage.setItem("color", "white");     
        }
        
    
    
    });

    /*
    $btnClaro.addEventListener("click", () => {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";     
    });*/





}




