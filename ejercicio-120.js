
//120. Algoritmo de Ordenación Personalizado: Desarrolla un algoritmo de ordenación 
//personalizado que funcione de manera eficiente para un conjunto específico de datos. 
//Puedes implementar un algoritmo de ordenación personalizado basado en las 
//características particulares de los elementos que estás ordenando.


export default function algoritmoOrdenamientoPersonalizado(tabla, input, btnFiltrar, btnLimpiar, resultado){

    //creando array de objetos
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

    //creando variables referenciales al DOM
    const $tabla = document.querySelector(tabla);
    const $btnFiltrar = document.querySelector(btnFiltrar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //creando variable que mostrara la tabla de objetos en el DOM
    let mostrarTabla = "";

    //creando estructura html en la variable tabla
    mostrarTabla += `<table border="1">
        <thead>
            <tr>
                <td>Articulo</td>
                <td>Color</td>
                <td>Precio</td>
                <td>Marca</td>
            </tr>
        </thead>`;
    

    //ciclo que a la estructura de la variable de tabla, se le agrega iterando una tabla 
    //donde muestra cada objeto al detalle
    for(let i = 0; i < arrayObjetos.length; i++){
        mostrarTabla += `
            <tbody>
                <tr>
                    <td>${arrayObjetos[i].nombre}</td>
                    <td>${arrayObjetos[i].color}</td>
                    <td>$${arrayObjetos[i].precio}</td>
                    <td>${arrayObjetos[i].marca}</td>
                </tr>
        `;
    }

    //termina la estructura de la variable tabla
    mostrarTabla += `
    </tbody>    
    </table>
    <br>`;

    //inyecta el html en la variable referencial del DOM
    $tabla.innerHTML = mostrarTabla;


    //captando evento click del boton Filtrar
    $btnFiltrar.addEventListener("click", () => {
        //tomnando el valor del input 
        const $input = document.querySelector(input).value.toLowerCase();

        //poniendo un titulo donde apareceran todos los objetos
        $resultado.innerHTML = `Los objetos filtrados son: `;
          
        //recorre el array de objetos y por cada objeto, compara si existe con alguna propiedad
        //de los objetos de la tabla con el valor del input ingresado por el usuario
        arrayObjetos.map((objeto) => {
            
            if(objeto.nombre.toLowerCase() === $input || objeto.color.toLowerCase() === $input || objeto.precio == $input || objeto.marca.toLowerCase() === $input){
                //console.log(`El objeto es: ${JSON.stringify(objeto)}`); 
                
                //si existe coincidencia, se crea una lista desordenada con los items de cada objeto
                $resultado.innerHTML += ` <ul>
                    <li>Nombre: ${objeto.nombre}</li>
                    <li>Color: ${objeto.color}</li>
                    <li>Precio: $${objeto.precio}</li>
                    <li>Marca: ${objeto.marca}</li>
                </ul>`;
            //si no hay coincidencia, informa en el DOM que no se encontro nada
            }else{
                $resultado.innerHTML = `<p>No se encontro coincidencia en ningun objeto...</p>`
            }

        })
        //se borra el input del usuario
        document.querySelector(input).value = "";



    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //borra el input del usuario y el resultado en el DOM
        document.querySelector(input).value = "";
        $resultado.innerHTML = "";
    });





}















