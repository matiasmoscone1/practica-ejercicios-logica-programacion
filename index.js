import numeroParImpar from "./ejercicio-1.js";
import palabraPalindromo from "./ejercicio-2.js";


document.addEventListener("DOMContentLoaded", () => {

    numeroParImpar("#numero-par-impar", "#btn-par-impar", ".resultado-par-impar");
    palabraPalindromo(".palabra-palindromo", ".btn-palindromo", ".resultado-palindromo");

});
