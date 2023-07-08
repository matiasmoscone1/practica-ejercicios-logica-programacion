


//45. Crear una función que tome un array de objetos como parámetro (cada objeto representa 
//una persona con propiedades "nombre" y "edad") y devuelva el objeto de la persona más joven.

export default function personaJovenYMayor(personas, btnMayor, btnMenor, btnLimpiar,resultado){


    const $personas = document.querySelector(personas);




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
    },
];

    $personas.innerHTML = `${JSON.stringify(arrayPersonas)}`;






}

