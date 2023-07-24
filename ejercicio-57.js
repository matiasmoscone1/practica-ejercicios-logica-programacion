

//57. Juego de Preguntas y Respuestas: Crea un juego de preguntas y respuestas 
//con una variedad de categorías y niveles de dificultad.

export default function juegoPreguntasRespuestas(btnFacil, btnDificil, btnLimpiar, pregunta, check1, check2, check3){

    const $btnFacil = document.querySelector(btnFacil);
    const $btnDificil = document.querySelector(btnDificil);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $pregunta = document.querySelector(pregunta);
    const $check1 = document.querySelector(check1);
    const $check2 = document.querySelector(check2);
    const $check3 = document.querySelector(check3);
    

    const preguntasFacil = ["¿Que pais esta entre Peru y Colombia?", "¿Cual es la capital de Chile?",
        "¿En que año se descubrio America?", "¿Cuanto tiempo dura un partido de futbol?",
        "¿Cuantos centimetros son 1 metro?"];

    const preguntasDificil = [];

    $btnFacil.addEventListener("click", () => {
        let eligeAleatorio = Math.floor(Math.random() * 5);
        
        $pregunta.textContent = `${preguntasFacil[eligeAleatorio]}`;

    });

}




