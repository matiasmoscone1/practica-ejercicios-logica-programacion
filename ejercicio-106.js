
//106. Crea un script en javascript que permita cambiar el fondo de la pagina web con botones,
// es decir modo oscuro y claro.


export default function cambiarFondo(btnOscuro, btnClaro){

    const $btnOscuro = document.querySelector(btnOscuro);
    const $btnClaro = document.querySelector(btnClaro);

    const colorFondo = localStorage.setItem("color", "white");

    console.log(localStorage.getItem("color"));


    $btnOscuro.addEventListener("click", () => {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#FFFFFF";
    });

    $btnClaro.addEventListener("click", () => {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";     
    });



}




