
//92. Composición de funciones: Escribe una función que tome una serie de funciones y 
//las componga en una sola función.

export default function composicionFunciones(inputNum, btnCalcular, btnLimpiar, resultado){

    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const funcionComp = (...funcion) => {
        return(input) => {
            return funcion.reduce((acc, func) => func(acc), input);
        }
    } 

    const sumarNum = (num) => {
        return num + 5;
    }

    const restarNum = (num) => {
        return num - 2;
    }

    const multNum = (num) => {
        return num * 10;
    }

    const divNum = (num) => {
        return num / 2;
    }



    $btnCalcular.addEventListener("click", () => {
        const $inputNum = document.querySelector(inputNum).value;

        const res = funcionComp(sumarNum, restarNum, multNum, divNum);

        const resultado = res($inputNum);
        console.log(resultado);
        //console.log($inputNum);

    });

    $btnLimpiar.addEventListener("click", () => {
        document.querySelector(inputNum).value = "";
        $resultado.textContent = "";
    });


}

