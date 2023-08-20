



//72. Crea una función que tome un objeto y devuelva un nuevo objeto con todas las 
//claves y valores intercambiados.


export default function cambiarValores(objeto ,btnCambiar, btnLimpiar){

    const objetoInicial = {
        nombre: "Matias",
        apellido: "Moscone",
        edad: 27,
        profesion: "Desarrollador"
    };


    const $objeto = document.querySelector(objeto);
    const $btnCambiar = document.querySelector(btnCambiar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    $objeto.innerHTML = `${objetoInicial.value}`;

    console.log($objeto);

    $btnCambiar.addEventListener("click", () => {

    });


    
}




