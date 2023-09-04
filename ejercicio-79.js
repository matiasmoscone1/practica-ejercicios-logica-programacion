

//79. Crea una clase CuentaBancaria con propiedades para saldo y un método para 
//depositar dinero.


export default function depositarDinero(cuenta, input, btnDepositar, btnLimpiar){

    //creando variables referenciales al DOM
    const $cuenta = document.querySelector(cuenta);
    const $btnDepositar = document.querySelector(btnDepositar);
    const $btnLimpiar = document.querySelector(btnLimpiar);

    //mostrando saldo de cuenta en el DOM
    $cuenta.textContent = `Cuenta: $0`;

    //Creando clase CuentaBancaria
    class CuentaBancaria{
        //con un atributo que es saldo
        constructor(saldo){
            this.saldo = saldo;
        }

        //creando metodo que toma por parametro un valor y lo adiciona al saldo ya creado
        depositarSaldo(nuevoSaldo){
            this.saldo += parseFloat(nuevoSaldo);
            //devuelve el saldo
            return (this.saldo);
        }
    }

    //creando instancia de la clase
    const instanciaCuenta = new CuentaBancaria(0);

    //captando el evento click del boton Depositar
    $btnDepositar.addEventListener("click", () => {

        //tomando el valor del input escrito por el usuario
        const $valorInput = document.querySelector(input).value;

        //llamando al metodo depositarSaldo y pasandole por parametro el valor del input
        instanciaCuenta.depositarSaldo($valorInput);

        //Mostrando en el DOM el nuevo saldo
        $cuenta.textContent = `Cuenta: $${instanciaCuenta.saldo}`;
        //console.log(instanciaCuenta.saldo);
        //limpiando una vez que se clickee en "Depositar" el valor del input
        document.querySelector(input).value = "";


    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el saldo en el DOM y el valor del input
        $cuenta.textContent = `Cuenta: $0`;
        document.querySelector(input).value = "";
    });

}





