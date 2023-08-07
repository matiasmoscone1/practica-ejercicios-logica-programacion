


//63.Calculadora de precios de envío: Crea una calculadora que estime el precio de envío 
//de un paquete según el peso, tamaño y destino.
// liviano < $500
// mediano > $800
// pesado > 100kg < $1300

//Pequeño - $200
//Mediano - $500
//Grande - $800

// cerca < $400
//  mitad > $700
// lejos > $1100


export default function calcularEnvio(btnCalcular, btnLimpiar, peso, tamano, distancia, resultado){

    //Creando variables referenciales al DOM
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //captando evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {
        //tomando el valor de los input escritos por el usuario
        const $peso = document.querySelector(peso).value;
        const $tamano = document.querySelector(tamano).value;
        const $distancia = document.querySelector(distancia).value;

        //Creando objeto Peso
        const objPeso = {
            liviano: 500,
            mediano: 800,
            pesado: 1300
        };
        //Creando objeto Tamano
        const objTamano = {
            pequeno: 200,
            mediano: 500,
            grande: 800
        };
        //Creando objeto Distancia
        const objDistancia = {
            cerca: 400,
            mitad: 700,
            lejos: 1100
        };

        //Creando variables que almacenaran el valor de la propiedad de cada objeto, dado
        //a lo escrito por el usuario en los respectivos inputs 
        const costoPeso = objPeso[$peso];
        const costoTamano = objTamano[$tamano];
        const costoDistancia = objDistancia[$distancia];

        //Calcula el costo total con las variables creadas anteriormente
        let costoTotal = costoPeso + costoTamano + costoDistancia;

        //Muestra el resultado en el DOM
        $resultado.textContent = `El costo total del envio es: $${costoTotal}`;

    });

    //captando el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //Limpia el resultado en el DOM
        $resultado.textContent = " ";
        //Limpia el valor de los inputs 
        document.querySelector(peso).value = " ";
        document.querySelector(tamano).value = " ";
        document.querySelector(distancia) = " ";
    });



}







