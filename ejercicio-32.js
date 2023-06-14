

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
        
        let contrasenia = 0;
        /*let objeto = {A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,
        m,n,o,p,q,s,t,r,x,w,y,z}
            */

        let obj = {A: "A", B: "B", C: "C", a: "a", b: "b", c:"c"};
        contrasenia = Math.random(1, 1000) * 1000 + Math.random(obj.value);

        //console.log(Math.floor(contrasenia));
            console.log(contrasenia);

    });


}






