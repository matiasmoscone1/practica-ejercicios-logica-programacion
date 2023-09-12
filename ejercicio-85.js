
//85. Crea una clase Playlist que pueda agregar canciones, eliminar canciones
// y reproducir canciones aleatoriamente.

export default function ejercicioPlaylist(playlist, btnReproducir, btnParar, resultado, btnAgregarUno, btnAgregarDos, btnAgregarTres){



    class Playlist{
        constructor(){
            this.canciones = [];
        }

        agregarCancion(cancion){
            this.canciones.push(cancion);
        }

    }

    const instanciaPlaylist = new Playlist();

    document.addEventListener("click", (e) => {
        if(e.target.matches(btnAgregarUno)){
            instanciaPlaylist.agregarCancion("Cancion 1");
        }

        console.log(instanciaPlaylist.canciones);
    });




}
