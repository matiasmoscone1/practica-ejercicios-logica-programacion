

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
                $check1.textContent = "A. Antofagasta";
                $check2.textContent = "B. Santiago de Chile";
                $check3.textContent = "C. Concepción";   
                break;
            case 2: 
                $check1.textContent = "A. 1502";
                $check2.textContent = "B. 1492";
                $check3.textContent = "C. 1488";   
                break;
            case 3: 
                $check1.textContent = "A. 85'";
                $check2.textContent = "B. 100'";
                $check3.textContent = "C. 90'";   
                break;
            case 4: 
                $check1.textContent = "A. 100";
                $check2.textContent = "B. 1000";
                $check3.textContent = "C. 10";   
                break;
        }

    });

}




