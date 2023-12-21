

//112. Location Object:
//a. Crea una página web con enlaces internos y usa el objeto Location
//para mostrar la URL de la página actual.
//b. Implementa una función que redirija a los usuarios a una URL diferente
//después de cierto tiempo.


export default function locationObject(btnFacebook, btnInstagram, btnGmail, btnYoutube){
    
    //creando variable que almacenara la ventana emergente
    let ventana;

    //captandoe el evento click del DOM
    document.addEventListener("click", (e) => {

        //si el click es a algun boton de los que sale en el ejercicio, abre la ventana emergente
        //dependiendo lo que se clickee
        if(e.target.matches(btnFacebook)){
            ventana = window.open('https://www.facebook.com/', "_blank", 'width=600,height=600');
            //Se activa un setTimeout a los 2 segundos de abrir la ventana emergente, preguntando
            //si quiere ser redirigido a otra pagina web. Aunque por politicas de seguridad de 
            //los navegadores actuales, no lo realiza.
            setTimeout(() => {
                alert(`Se abrira el diario "El Cronista", desea continuar?`);
                ventana.open("https://www.cronista.com/");
            }, 2000);
            console.log(ventana.location.href); 
        }else if(e.target.matches(btnInstagram)){
            ventana = window.open('https://www.instagram.com/', "_blank", 'width=600,height=600');
            //Se activa un setTimeout a los 2 segundos de abrir la ventana emergente, preguntando
            //si quiere ser redirigido a otra pagina web. Aunque por politicas de seguridad de 
            //los navegadores actuales, no lo realiza.
            setTimeout(() => {
                alert(`Se abrira el diario "El Cronista", desea continuar?`);
                ventana.open("https://www.cronista.com/");
            }, 2000);
            console.log(ventana.location.href);
        }else if(e.target.matches(btnGmail)){
            ventana = window.open('https://www.gmail.com/', "_blank", 'width=600,height=600');
            //Se activa un setTimeout a los 2 segundos de abrir la ventana emergente, preguntando
            //si quiere ser redirigido a otra pagina web. Aunque por politicas de seguridad de 
            //los navegadores actuales, no lo realiza.
            setTimeout(() => {
                alert(`Se abrira el diario "El Cronista", desea continuar?`);
                ventana.open("https://www.cronista.com/");
            }, 2000);
            console.log(ventana.location.href);
        }else if(e.target.matches(btnYoutube)){
            ventana = window.open('https://www.youtube.com/', "_blank", 'width=600,height=600');
            //Se activa un setTimeout a los 2 segundos de abrir la ventana emergente, preguntando
            //si quiere ser redirigido a otra pagina web. Aunque por politicas de seguridad de 
            //los navegadores actuales, no lo realiza.
            setTimeout(() => {
                alert(`Se abrira el diario "El Cronista", desea continuar?`);
                ventana.open("https://www.cronista.com/");
            }, 2000);
            console.log(ventana.location.href);
        }
    });
    




  
}


