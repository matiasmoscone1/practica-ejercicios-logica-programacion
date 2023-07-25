

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


        switch(eligeAleatorio){
            case 0: 
                document.getElementById("check-a").textContent = "A. Argentina";
                document.getElementById("check-b").textContent = "B. Bolivia";
                document.getElementById("check-c").textContent = "C. Ecuador";  
                break;
            case 1: 
                document.getElementById("check-a").textContent = "A. Antofagasta";
                document.getElementById("check-b").textContent = "B. Santiago de Chile";
                document.getElementById("check-c").textContent = "C. Concepción";
                break;
            case 2: 
                document.getElementById("check-a").textContent = "A. 1502";
                document.getElementById("check-b").textContent = "B. 1492";
                document.getElementById("check-c").textContent = "C. 1488";
                break;
            case 3: 
                document.getElementById("check-a").textContent = "A. 85'";
                document.getElementById("check-b").textContent = "B. 100'";
                document.getElementById("check-c").textContent = "C. 90'";
                break;
            case 4: 
                document.getElementById("check-a").textContent = "A. 100";
                document.getElementById("check-b").textContent = "B. 1000";
                document.getElementById("check-c").textContent = "C. 10";
                break;
        }

        

    });

}




