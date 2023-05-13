import numeroParImpar from "./ejercicio-1.js";
import palabraPalindromo from "./ejercicio-2.js";
import numeroPrimo from "./ejercicio-3.js";
import sumaNumeros from "./ejercicio-4.js";
import contarClicks from "./ejercicio-5.js";
import determinarDigitos from "./ejercicio-6.js";
import determinarPalabra from "./ejercicio-7.js";
import determinarOracion from "./ejercicio-8.js";
import arrayMayorMenor from "./ejercicio-9.js";
import fizzBuzz from "./ejercicio-10.js";
import contarLetras from "./ejercicio-11.js";
import contarMayorMenor from "./ejercicio-12.js";

document.addEventListener("DOMContentLoaded", () => {

    numeroParImpar("#numero-par-impar", "#btn-par-impar", ".resultado-par-impar");
    palabraPalindromo(".palabra-palindromo", ".btn-palindromo", ".resultado-palindromo");
    numeroPrimo(".numero-primo", ".btn-primo", ".resultado-primo");
    sumaNumeros(".numero-suma", ".btn-suma", ".resultado-suma");
    contarClicks(".btn-click-incrementar",".btn-click-resetear",".btn-click-decrementar", ".resultado-clicks");
    determinarDigitos(".numero-digito", ".btn-digitos" ,".resultado-digitos");
    determinarPalabra(".palabra-letras", ".btn-palabra", ".resultado-palabra");
    determinarOracion(".palabra-oracion", ".btn-oracion", ".resultado-oracion");
    arrayMayorMenor(".array-mayor-menor", ".btn-array-mayor", ".btn-array-menor");
    fizzBuzz(".fizz-buzz");
    contarLetras(".contar-letras", ".btn-contar-letras", ".resultado-contar-letras");
    contarMayorMenor(".")

    
});
