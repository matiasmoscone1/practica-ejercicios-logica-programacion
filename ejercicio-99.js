
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

    //funcion que determina si un numero es primo o no
    const esPrimo = (num) => {
        //si es 0 o 1, no es primo
        if(num === 0 || num === 1){
            return false;
        }
        //se utiliza i * i para optimizar el calculo de si un nro es primo o no
        for(let i = 2; i * i <= num; i++){
            //divide el numero sobre el iterador y verifica si el resto da 0, si da 0, no es primo
            if(num % i === 0){
                return false;
            }
        }
        //retorna el numero primo
        return true;
    }

    //filtra los numeros primos, se le pasa por parametro un array de numeros
    const filtraPrimos = (arr) => {
        //utiliza reduce para filtrar
        const arrayReducido = arr.reduce((acc, val) => {
            //a cada numero del array lo filtra si es primo o no llamando a la funcion
            if(esPrimo(val)){
                //si es primo, se agrega al array acc
                acc.push(val);
            }
            //devuelve el array con numeros primos
            return acc;
            //se inicializa acc como array vacio
        }, []);
        //devuelve el array reducido
        return arrayReducido;
    }
    
    //capta el evento click del boton Generar
    $btnGenerar.addEventListener("click", () => {        
        //toma el valor del input escrito por el usuario
        const $inputNum = document.querySelector(input).value;
        //constante que llama a la funcion generadora de numeros
        const res = generaNumeros($inputNum);
        //console.log(res);

        //muestra los numeros generados en pantalla
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

