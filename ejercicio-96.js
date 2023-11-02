

//96. Recursión en árbol: Escribe una función que recorra un árbol anidado y 
//realice una acción en cada nodo del árbol.

export default function arbolRecursivo(arbol, btnCalcular, btnLimpiar, resultado){

    class Arbol{
        constructor(valor){
            this.valor = valor;
            this.hijo = [];
        }
    
        agregarHijo(nodoHijo){
            this.hijo.push(nodoHijo);
        }
    }

    const nodoPrincipal = new Arbol("A");
    const nodoB = new Arbol("B");
    const nodoC = new Arbol("C");

    nodoPrincipal.agregarHijo(nodoB);
    nodoPrincipal.agregarHijo(nodoC);

    const nodoD = new Arbol("D");
    const nodoE = new Arbol("E");

    nodoB.agregarHijo(nodoD);
    nodoB.agregarHijo(nodoE);

    const nodoF = new Arbol("F");

    nodoC.agregarHijo(nodoF);

    console.log(nodoPrincipal);

    const $arbol = document.querySelector(arbol);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    const arrayNodos = [];
  
    const mostrarNodo = (nodo) => {
        arrayNodos.push(nodo.valor);
        $arbol.textContent = `El arbol completo es: ${arrayNodos}`;
        
        //console.log(nodo.valor);

        for(const nod of nodo.hijo){
            mostrarNodo(nod);
            //return(nodo.valor);
        }
    } 

    mostrarNodo(nodoPrincipal);
    
    const recorrerNodo = (nodo) => {
        
        arrayNodos.push("Nodo" + nodo.valor);
           
        $resultado.textContent = `El arbol completo es: ${arrayNodos}`;
        
        //console.log(nodo.valor);

        for(const nod of nodo.hijo){
            recorrerNodo(nod);
            //return(nodo.valor);
        }
    }

   
    $btnCalcular.addEventListener("click", () => {
        recorrerNodo(nodoPrincipal); 
    });

    $btnLimpiar.addEventListener("click", () => {
        $resultado.textContent = "";
    });
    


}

