


//60. Generador de contraseñas seguras (Complejidad especifica): Crea una función que 
//genere contraseñas seguras con una longitud y complejidad específicas.
//- No debe tener caracteres repetidos
//- No debe tener el mismo tipo de caracter consecutivo

export default function generadorContraseniaAvanzado(btnGenerar, btnLimpiar, resultado){

    const $btnGnerar = document.querySelector(btnGenerar);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);
    /*
    const numero = [0,1,2,3,4,5,6,7,8,9];
    const letra = ["A","B","C","D","E",
    "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z","a","b","c",
    "d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","r","x","w","y","z"];
    const simbolo = ["!","@","#","$","%","&","/","(",")","=","~","°","{","[","}","]","Ç","|"];
*/

    const objeto = {
        numero: [0,1,2,3,4,5,6,7,8,9],
        letra: ["A","B","C","D","E",
        "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z","a","b","c",
        "d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","r","x","w","y","z"],
        simbolo: ["!","@","#","$","%","&","/","(",")","=","~","°","{","[","}","]","Ç","|"]
    }

    let contrasenia = "";

    const tipo = ["numero", "letra", "simbolo"];

    $btnGnerar.addEventListener("click", () => {
        
        for(let i = 0; i < 12; i++){
            const iterador = tipo[Math.floor(Math.random() * tipo.length)];

            let caracterAleatorio = "";

        
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
            
            contrasenia += caracterAleatorio;

        }

        console.log(contrasenia);
        
    });


}






