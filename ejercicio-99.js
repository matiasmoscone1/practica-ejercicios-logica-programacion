
//99. Cálculo de números primos: Escribe una función que genere números primos utilizando 
//programación funcional. Puedes utilizar un generador o una función que genere una 
//secuencia infinita de números y luego use filter para encontrar los números primos.


export default function generadorPrimos(numeros, input, btnGenerar, btnFiltrar, btnLimpiar, resultado){


    //creando variables referenciales al DOM
    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $btnGenerar = document.querySelector(btnGenerar);
    const $numeros = document.querySelector(numeros);
    const $resultado = document.querySelector(resultado);


    //funcion que genera numeros sucesivos, se pasa por parametro el limite de numeros
    const generaNumeros = (num) => {
        //se crea un array vacio donde se almacenaran los numeros
        let acc = [];
        //bucle for que itera desde 0 hasta el limite de numeros
        for(let i = 0; i <= num; i++){
            //se agrega al array vacio todos los numeros iterados
            acc.push(i);
        }
        //se devuelve el array con todos los numeros
        return acc;
    }

    const esPrimo = (num) => {
        if(num === 0 || num === 1){
            return false;
        }
        //se utiliza i * i para optimizar el calculo de si un nro es primo o no
        for(let i = 2; i * i <= num; i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }

    const filtraPrimos = (arr) => {
        const arrayReducido = arr.reduce((acc, val) => {
            if(esPrimo(val)){
                acc.push(val);
            }
            return acc;
        }, []);
        return arrayReducido;
    }
    
    $btnGenerar.addEventListener("click", () => {        
        const $inputNum = document.querySelector(input).value;
        const res = generaNumeros($inputNum);
        //console.log(res);

        $numeros.textContent = `${res.join(", ")}`;

        $btnFiltrar.addEventListener("click", () => {
            const respuesta = filtraPrimos(res);
            $resultado.textContent = `El resultado es: ${respuesta.join(", ")}`;
        }) 
       
        
        //console.log(respuesta);
    });

    $btnLimpiar.addEventListener("click", () => {
        document.querySelector(input).value = "";
        $numeros.textContent = "";
        $resultado.textContent = "";
    });


}

