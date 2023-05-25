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
import calcularPromedio from "./ejercicio-13.js";
import determinarBisiesto from "./ejercicio-14.js";
import determinarDias from "./ejercicio-15.js";
import cambiarTemperaturas from "./ejercicio-16.js";
import factorial from "./ejercicio-17.js";
import ordenarPalabras from "./ejercicio-18.js";
import fibonacci from "./ejercicio-19.js";

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
    contarMayorMenor(".array-ej-12", ".btn-ej-12-mayor", ".btn-ej-12-menor", ".resultado-ej-12");
    calcularPromedio(".array-ej-13", ".btn-ej-13-promedio", ".resultado-ej-13");
    determinarBisiesto(".input-ej-14", ".btn-ej-14", ".resultado-ej-14");
    determinarDias(".fecha-inicial", ".fecha-final", ".btn-ej-15", ".resultado-ej-15");
    cambiarTemperaturas(".celsius", ".btn-celsius", ".farenheit", ".btn-farenheit", ".resultado-ej-16");
    factorial(".input-factorial", ".btn-factorial", ".resultado-ej-17");
    ordenarPalabras(".input-palabras-ordenadas", ".btn-palabras-ordenadas", ".resultado-ej-18");
    fibonacci(".resultado-ej-19");

});
