

//112. Location Object:
//a. Crea una página web con enlaces internos y usa el objeto Location
//para mostrar la URL de la página actual.
//b. Implementa una función que redirija a los usuarios a una URL diferente
//después de cierto tiempo.


export default function locationObject(btnFacebook, btnInstagram, btnGmail, btnYoutube){

    const $btnFacebook = document.querySelector(btnFacebook);
    const $btnInstagram = document.querySelector(btnInstagram);
    const $btnGmail = document.querySelector(btnGmail);
    const $btnYoutube = document.querySelector(btnYoutube);


    document.addEventListener("click", (e) => {

        if(e.target.matches($btnFacebook)){
            window.open('https://www.facebook.com/', "_blank", 'width=600,height=600');
        }

    });



}


