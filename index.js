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
import taskList from "./ejercicio-42.js";
import relojDigital from "./ejercicio-43.js";
import filtrarPalabrasCincoLetras from "./ejercicio-44.js";
import personaJovenYMayor from "./ejercicio-45.js";
import convertirDecimalABinario from "./ejercicio-46.js";
import buscarPalabra from "./ejercicio-47.js";
import validacionFecha from "./ejercicio-48.js";
import convertirMetros from "./ejercicio-49.js";
import adivinaElNumero from "./ejercicio-50.js";
import calculoEdad from "./ejercicio-51.js";
import calculadoraMatematica from "./ejercicio-52.js";
import validarContrasenia from "./ejercicio-53.js";
import generadorTarjetasCredito from "./ejercicio-54.js";
import calculadoraPropinas from "./ejercicio-55.js";
import codigoWhatsapp from "./ejercicio-56.js";
import juegoPreguntasRespuestas from "./ejercicio-57.js";
import carritoCompras from "./ejercicio-58.js";
import validacionTarjetaCredito from "./ejercicio-59.js";
import generadorContraseniaAvanzado from "./ejercicio-60.js";


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
    textoEnVivo(".text-area-ej-41", ".resultado-ej-41");
    taskList(".btn-empezar-ej-42", ".btn-limpiar-ej-42");
    relojDigital(".btn-mostrar-ej-43", ".btn-ocultar-ej-43", ".reloj-digita-ej-43")
    filtrarPalabrasCincoLetras(".btn-filtrar-ej-44", ".btn-limpiar-ej-44", ".textarea-ej-44", ".resultado-ej-44");
    personaJovenYMayor(".personas-ej-45", ".btn-mayor-ej-45", ".btn-menor-ej-45", ".btn-limpiar-ej-45", ".resultado-ej-45");
    convertirDecimalABinario(".input-decimal-binario-ej-46", ".btn-ej-46", ".btn-limpiar-ej-46", ".resultado-ej-46");
    buscarPalabra(".text-area-ej-47", ".input-ej-47", ".btn-buscar-ej-47", ".btn-limpiar-ej-47", ".resultado-ej-47");
    validacionFecha(".input-ej-48", ".btn-validar-ej-48", ".btn-limpiar-ej-48", ".resultado-ej-48");
    convertirMetros(".input-ej-49", ".btn-kilometros-ej-49", ".btn-centimetros-ej-49", ".btn-millas-ej-49", ".resultado-ej-49");
    adivinaElNumero(".btn-generar-ej-50", ".btn-limpiar-ej-50", ".form-ej-50", ".input-ej-50", ".resultado-ej-50");
    calculoEdad(".input-ej-51", ".btn-calcular-ej-51", ".btn-limpiar-ej-51", ".resultado-ej-51");
    calculadoraMatematica(".btn-suma-ej-52", ".btn-resta-ej-52", ".btn-multiplicar-ej-52", ".btn-dividir-ej-52", ".btn-limpiar-ej-52", ".input1-ej-52", ".input2-ej-52", ".resultado-ej-52");
    validarContrasenia(".input-ej-53", ".btn-validar-ej-53", ".btn-limpiar-ej-53", ".resultado-ej-53");
    generadorTarjetasCredito(".btn-generar-ej-54", ".btn-limpiar-ej-54", ".resultado-ej-54");
    calculadoraPropinas(".input-monto-ej-55", ".input-porcentaje-ej-55", ".btn-calcular-ej-55", ".btn-limpiar-ej-55", ".resultado-ej-55");
    codigoWhatsapp(".btn-generar-ej-56", ".btn-limpiar-ej-56", ".timer-ej-56", ".codigo-ej-56");
    juegoPreguntasRespuestas(".btn-facil-ej-57", ".btn-dificil-ej-57", ".btn-limpiar-ej-57", ".pregunta-ej-57", ".resultado-ej-57",".check-a", ".check-b", ".check-c");
    carritoCompras(".btn-agregar-1-ej-58", ".btn-agregar-2-ej-58", ".btn-agregar-3-ej-58", ".btn-descuento-1-ej-58", ".btn-descuento-2-ej-58", ".btn-descuento-3-ej-58", ".resultado-ej-58", ".btn-limpiar-ej-58");
    validacionTarjetaCredito(".input-ej-59", ".button-validar-ej-59", ".button-limpiar-ej-59", ".resultado-ej-59");
    generadorContraseniaAvanzado();
    
    

});
