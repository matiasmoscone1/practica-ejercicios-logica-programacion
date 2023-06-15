

//32. Generador de contraseñas:
//Escribe una función que genere una contraseña aleatoria con una longitud dada. 
//La contraseña debe contener una combinación de letras mayúsculas, letras minúsculas, 
//números y caracteres especiales. Puedes utilizar la función 
//Math.random() para generar valores aleatorios.



export default function generarContrasenia(inputContrasenia ,btnGenerador, btnLimpiar, resultado){

    //Creando variables referenciales al DOM
    const $btnGenerar = document.querySelector(btnGenerador);
    const $btnLimpair = document.querySelector(btnLimpiar);
    const $resultadoGenerarContrasenia = document.querySelector(resultado);

    //Captando evento click del boton generar
    $btnGenerar.addEventListener("click", () => {
        //Captando longitud de la contraseña puesta por el input del usuario
        const $longitudContrasenia = document.querySelector(inputContrasenia).value;    
        //Inicializando variable contraseña
        let contrasenia = "";
    
        //Creando array con todos los posibles caracteres que puede tener la contraseña
        let obj = ["0","1","2","3","4","5","6","7","8","9","-","_","!","@","#","$","%","&","/",
        "(",")","=","?","¡","¿","|","°","{","}","^","]","[",".","<",">","~","A","B","C","D","E",
        "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z","a","b","c",
        "d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","r","x","w","y","z"];

        //Ciclo que recorre las veces de la longitud de la contraseña
        for(let i = 0; i < $longitudContrasenia; i++){
            //Por cada vuelta, generadorContrasenia toma un nuevo valor dentro del array "obj"
            //y despues lo concatena a la contraseña
            let generadorContrasenia = Math.random(0, obj.length) * obj.length;
            contrasenia += obj[Math.floor(generadorContrasenia)];
        }

        //console.log(contrasenia);

        //Mostrando en el DOM el resultado
        $resultadoGenerarContrasenia.textContent = `La contraseña generada es: ${contrasenia}`;
        
    });

    //Captando evento del boton limpiar
    $btnLimpair.addEventListener("click", () => {
        //Limpiando el resultado en el DOM
        $resultadoGenerarContrasenia.innerHTML = "";
    });

}






