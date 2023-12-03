
//106. Crea un script en javascript que permita cambiar el fondo de la pagina web con botones,
// es decir modo oscuro y claro.


export default function cambiarFondo(btnFondo){

    //Creando variables referenciales al DOM
    const $btnFondo = document.querySelector(btnFondo);

    //console.log(localStorage.getItem("color"));


    //seteando primer color en el localstorage
    localStorage.setItem("color", "white");


    
    $btnFondo.addEventListener("click", () => {
    
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





}




