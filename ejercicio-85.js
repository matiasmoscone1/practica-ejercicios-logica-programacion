
//85. Crea una clase Playlist que pueda agregar canciones, eliminar canciones
// y reproducir canciones aleatoriamente.

export default function ejercicioPlaylist(playlist, btnReproducir, btnParar, resultado, btnAgregarUno, btnAgregarDos, btnAgregarTres){

    const $lista = document.querySelector(playlist);

    class Playlist{
        constructor(){
            this.canciones = [];
        }

        agregarCancion(cancion){
            if(this.canciones.length < 3){
                this.canciones.push(cancion);
            }
        }



    }

    const instanciaPlaylist = new Playlist();

    document.addEventListener("click", (e) => {
        if(e.target.matches(btnAgregarUno)){
            instanciaPlaylist.agregarCancion("Cancion 1");
        }else if(e.target.matches(btnAgregarDos)){
            instanciaPlaylist.agregarCancion("Cancion 2");
        }else if(e.target.matches(btnAgregarTres)){
            instanciaPlaylist.agregarCancion("Cancion 3");
        }

        $lista.innerHTML = `[${instanciaPlaylist.canciones.map((cancion) => {
            return `${cancion}`
        }).join(", ")}]`


        console.log(instanciaPlaylist.canciones);
    });




}
