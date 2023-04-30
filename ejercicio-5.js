

//5. Escribir un programa contador de clicks.

export default function contarClicks(btn, resultado){

    const $btnClick = document.querySelector(btn);
    let contador = 0;

    $btnClick.addEventListener("click", () => {
        contador += 1;
    
        document.querySelector(resultado).textContent = `Click: ${contador}`;
    });

}
