import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";

//122. Editor de Texto en Tiempo Real: Crea un editor de texto colaborativo en tiempo real 
//utilizando tecnologías como WebSockets. Múltiples usuarios deben poder editar el mismo 
//documento simultáneamente.


export default function editorTexto(editor){

    const $editor = document.querySelector(editor);

    const socket = io();

    $editor.addEventListener("input", () => {

        const content = $editor.innerHTML;

        socket.emit("text-edit", { content });

    });

    socket.on("text-update", (data) => {
        $editor.innerHTML = data.content;
    });



}


