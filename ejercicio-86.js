

//86. Desarrolla una clase Vehículo con propiedades para marca, modelo, color y un método para 
//calcular la antigüedad del vehículo.

export default function calculaVehiculo(marca, modelo, color, btnCalcular, btnLimpiar, resultado){


    //creando variables referenciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    //creando clase Vehiculo
    class Vehiculo{
        //construyendo la clase con los atributos, marca, modelo y color
        constructor(marca, modelo, color){
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
        }

        //creando metodo que calcula la antiguedad del auto, pasa por parametro el modelo del auto
        calcularAntiguedad(anio){
            //crea una nueva fecha para sacar los años actuales
            const fecha = new Date();
            //realiza un calculo de los años actuales menos el modelo y da la antiguedad del auto
            const resultado = fecha.getFullYear() - anio;
            return(resultado);
        }

    }



    //captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {

        //toma los valores del input escrito por el usuario
        const mar = document.querySelector(marca).value;
        const mod = document.querySelector(modelo).value;
        const col = document.querySelector(color).value;

        //crea la instancia de la clase y le pasa por parametros el valor de los inputs
        const instanciaVehiculo = new Vehiculo(mar, mod, col);

        //console.log(instanciaVehiculo);

        //crea una variable res que almacenara el resultado del metodo llamado 
        const res = instanciaVehiculo.calcularAntiguedad(instanciaVehiculo.modelo);

        //muestra en el DOM el resultado del metodo
        $resultado.textContent = `El vehiculo posee una antiguedad de: ${res} años.`;

    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limipa los inputs del usuario y el resultado del DOM
        document.querySelector(marca).value = "";
        document.querySelector(modelo).value = "";
        document.querySelector(color).value = "";
        $resultado.textContent = "";

    });



}



