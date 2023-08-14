


//68. Calculadora interactiva: Crea una calculadora en la que los usuarios puedan hacer 
//clic en los botones numéricos y operadores para realizar cálculos. Muestra los 
//resultados en tiempo real.

export default function calculadoraInteractiva(divCalc, calcular, limpiar, resultado){
    
    let primerNum = "";
    let segundoNum = "";
    let operador = /[+\-*\/]/;
    let ope = "";
    let res = 0;

    const $divCalc = document.querySelector(divCalc);

    const $btnCalcular = document.querySelector(calcular);
    const $btnLimpiar = document.querySelector(limpiar);
    const $resultado = document.querySelector(resultado);

    $divCalc.addEventListener("click", (e) => {
        if(e.target.matches("button")){
            const contenido = e.target.textContent;
            if(!operador.test(contenido)){
                if(ope === ""){
                    primerNum += contenido;
                }else{
                    segundoNum += contenido;
                }
            }else{
                ope = contenido;
            }
        }
        console.log(primerNum);
        console.log(segundoNum);
        console.log(ope);
        $resultado.textContent = `${primerNum} ${ope} ${segundoNum} = ${res}`;

    });

    $btnCalcular.addEventListener("click", () => {

        switch(ope){
            case "+":
                res = parseInt(primerNum) + parseInt(segundoNum);
                break;
            case "-":
                res = parseInt(primerNum) - parseInt(segundoNum);
                break;
            case "*":
                res = parseInt(primerNum) * parseInt(segundoNum);
                break;
            case "/":
                res = parseInt(primerNum) / parseInt(segundoNum);
                break;
        }
    
        console.log(res);
        
    });



    /*
    $btnCalcular.addEventListener("click", () => {

        switch(ope){
            case "+":
                res = parseInt(primerNum) + parseInt(segundoNum);
                break;
            case "-":
                res = parseInt(primerNum) - parseInt(segundoNum);
                break;
            case "*":
                res = parseInt(primerNum) * parseInt(segundoNum);
                break;
            case "/":
                res = parseInt(primerNum) / parseInt(segundoNum);
                break;
        }
        
        console.log(res);

    });*/








}




