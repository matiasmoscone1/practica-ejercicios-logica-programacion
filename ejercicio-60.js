


//60. Generador de contraseñas seguras (Complejidad especifica): Crea una función que 
//genere contraseñas seguras con una longitud y complejidad específicas.
//- No debe tener caracteres repetidos
//- No debe tener el mismo tipo de caracter consecutivo

export default function generadorContraseniaAvanzado(btnGenerar, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnGnerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //creando objeto que almacena 3 propiedades, cada propiedad es un array con los respectivos
    //caracteres de cada propiedad.
    const objeto = {
        numero: [0,1,2,3,4,5,6,7,8,9],
        letra: ["A","B","C","D","E",
        "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z","a","b","c",
        "d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","r","x","w","y","z"],
        simbolo: ["!","@","#","$","%","&","/","(",")","=","~","°","{","[","}","]","Ç","|"]
    }

    //Creando la variable contraseña, se la inicializa como cadena vacia
    let contrasenia = "";

    //Creando variable tipo array que almacenara el nombre de las propíedades del objeto creado
    const tipo = ["numero", "letra", "simbolo"];

    //Captando el evento click del boton Generar
    $btnGnerar.addEventListener("click", () => {
        //Creando variable nuevoIterador (servira para que no haya dos caracteres del mismo tipo
        //consecutivamente)
        let nuevoIterador = "";
        //Inicializando un set de caracteres (servira para que no se repitan los caracteres en la
        //contraseña)
        const caracteresUtilizados = new Set();

        //creando ciclo que iterara, 12 veces y por cada vez va a añadir un caracter a la contraseña
        for(let i = 0; i < 12; i++){
            //Variable iterador que solo da 0, 1 y 2, para elegir el tipo de caracter que se añadira
            let iterador = tipo[Math.floor(Math.random() * tipo.length)];

            //Se crea un do while que verifica si el caracter anterior es el mismo que se genero
            //y si es el mismo, se genera otro (Para que no haya dos caracteres del mismo tipo 
            //consecutivamente)
            do{
                iterador = tipo[Math.floor(Math.random() * tipo.length)];    
            }while(iterador === nuevoIterador);

            //inicializamos caracterAleatorio con una cadena vacia
            let caracterAleatorio = "";

            //Si el iterador es numero, letra o simbolo, se genera el caracter aleatorio respectivamente
            switch(iterador){
                case "numero":
                    caracterAleatorio = objeto.numero[Math.floor(Math.random() * 10)];
                    break;
                case "letra":
                    caracterAleatorio = objeto.letra[Math.floor(Math.random() * 48)];
                    break;
                case "simbolo":
                    caracterAleatorio = objeto.simbolo[Math.floor(Math.random() * 18)];
                    break;    
            }

            //Mientras el set contenga el caracter aleatorio generado, se genera un nuevo caracter
            //Servira para que no haya caracteres repetidos en la contraseña
            while(caracteresUtilizados.has(caracterAleatorio)){
                switch(iterador){
                    case "numero":
                        caracterAleatorio = objeto.numero[Math.floor(Math.random() * 10)];
                        break;
                    case "letra":
                        caracterAleatorio = objeto.letra[Math.floor(Math.random() * 48)];
                        break;
                    case "simbolo":
                        caracterAleatorio = objeto.simbolo[Math.floor(Math.random() * 18)];
                        break;    
                }  
            }

            //Se le añade el caracter a la contraseña y se almacena el valor del iterador
            //en la variable nuevoIterador
            contrasenia += caracterAleatorio;
            nuevoIterador = iterador;

            //Se añade el caracter agregado a la contraseña al Set de caracteres utilizados
            caracteresUtilizados.add(caracterAleatorio);

        }

        //console.log(caracteresUtilizados);

        //console.log(contrasenia);
        
        //Se muestra el resultado por el DOM
        $resultado.textContent = `La contraseña creada es: ${contrasenia}`;

    });


    //Captando click del boton limpiar y limpia el resultado en el DOM
    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = " ";
    });

}






