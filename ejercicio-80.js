

//80. Implementa una clase Calculadora con métodos para sumar, restar, multiplicar y dividir.


export default function calculadoraClase(input1, input2, btnSuma, btnResta, btnMulti, btnDivi, resultado){


    class Calculadora{
        constructor(res){
            this.res = res;
        }

        sumar(numero1, numero2){
            this.res = parseFloat(numero1) + parseFloat(numero2);
            return(console.log(this.res));
        }
        restar(numero1, numero2){
            this.res = parseFloat(numero1) - parseFloat(numero2);
            return(console.log(this.res));
        }
        multiplicar(numero1, numero2){
            this.res = parseFloat(numero1) * parseFloat(numero2);
            return(console.log(this.res));
        }
        dividir(numero1, numero2){
            this.res = parseFloat(numero1) / parseFloat(numero2);
            return(console.log(this.res));
        }

    }


    document.addEventListener("click", (e) => {

        const $input1 = document.querySelector(input1).value;
        const $input2 = document.querySelector(input2).value;

        const instancaiCalculadora = new Calculadora;

        if(e.target.matches(btnSuma)){
            console.log("hola");
            instancaiCalculadora.sumar($input1, $input2);
        }else if(e.target.matches(btnResta)){
            console.log("resta");
        }else if(e.target.matches(btnMulti)){
            console.log("multi");
        }else if(e.target.matches(btnDivi)){
            console.log("divi");
        }


    });




    
}




