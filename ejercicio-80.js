

//80. Implementa una clase Calculadora con métodos para sumar, restar, multiplicar y dividir.


export default function calculadoraClase(input1, input2, btnSuma, btnResta, btnMulti, btnDivi, resultado){

    //Creando variable referencial al DOM donde mostrara el resultado
    const $resultado = document.querySelector(resultado);
    
    //creando clase Calculadora
    class Calculadora{
        //creando el constructor de la clase, con el atributo "res"
        constructor(res){
            this.res = res;
        }

        //Creando los metodos, que se le pasa por parametro dos numeros
        //luego guarda el calculo de esos dos numeros en el atributo res de la clase
        sumar(numero1, numero2){
            this.res = parseFloat(numero1) + parseFloat(numero2);
            //return(console.log(this.res));
            return($resultado.textContent = `Resultado: ${this.res}`);
        }
        restar(numero1, numero2){
            this.res = parseFloat(numero1) - parseFloat(numero2);
            //return(console.log(this.res));
            return($resultado.textContent = `Resultado: ${this.res}`);
        }
        multiplicar(numero1, numero2){
            this.res = parseFloat(numero1) * parseFloat(numero2);
            //return(console.log(this.res));
            return($resultado.textContent = `Resultado: ${this.res}`);
        }
        dividir(numero1, numero2){
            this.res = parseFloat(numero1) / parseFloat(numero2);
            //return(console.log(this.res));
            return($resultado.textContent = `Resultado: ${this.res}`);
        }
    }

    //captando evento click del documento
    document.addEventListener("click", (e) => {
        //Tomando valores de los input escritos por el usuario
        const $input1 = document.querySelector(input1).value;
        const $input2 = document.querySelector(input2).value;

        //creando una instancia de la clase Calculadora
        const instancaiCalculadora = new Calculadora;

        //si el evento click matchea con el boton sumar, restar, multiplicar o dividir
        //ejecutara el metodo correspondiente de la clase pasandole por parametro 
        //el valor de los inputs
        if(e.target.matches(btnSuma)){
            //console.log("hola");
            instancaiCalculadora.sumar($input1, $input2);
        }else if(e.target.matches(btnResta)){
            //console.log("resta");
            instancaiCalculadora.restar($input1, $input2);
        }else if(e.target.matches(btnMulti)){
            //console.log("multi");
            instancaiCalculadora.multiplicar($input1, $input2);
        }else if(e.target.matches(btnDivi)){
            //console.log("divi");
            instancaiCalculadora.dividir($input1, $input2);
        }


    });




    
}




