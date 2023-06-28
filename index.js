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
import eliminarDuplicados from "./ejercicio-20.js";
import contarVocales from "./ejercicio-21.js";
import palabrasAnagramas from "./ejercicio-22.js";
import invertirCadena from "./ejercicio-23.js";
import palabraLarga from "./ejercicio-24.js";
import convertirNumeros from "./ejercicio-25.js";
import numeroPerfecto from "./ejercicio-26.js";
import generarPatron from "./ejercicio-27.js";
import patronNumAscendentes from "./ejercicio-28.js";
import generarPatronEspiral from "./ejercicio-29.js";
import generarNumerosPrimos from "./ejercicio-30.js";
import conversionNumerosRomanos from "./ejercicio-31.js";
import generarContrasenia from "./ejercicio-32.js";
import contadorPulsaciones from "./ejercicio-33.js";
import contadorVocalesTeclado from "./ejercicio-34.js";
import adivinaLaTecla from "./ejercicio-35.js";
import bloqueadorDeTeclas from "./ejercicio-36.js";
import moverPelota from "./ejercicio-37.js";
import contadorTeclado from "./ejercicio-38.js";
import formTeclado from "./ejercicio-39.js";
import simonSays from "./ejercicio-40.js";
import textoEnVivo from "./ejercicio-41.js";


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
    fibonacci(".btn-ej-19", ".resultado-ej-19");
    eliminarDuplicados(".array-ej-20",".btn-ej-20",".resultado-ej-20");
    contarVocales(".input-vocales", ".btn-ej-21", ".resultado-ej-21");
    palabrasAnagramas(".input-anagrama-1", ".input-anagrama-2", ".btn-ej-22", ".resultado-ej-22");
    invertirCadena(".input-invertir-cadena", ".btn-ej-23", ".resultado-ej-23");
    palabraLarga(".input-palabra-larga", ".btn-ej-24", ".resultado-ej-24");
    convertirNumeros(".input-binario-decimal", ".btn-ej-25", ".resultado-ej-25");
    numeroPerfecto(".input-numero-perfecto", ".btn-ej-26", ".resultado-ej-26");
    generarPatron(".generar-triangulo", ".generar-cuadrado", ".limpiar-patron", ".resultado-ej-27");
    patronNumAscendentes(".generar-patron-num-ascendente", ".limpiar-patron-ej-28", ".resultado-ej-28");
    generarPatronEspiral(".generar-patron-num-espiral", ".limpiar-patron-ej-29", ".resultado-ej-29");
    generarNumerosPrimos(".generar-numeros-primos", ".btn-generar-numeros-primos", ".limpiar-ej-30", ".resultado-ej-30");
    conversionNumerosRomanos(".numeros-romanos", ".btn-numeros-romanos", ".limpiar-ej-31", ".resultado-ej-31");
    generarContrasenia(".input-generador-contrasenia",".btn-generar-contrasenia", ".limpiar-ej-32", ".resultado-ej-32");
    contadorPulsaciones(".contador-ej-33", ".limpiar-ej-33", ".resultado-ej-33");
    contadorVocalesTeclado(".contador-ej-34", ".limpiar-ej-33", ".resultado-ej-34");
    adivinaLaTecla(".generador-de-letra", ".mostrador-de-letra",".limpiar-ej-35", ".mostrar-letra-ej-35",".resultado-ej-35");
    bloqueadorDeTeclas(".jugar-ej-36", ".stop-ej-36", ".letras-bloqueadas", ".input-ej-36", ".limpiar-input-ej-36");
    moverPelota(".btn-jugar-ej-37",".btn-stop-ej-37",".stage-ej-37",".bola-ej-37");
    contadorTeclado(".btn-jugar-ej-38", ".btn-stop-ej-38", ".resultado-ej-38");
    formTeclado(".form-ej-39", ".input-ej-39", ".resultado-ej-39");
    simonSays(".btn-jugar-ej-40", ".btn-stop-ej-40", ".contador-simon-says",".simon-says");
    textoEnVivo();
    
    
});
