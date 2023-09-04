

//79. Crea una clase CuentaBancaria con propiedades para saldo y un método para 
//depositar dinero.


export default function depositarDinero(cuenta, input, btnDepositar, btnLimpiar){

    const $cuenta = document.querySelector(cuenta);
    const $btnDepositar = document.querySelector(btnDepositar);

    $cuenta.textContent = `Cuenta: 0$`;

    class CuentaBancaria{
        constructor(saldo){
            this.saldo = saldo;
        }

        depositarSaldo(nuevoSaldo){
            saldo += nuevoSaldo;
        }


    }

    $btnDepositar.addEventListener("click", () => {

        const $valorInput = document.querySelector(input).value;

        const instanciaCuenta = new CuentaBancaria;




    });

    console.log();

}


