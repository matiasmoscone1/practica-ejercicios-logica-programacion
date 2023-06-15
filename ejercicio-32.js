

//32. Generador de contraseñas:
//Escribe una función que genere una contraseña aleatoria con una longitud dada. 
//La contraseña debe contener una combinación de letras mayúsculas, letras minúsculas, 
//números y caracteres especiales. Puedes utilizar la función 
//Math.random() para generar valores aleatorios.



export default function generarContrasenia(btnGenerador, btnLimpiar, resultado){

    const $btnGenerar = document.querySelector(btnGenerador);
    const $btnLimpair = document.querySelector(btnLimpiar);
    const $resultadoGenerarContrasenia = document.querySelector(resultado);

    $btnGenerar.addEventListener("click", () => {
        
        let contrasenia = "";
        

        let obj = ["0","1","2","3","4","5","6","7","8","9","-","_","!","@","#","$","%","&","/",
        "(",")","=","?","¡","¿","|","°","{","}","^","]","[",".","<",">","~","A","B","C","D","E",
        "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z","a","b","c",
        "d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","r","x","w","y","z"];
        
        for(let i = 0; i < 11; i++){
            let generadorContrasenia = Math.random(0, obj.length) * obj.length;
            contrasenia += obj[Math.floor(generadorContrasenia)];
        }

        console.log(contrasenia);

    });


}






