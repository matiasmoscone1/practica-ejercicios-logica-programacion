


//68. Calculadora interactiva: Crea una calculadora en la que los usuarios puedan hacer 
//clic en los botones numéricos y operadores para realizar cálculos. Muestra los 
//resultados en tiempo real.

export default function calculadoraInteractiva(divCalc ,suma, resta, multi, divi, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero, resultado){
    const $divCalc = document.querySelector(divCalc);
    const $resultado = document.querySelector(resultado);
/*
    const $suma = document.querySelector(suma);
    const $resta = document.querySelector(resta);
    const $multi = document.querySelector(multi);
    const $divi = document.querySelector(divi);
*/
   
    let primerNum = "0";
    let segundoNum = "0";

    $divCalc.addEventListener("click", (e) => {

        
        if(e.target.matches(uno)){
            primerNum += 1;
            parseInt(primerNum);
        }
        if(e.target.matches(dos)){
            primerNum += 2;
            parseInt(primerNum);
        }


        $resultado.textContent = `${parseInt(primerNum)}`;

        console.log(typeof(parseInt(primerNum)));

        if(e.target.matches(suma)){
            if(primerNum){
                $divCalc.addEventListener("click", (e) => {
                    if(e.target.matches(uno)){
                        segundoNum += 1;
                        parseInt(segundoNum);
                    }
                    if(e.target.matches(dos)){
                        segundoNum += 2;
                        parseInt(segundoNum);
                    }
                });
            }
            $resultado.textContent = `${primerNum} + ${segundoNum}`;
        }


    });

   




}




