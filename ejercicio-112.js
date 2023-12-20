

//112. Location Object:
//a. Crea una página web con enlaces internos y usa el objeto Location
//para mostrar la URL de la página actual.
//b. Implementa una función que redirija a los usuarios a una URL diferente
//después de cierto tiempo.


export default function locationObject(btnFacebook, btnInstagram, btnGmail, btnYoutube){
    
    let ventana;
   
    document.addEventListener("click", (e) => {


        if(e.target.matches(btnFacebook)){
            ventana = window.open('https://www.facebook.com/', "_blank", 'width=600,height=600');
            setTimeout(() => {
                ventana.open("https://www.cronista.com/");
            }, 2000);
            console.log(ventana.location.href); 
        }else if(e.target.matches(btnInstagram)){
            ventana = window.open('https://www.instagram.com/', "_blank", 'width=600,height=600');
            console.log(ventana.location.href);
        }else if(e.target.matches(btnGmail)){
            ventana = window.open('https://www.gmail.com/', "_blank", 'width=600,height=600');
            console.log(ventana.location.href);
        }else if(e.target.matches(btnYoutube)){
            ventana = window.open('https://www.youtube.com/', "_blank", 'width=600,height=600');
            console.log(ventana.location.href);
        }
    });
    




  
}


