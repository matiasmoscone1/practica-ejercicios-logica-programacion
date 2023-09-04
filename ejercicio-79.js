

//79. Crea una clase CuentaBancaria con propiedades para saldo y un método para 
//depositar dinero.


export default function depositarDinero(cuenta, input, btnDepositar, btnLimpiar){

    const $cuenta = document.querySelector(cuenta);
    const $btnDepositar = document.querySelector(btnDepositar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    $cuenta.textContent = `Cuenta: $0`;

    class CuentaBancaria{
        constructor(saldo){
            this.saldo = saldo;
        }

        depositarSaldo(nuevoSaldo){
            this.saldo += parseFloat(nuevoSaldo);
            return (this.saldo);
        }
    }

    const instanciaCuenta = new CuentaBancaria(0);

    $btnDepositar.addEventListener("click", () => {

        const $valorInput = document.querySelector(input).value;

        instanciaCuenta.depositarSaldo($valorInput);

        $cuenta.textContent = `Cuenta: $${instanciaCuenta.saldo}`;
        //console.log(instanciaCuenta.saldo);
        document.querySelector(input).value = "";


    });

    $btnLimpiar.addEventListener("click", () => {
        $cuenta.textContent = `Cuenta: $0`;
        document.querySelector(input).value = "";
    });

}





