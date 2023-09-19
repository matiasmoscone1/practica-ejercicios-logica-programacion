
//85. Crea una clase Playlist que pueda agregar canciones, eliminar canciones
// y reproducir canciones aleatoriamente.

export default function ejercicioPlaylist(playlist, btnReproducir, btnParar, resultado, btnAgregarUno, btnAgregarDos, btnAgregarTres){

    //creando variables referenciales al DOM
    const $lista = document.querySelector(playlist);
    const $btnReproducir = document.querySelector(btnReproducir);
    const $btnParar = document.querySelector(btnParar);
    const $resultado = document.querySelector(resultado);

    //creando clase Playlist
    class Playlist{
        //creando constructor con un array vacio denominado canciones
        constructor(){
            this.canciones = [];
        }

        //creando metodo que pasa por parametro la cancion
        agregarCancion(cancion){
            //si el array canciones es de longitud menor a 3, agrega la cancion
            if(this.canciones.length < 3){
                this.canciones.push(cancion);
            }
        }

        //creando metodo que pasa por parametro la cancion
        borrarCancion(cancion){
            //crea un indice que busca en el array canciones, la cancion
            const index = this.canciones.indexOf(cancion)
            if(index !== -1){
                //si lo encuentra, borra la cancion del array
                this.canciones.splice(index, 1);
            }
        }

    }

    //creando instancia de clase Playlist
    const instanciaPlaylist = new Playlist();

    //captando evento click del documento
    document.addEventListener("click", (e) => {
        //a cada boton que se le haga click va a llamar al metodo correspondiente, ya sea agregar o borrar
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

        //muestra en el DOM el resultado, realizando un mapeo de todo el array de canciones
        //y retornando la cancion agregando una coma para que quede mas estetico
        $lista.innerHTML = `[${instanciaPlaylist.canciones.map((cancion) => {
            return `${cancion}`
        }).join(", ")}]`


        //console.log(instanciaPlaylist.canciones);
    });

    //capta el evento click del boton reproducir
    $btnReproducir.addEventListener("click", () => {

        //crea un numero random del 0 al 2
        const random = Math.floor(Math.random() * 3);
        //console.log(random);

        //muestra en el dom el resultado de que cancion esta sonando 
        $resultado.textContent = `Se esta reproduciendo la cancion: ${instanciaPlaylist.canciones[random]}`;

    });

    //capta el evento click del boton parar
    $btnParar.addEventListener("click", () => {

        //muestra en el dom que el reproductor se ha frenado
        $resultado.textContent = `Se ha frenado el reproductor`;

    });

}
