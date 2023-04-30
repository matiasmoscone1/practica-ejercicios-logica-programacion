import numeroParImpar from "./ejercicio-1.js";
import palabraPalindromo from "./ejercicio-2.js";
import numeroPrimo from "./ejercicio-3.js";
import sumaNumeros from "./ejercicio-4.js";
import contarClicks from "./ejercicio-5.js";


document.addEventListener("DOMContentLoaded", () => {

    numeroParImpar("#numero-par-impar", "#btn-par-impar", ".resultado-par-impar");
    palabraPalindromo(".palabra-palindromo", ".btn-palindromo", ".resultado-palindromo");
    numeroPrimo(".numero-primo", ".btn-primo", ".resultado-primo");
    sumaNumeros(".numero-suma", ".btn-suma", ".resultado-suma");
    contarClicks(".btn-click-incrementar",".btn-click-resetear",".btn-click-decrementar", ".resultado-clicks");

});
