

//96. Recursión en árbol: Escribe una función que recorra un árbol anidado y 
//realice una acción en cada nodo del árbol.

export default function arbolRecursivo(arbol, btnCalcular, btnLimpiar, resultado){

    //creando estructura arbol
    class Arbol{
        //creando el constructor del arbol
        constructor(valor){
            //añadiendo propiedades del arbol
            this.valor = valor;
            this.hijo = [];
        }
    
        //añadiendo funcionalidad, se le pasa un nodo hijo a un nodo padre
        agregarHijo(nodoHijo){
            this.hijo.push(nodoHijo);
        }
    }

    //crea tres nodos distintos y uno es el principal
    const nodoPrincipal = new Arbol("A");
    const nodoB = new Arbol("B");
    const nodoC = new Arbol("C");

    //al nodo principal se le agregan como hijos B y C
    nodoPrincipal.agregarHijo(nodoB);
    nodoPrincipal.agregarHijo(nodoC);

    //se crean dos nodos mas D y E
    const nodoD = new Arbol("D");
    const nodoE = new Arbol("E");

    //al nodo B se le agregan como hijos D y E
    nodoB.agregarHijo(nodoD);
    nodoB.agregarHijo(nodoE);

    //se crea un nodo F
    const nodoF = new Arbol("F");

    //al nodo C se le agrega como hijo el nodo F
    nodoC.agregarHijo(nodoF);

    //console.log(nodoPrincipal);

    //se crean variables referenciales al DOM
    const $arbol = document.querySelector(arbol);
    const $btnCalcular = document.querySelector(btnCalcular);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    //se crea un array de nodos vacio
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

