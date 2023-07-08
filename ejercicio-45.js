


//45. Crear una función que tome un array de objetos como parámetro (cada objeto representa 
//una persona con propiedades "nombre" y "edad") y devuelva el objeto de la persona más joven.

export default function personaJovenYMayor(personas, btnMayor, btnMenor, btnLimpiar,resultado){


    //Creando las variables referenciales al DOM (no cree las de los botones porque utilize
    //el metodo e.target.matches)
    const $personas = document.querySelector(personas);
    const $resultado = document.querySelector(resultado);


    //Creando array de objetos de personas
    const arrayPersonas = [{
        nombre: "Matias",
        apellido: "Moscone",
        edad: 27
    },
    {
        nombre: "Lionel",
        apellido: "Messi",
        edad: 36
    },
    {
        nombre: "Julian",
        apellido: "Alvarez",
        edad: 22
    },
    {
        nombre: "Enzo",
        apellido: "Fernandez",
        edad: 21
    },
    {
        nombre: "Lionel",
        apellido: "Scaloni",
        edad: 44
    }
];

    //Visualizando el array de personas en el DOM
    $personas.innerHTML = `${JSON.stringify(arrayPersonas)}`;
    //Creando variables mayor y menor iniciandolas con la primera persona del array
    let mayor = arrayPersonas[0];
    let menor = arrayPersonas[0];

    //console.log(arrayPersonas);

    //Ciclo que recorre el array de personas y determina el mayor y el menor en cuanto a la edad
    for(let i = 0; i < arrayPersonas.length; i++){
        if(arrayPersonas[i].edad > mayor.edad){
            mayor = arrayPersonas[i];
        }
        if(arrayPersonas[i].edad < menor.edad){
            menor = arrayPersonas[i];
        }
    }

    //console.log(btnMayor);

    //Captando evento click del DOM
    document.addEventListener("click", (e) => {
        //Si el evento click matchea con el btnMayor muestra la persona mayor
        if(e.target.matches(btnMayor)){
            $resultado.innerHTML = `El mayor es: ${mayor.nombre} ${mayor.apellido} con ${mayor.edad} años`;
            //console.log(mayor);            
        }
        //Si el evento click matchea con el btnMenor muestra la persona menor
        if(e.target.matches(btnMenor)){
            $resultado.innerHTML = `El menor es: ${menor.nombre} ${menor.apellido} con ${menor.edad} años`;               
            //console.log(menor);
        }
        //Si el evento click matchea con el btnLimpiar limpia el resultado del DOM
        if(e.target.matches(btnLimpiar)){
            $resultado.innerHTML = "";
        }

    });


}

