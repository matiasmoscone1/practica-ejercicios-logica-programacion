
//2. Escribir un programa que lea una cadena de caracteres y determine si es un palíndromo.


export default function palabraPalindromo(palabra, btn, resultado){

    const $btnPalindromo = document.querySelector(btn);

    const $resultadoPalindromo = document.querySelector(resultado);
    
    $btnPalindromo.addEventListener("click", () => {
        const $palabraPalindromo = document.querySelector(palabra).value;
        const nuevaPalabra = $palabraPalindromo.split('').reverse().join('');

        ($palabraPalindromo === nuevaPalabra) 
        ?  $resultadoPalindromo.textContent = `La palabra: "${$palabraPalindromo}" es Palindromo!`
        :  $resultadoPalindromo.textContent = `La palabra: "${$palabraPalindromo}" No es Palindromo!`;

        //console.log(nuevaPalabra);
        //console.log($palabraPalindromo);
    });




}

