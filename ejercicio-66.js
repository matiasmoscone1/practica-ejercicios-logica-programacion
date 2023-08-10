


//66. Drag and Drop (Arrastrar y soltar): Crea dos divs, uno con contenido arrastrable y 
//otro con contenido objetivo. Permite que el usuario arrastre el contenido de un div al otro. 
//Cuando se complete con éxito, actualiza el texto del div objetivo para indicar que el 
//proceso se ha completado.


export default function dragAndDrop(div1, div2){
/*
    const $div1 = document.querySelector(div1);
    const $div2 = document.querySelector(div2);

    const draggable = document.getElementById('div-arrastrar');

  draggable.addEventListener('dragstart', (event) => {
    // Al iniciar el arrastre, guardamos el identificador del elemento arrastrado
    event.dataTransfer.setData('text/plain', draggable.id);
  });

  const handleDrop = (event) => {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedElementId);
    // Obtenemos las coordenadas del drop
    const x = event.clientX - draggedElement.offsetWidth / 2;
    const y = event.clientY - draggedElement.offsetHeight / 2;
    // Movemos el elemento a la posición del drop
    draggedElement.style.left = x + 'px';
    draggedElement.style.top = y + 'px';
    console.log(x,y);
  };

  // Prevenir el comportamiento por defecto para permitir el drop
  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  // Manejar el evento de soltar
  document.addEventListener('drop', handleDrop);

*/
    
}

