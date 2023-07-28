

//57. Juego de Preguntas y Respuestas: Crea un juego de preguntas y respuestas 
//con una variedad de categorías y niveles de dificultad.

export default function juegoPreguntasRespuestas(btnFacil, btnDificil, btnLimpiar, pregunta, resultado, check1, check2, check3){

    const $btnFacil = document.querySelector(btnFacil);
    const $btnDificil = document.querySelector(btnDificil);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $pregunta = document.querySelector(pregunta);
    const $check1 = document.querySelector(check1);
    const $check2 = document.querySelector(check2);
    const $check3 = document.querySelector(check3);
    const $resultado = document.querySelector(resultado);
    
    const preguntasFacil = ["¿Que pais esta entre Peru y Colombia?", "¿Cual es la capital de Chile?",
        "¿En que año se descubrio America?", "¿Cuanto tiempo dura un partido de futbol?",
        "¿Cuantos centimetros son 1 metro?"];

    const preguntasDificil = ["¿En qué países se encuentra el Everest?", "¿Quién pintó la Capilla Sixtina?",
        "¿En qué mes el Sol está más cerca de la Tierra?", "¿Qué selección ha ganado más mundiales de fútbol?",
        "¿A qué grupo musical pertenece la canción 'Master of Puppets'?"];

    let ultimoAleatorio = 0;
    let eligeAleatorio;
    $btnFacil.addEventListener("click", () => {
        
        //let eligeAleatorio = Math.floor(Math.random() * 5);

        

        do{
            eligeAleatorio = Math.floor(Math.random() * 5);
        }while(eligeAleatorio === ultimoAleatorio);
        $pregunta.textContent = `${preguntasFacil[eligeAleatorio]}`;

        ultimoAleatorio = eligeAleatorio;

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


    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener("click", () => {
          if (checkbox.checked) {
            // Desmarca los otros checkboxes cuando se hace clic en uno de ellos
            document.querySelectorAll('input[type="checkbox"]').forEach(otherCheckbox => {
              if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
              }
            });
          }
        });
      });


    $check1.addEventListener("click", () => {
        if(eligeAleatorio === 0){
            if($check1.checked){
                //console.log("RESPUESTA INCORRECTA");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }  
        }
        if(eligeAleatorio === 1){
            if($check1.checked){
                //console.log("RESPUESTA INCORRECTA");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }
        }
        if(eligeAleatorio === 2){
            if($check1.checked){
                //console.log("RESPUESTA INCORRECTA");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }
        }
        if(eligeAleatorio === 3){
            if($check1.checked){
                //console.log("RESPUESTA INCORRECTA");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }
        }
        if(eligeAleatorio === 4){
            if($check1.checked){
                //console.log("ACERTADO");
                $resultado.textContent = "ACERTADO!";
            }
        }
    });
    $check2.addEventListener("click", () => {
        if(eligeAleatorio === 0){
            if($check2.checked){
                //console.log("RESPUESTA INCORRECTA");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }  
        }
        if(eligeAleatorio === 1){
            if($check2.checked){
                //console.log("ACERTADO");
                $resultado.textContent = "ACERTADO!";
            }
        }
        if(eligeAleatorio === 2){
            if($check2.checked){
                //console.log("ACERTADO");
                $resultado.textContent = "ACERTADO!";
            }
        }
        if(eligeAleatorio === 3){
            if($check2.checked){
                //console.log("RESPUESTA INCORRECTA");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }
        }
        if(eligeAleatorio === 4){
            if($check2.checked){
                //console.log("RESPUESTA INCORRECTA");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }
        }
    });
    $check3.addEventListener("click", () => {
        if(eligeAleatorio === 0){
            if($check3.checked){
                //console.log("ACERTADO!");
                $resultado.textContent = "ACERTADO!";
            }  
        }
        if(eligeAleatorio === 1){
            if($check3.checked){
                //console.log("RESPUESTA INCORRECTA!");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }
        }
        if(eligeAleatorio === 2){
            if($check3.checked){
                //console.log("RESPUESTA INCORRECTA");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }
        }
        if(eligeAleatorio === 3){
            if($check3.checked){
                //console.log("ACERTADO");
                $resultado.textContent = "ACERTADO!";
            }
        }
        if(eligeAleatorio === 4){
            if($check3.checked){
                //console.log("RESPUESTA INCORRECTA");
                $resultado.textContent = "RESPUESTA INCORRECTA";
            }
        }
    })





    $btnDificil.addEventListener("click", () => {
     
        let eligeAleatorio;

        do{
            eligeAleatorio = Math.floor(Math.random() * 5);
        }while(eligeAleatorio === ultimoAleatorio);
        $pregunta.textContent = `${preguntasDificil[eligeAleatorio]}`;

        ultimoAleatorio = eligeAleatorio;

        switch(eligeAleatorio){
            case 0: 
                document.getElementById("check-a").textContent = "A. Mongolia y China";
                document.getElementById("check-b").textContent = "B. Nepal y China";
                document.getElementById("check-c").textContent = "C. Italia y Suiza";  
                break;
            case 1: 
                document.getElementById("check-a").textContent = "A. Miguel Ángel";
                document.getElementById("check-b").textContent = "B. Leonardo da Vinci";
                document.getElementById("check-c").textContent = "C. Donatello";
                break;
            case 2: 
                document.getElementById("check-a").textContent = "A. Enero";
                document.getElementById("check-b").textContent = "B. Diciembre";
                document.getElementById("check-c").textContent = "C. Julio";
                break;
            case 3: 
                document.getElementById("check-a").textContent = "A. Alemania";
                document.getElementById("check-b").textContent = "B. Italia";
                document.getElementById("check-c").textContent = "C. Brasil";
                break;
            case 4: 
                document.getElementById("check-a").textContent = "A. Metallica";
                document.getElementById("check-b").textContent = "B. Iron Maiden";
                document.getElementById("check-c").textContent = "C. Megadeth";
                break;
        }
    });



}




