
//120. Algoritmo de Ordenación Personalizado: Desarrolla un algoritmo de ordenación 
//personalizado que funcione de manera eficiente para un conjunto específico de datos. 
//Puedes implementar un algoritmo de ordenación personalizado basado en las 
//características particulares de los elementos que estás ordenando.


export default function algoritmoOrdenamientoPersonalizado(tabla, input, btnFiltrar, btnLimpiar, resultado){

    const arrayObjetos = [{
        nombre: "Teclado",
        color: "Negro",
        precio: 1000,
        marca: "Genius"
    },
    {
        nombre: "Mouse",
        color: "Rojo",
        precio: 750,
        marca: "Genius"
    },
    {
        nombre: "Teclado",
        color: "Blanco",
        precio: 1200,
        marca: "Red Dragon"
    },
    {
        nombre: "Monitor",
        color: "Negro",
        precio: 2500,
        marca: "Samsung"
    },
    {
        nombre: "Mouse",
        color: "Blanco",
        precio: 560,
        marca: "Cx"
    },
    {
        nombre: "Teclado",
        color: "Negro",
        precio: 1350,
        marca: "Red Dragon"
    },
    {
        nombre: "Microfono",
        color: "Negro",
        precio: 750,
        marca: "Logitech"
    }
    ];

    const $tabla = document.querySelector(tabla);
    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);


    let mostrarTabla = "";

    mostrarTabla += `<table border="1">
        <thead>
            <tr>
                <td>Articulo</td>
                <td>Color</td>
                <td>Precio</td>
                <td>Marca</td>
            </tr>
        </thead>`;
    

    for(let i = 0; i < arrayObjetos.length; i++){
        mostrarTabla += `
            <tbody>
                <tr>
                    <td>${arrayObjetos[i].nombre}</td>
                    <td>${arrayObjetos[i].color}</td>
                    <td>${arrayObjetos[i].precio}</td>
                    <td>${arrayObjetos[i].marca}</td>
                </tr>
        `;
    }

    mostrarTabla += `
    </tbody>    
    </table>
    <br>`;

    $tabla.innerHTML = mostrarTabla;


    $btnFiltrar.addEventListener("click", () => {
        const $input = document.querySelector(input).value;

        arrayObjetos.map((objeto) => {
            if(objeto.nombre === $input || objeto.color === $input || objeto.precio === $input || objeto.marca === $input){
                console.log(`El objeto es: ${objeto}`);    
            }
        })

        console.log($input);


    });





}















