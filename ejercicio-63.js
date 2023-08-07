


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

    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    $btnCalcular.addEventListener("click", () => {
        const $peso = document.querySelector(peso).value;
        const $tamano = document.querySelector(tamano).value;
        const $distancia = document.querySelector(distancia).value;

        const objPeso = {
            liviano: 500,
            mediano: 800,
            pesado: 1300
        };
        const objTamano = {
            pequeno: 200,
            mediano: 500,
            grande: 800
        };
        const objDistancia = {
            cerca: 400,
            mitad: 700,
            lejos: 1100
        };

        const costoPeso = objPeso[$peso];
        const costoTamano = objTamano[$tamano];
        const costoDistancia = objDistancia[$distancia];

        let costoTotal = costoPeso + costoTamano + costoDistancia;

        $resultado.textContent = `El costo total del envio es: $${costoTotal}`;


        //console.log($peso);
        //console.log($tamano);
        //console.log($distancia);
        //console.log(costoTotal);

    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = " ";
        document.querySelector(peso).value = " ";
        document.querySelector(tamano).value = " ";
        document.querySelector(distancia) = " ";
    });



}







