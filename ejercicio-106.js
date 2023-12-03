
//106. Crea un script en javascript que permita cambiar el fondo de la pagina web con botones,
// es decir modo oscuro y claro.


export default function cambiarFondo(btnFondo){

    //Creando variables referenciales al DOM
    const $btnFondo = document.querySelector(btnFondo);

    //captando evento click del boton Fondo
    $btnFondo.addEventListener("click", () => {
    
        //obteniendo el color del localStorage o si no hay, setear el color white como primera instancia
        const colorFondo = localStorage.getItem("color") || localStorage.setItem("color", "white");

        //si la variable color es "white", se cambia todo el fondo a black, y setea el localStorage en black
        if(colorFondo === "white"){
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#FFFFFF";
            localStorage.setItem("color", "black");
        //si no es "white", se cambia todo el fondo a white y setea el localStorage en white
        }else{
            document.body.style.backgroundColor = "#FFFFFF";
            document.body.style.color = "#000000";
            localStorage.setItem("color", "white");     
        }
        
    
    
    });





}




