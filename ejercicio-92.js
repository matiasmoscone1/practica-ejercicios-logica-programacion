
//92. Composición de funciones: Escribe una función que tome una serie de funciones y 
//las componga en una sola función.

export default function composicionFunciones(inputNum, btnCalcular, btnLimpiar, resultado){

    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const funcionComp = (...funcion) => {
        return (arg) => {
            funcion.reduce((result, func) => {
                func(result), arg; 
            });
        }
    }

    const sumarNum = (num) => {
        num + 5;
    }

    const restarNum = (num) => {
        num -2;
    }

    const multNum = (num) => {
        num * 10;
    }

    const divNum = (num) => {
        num / 2;
    }


    $btnCalcular.addEventListener("click", () => {
        const $inputNum = document.querySelector(inputNum).value;

        const res = funcionComp(sumarNum($inputNum), restarNum($inputNum), multNum($inputNum), divNum($inputNum));

        console.log(res);

        //console.log($inputNum);

    });



}

