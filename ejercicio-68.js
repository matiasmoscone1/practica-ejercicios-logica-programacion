


//68. Calculadora interactiva: Crea una calculadora en la que los usuarios puedan hacer 
//clic en los botones numéricos y operadores para realizar cálculos. Muestra los 
//resultados en tiempo real.

export default function calculadoraInteractiva(divCalc, calcular, limpiar, resultado){
    

    //Creando variables que seran utilizadas para la implementacion de la logica del programa
    let primerNum = "";
    let segundoNum = "";
    const operador = /[+\-*\/]/;
    let ope = "";
    let res = 0;

    //Creando variables refenrenciales al DOM
    const $divCalc = document.querySelector(divCalc);
    const $btnCalcular = document.querySelector(calcular);
    const $btnLimpiar = document.querySelector(limpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del div que contiene adentro la calculadora
    $divCalc.addEventListener("click", (e) => {
        //Si el click es en uno de los botones de la calculadora
        if(e.target.matches("button")){
            //guarda el contenido de texto en una variable llamada "contenido"
            const contenido = e.target.textContent;
            //verifica si el contenido es un simbolo + - * / gracias a la exp Regular previamente
            //declarada
            if(!operador.test(contenido)){
                //si el ope es una cadena de texto vacia, significa que no hay operador por lo
                //tanto los botones que se apreten seran el "primer numero"
                if(ope === ""){
                    primerNum += contenido;
                //Si hay un operador de por medio, los botones que se apreten se almacenaran
                //en el "segundo numero"
                }else{
                    segundoNum += contenido;
                }
            }else{
                //Si se verifica que en el contenido hay un simbolo, se guarda en la variable 
                //ope ese simbolo para luego realizar los calculos
                ope = contenido;
            }
        }
        //console.log(primerNum);
        //console.log(segundoNum);
        //console.log(ope);
        //Muestra en el DOM los botones que se van apretando
        $resultado.textContent = `${primerNum} ${ope} ${segundoNum} = ${res}`;

    });

    //Captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {

        //Se crea un switch para la variable ope
        switch(ope){
            //En cada caso particular se calcula segun el simbolo que sea "ope"
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
    
        //console.log(res);
        //Muestra dinamicamente el resultado en el DOM
        $resultado.textContent = `${primerNum} ${ope} ${segundoNum} = ${res}`;
    });

    //captando evento click del boton limpiar
    $btnLimpiar.addEventListener("click", () => {
        //restablece todas las variables al valor inicial
        primerNum = "";
        segundoNum = "";
        ope = "";
        res = 0;
        //limpia el resultado en el DOM
        $resultado.textContent = " ";
    });


}




