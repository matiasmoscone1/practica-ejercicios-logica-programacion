

//86. Desarrolla una clase Vehículo con propiedades para marca, modelo, color y un método para 
//calcular la antigüedad del vehículo.

export default function calculaVehiculo(marca, modelo, color, btnCalcular, btnLimpiar, resultado){


    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    class Vehiculo{
        constructor(marca, modelo, color){
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
        }

        calcularAntiguedad(anio){
            const fecha = new Date();
            const resultado = fecha.getFullYear() - anio;
            return(resultado);
        }



    }



    $btnCalcular.addEventListener("click", () => {


        const mar = document.querySelector(marca).value;
        const mod = document.querySelector(modelo).value;
        const col = document.querySelector(color).value;

        const instanciaVehiculo = new Vehiculo(mar, mod, col);

        //console.log(instanciaVehiculo);

        const res = instanciaVehiculo.calcularAntiguedad(instanciaVehiculo.modelo);

        $resultado.textContent = `El vehiculo posee una antiguedad de: ${res} años.`;


    });




}



