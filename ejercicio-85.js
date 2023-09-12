
//85. Crea una clase Playlist que pueda agregar canciones, eliminar canciones
// y reproducir canciones aleatoriamente.

export default function ejercicioPlaylist(playlist, btnReproducir, btnParar, resultado, btnAgregarUno, btnAgregarDos, btnAgregarTres){

    const $lista = document.querySelector(playlist);
    const $btnReproducir = document.querySelector(btnReproducir);
    const $btnParar = document.querySelector(btnParar);
    const $resultado = document.querySelector(resultado);

    class Playlist{
        constructor(){
            this.canciones = [];
        }

        agregarCancion(cancion){
            if(this.canciones.length < 3){
                this.canciones.push(cancion);
            }
        }

        borrarCancion(cancion){
            this.canciones = this.canciones.filter((c) => {
                return c !== cancion;
            });
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
        }else if(e.target.matches(".btn-borrar-uno-ej-85")){
            instanciaPlaylist.borrarCancion("Cancion 1");
        }else if(e.target.matches(".btn-borrar-dos-ej-85")){
            instanciaPlaylist.borrarCancion("Cancion 2");
        }else if(e.target.matches(".btn-borrar-tres-ej-85")){
            instanciaPlaylist.borrarCancion("Cancion 3");
        }

        $lista.innerHTML = `[${instanciaPlaylist.canciones.map((cancion) => {
            return `${cancion}`
        }).join(", ")}]`


        console.log(instanciaPlaylist.canciones);
    });




}
