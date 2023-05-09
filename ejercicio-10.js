

// 10. Programa un fizz buzz, imprimir numeros del 1 al 100, si es multiplo de 3 
// reemplazar el numero por Fizz, si es multiplo de 5 reemplazar el numero por Buzz,
// si es multiplo de 3 y de 5 reemplazar por FizzBuzz

// multiplo 3 = Fizz
// multiplo 5 = Buzz
// multiplo 3 y 5 = FizzBuzz

export default function fizzBuzz(fizzBuzz){

    const $fizzBuzz = document.querySelector(fizzBuzz);
    let num = 0;

    for(let i = 0; i < 100; i++){
        num++;

        if(num % 3 === 0){
            $fizzBuzz.textContent = $fizzBuzz.textContent.replace(num - 1, "Fizz");
        }

        $fizzBuzz.textContent += `${num}, `;
    }


}