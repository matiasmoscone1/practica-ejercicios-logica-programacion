

//67. Cambio de imagen al hacer clic: Toma una serie de imágenes y muéstralas en una 
//página web. Al hacer clic en una imagen, cámbiala por la siguiente en la lista. 
//Si la última imagen es clickeada, vuelve a la primera imagen.


export default function cambiaImagen(img1, img2, img3, img4){

    //creando variables referenciales a las imagenes del DOM
    const $img1 = document.querySelector(img1);
    const $img2 = document.querySelector(img2);
    const $img3 = document.querySelector(img3);
    const $img4 = document.querySelector(img4);


    //la logica se implementa para las 3 imagenes que no son la primera. Consiste en guardar
    //la primera imagen en una variable temporal, luego a la primera imagen se le da el valor
    //de la imagen clickeada (puede ser 2da, 3era, 4ta) y luego al lugar donde esta la imagen
    //clickeada, se le asigna lo que quedo en la variable temporal (la 1era img).
    
    $img2.addEventListener("click", () => {
        //console.log($img1.src);
        const tempSrc = $img1.src;
        $img1.src = $img2.src;
        $img2.src = tempSrc;
    });
    $img3.addEventListener("click", () => {
        //console.log($img1.src);
        const tempSrc = $img1.src;
        $img1.src = $img3.src;
        $img3.src = tempSrc;
    });
    $img4.addEventListener("click", () => {
        //console.log($img1.src);
        const tempSrc = $img1.src;
        $img1.src = $img4.src;
        $img4.src = tempSrc;
    });


}


