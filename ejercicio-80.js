

//80. Implementa una clase Calculadora con métodos para sumar, restar, multiplicar y dividir.


export default function calculadoraClase(input1, input2, btnSuma, btnResta, btnMulti, btnDivi, resultado){


    document.addEventListener("click", (e) => {

        if(e.target.matches(btnSuma)){
            console.log("hola");
        }else if(e.target.matches(btnResta)){
            console.log("resta");
        }else if(e.target.matches(btnMulti)){
            console.log("multi");
        }else if(e.target.matches(btnDivi)){
            console.log("divi");
        }


    });




    
}




