


//45. Crear una función que tome un array de objetos como parámetro (cada objeto representa 
//una persona con propiedades "nombre" y "edad") y devuelva el objeto de la persona más joven.

export default function personaJovenYMayor(personas, btnMayor, btnMenor, btnLimpiar,resultado){


    const $personas = document.querySelector(personas);
    //const $btnMayor = document.querySelector(btnMayor);
    //const $btnMenor = document.querySelector(btnMenor);
    //const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


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

    $personas.innerHTML = `${JSON.stringify(arrayPersonas)}`;
    let mayor = arrayPersonas[0];
    let menor = arrayPersonas[0];

    console.log(arrayPersonas);

    for(let i = 0; i < arrayPersonas.length; i++){
        if(arrayPersonas[i].edad > mayor.edad){
            mayor = arrayPersonas[i];
        }
        if(arrayPersonas[i].edad < menor.edad){
            menor = arrayPersonas[i];
        }
    }

    //console.log(btnMayor);


    document.addEventListener("click", (e) => {
        if(e.target.matches(btnMayor)){
            $resultado.innerHTML = `El mayor es: ${mayor.nombre} ${mayor.apellido} con ${mayor.edad} años`;
            console.log(mayor);            
        }
        if(e.target.matches(btnMenor)){
            $resultado.innerHTML = `El mayor es: ${menor}`;               
            console.log(menor);
        }

    });


}

