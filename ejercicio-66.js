


//66. Drag and Drop (Arrastrar y soltar): Crea dos divs, uno con contenido arrastrable y 
//otro con contenido objetivo. Permite que el usuario arrastre el contenido de un div al otro. 
//Cuando se complete con éxito, actualiza el texto del div objetivo para indicar que el 
//proceso se ha completado.


export default function dragAndDrop(div1, div2){

    const $div1 = document.querySelector(div1);
    const $div2 = document.querySelector(div2);

    $div1.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", $div1.id);
        console.log($div1);
    });

    
}

