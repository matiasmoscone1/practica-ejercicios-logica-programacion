

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
  
    //muestra el nodo completo en el DOM
    const mostrarNodo = (nodo) => {
        //se agrega al arrayNodos vacio, el valor de cada nodo
        arrayNodos.push(nodo.valor);
        //se muestra en el DOM
        $arbol.textContent = `El arbol completo es: ${arrayNodos}`;
        
        //console.log(nodo.valor);

        //se llama recursivamente a la funcion para que recorra todo el arbol
        for(const nod of nodo.hijo){
            mostrarNodo(nod);
            //return(nodo.valor);
        }
    } 

    //se invoca a la funcion con el nodo princiapl para que recorra todo el arbol completo
    mostrarNodo(nodoPrincipal);
    
    //hace lo mismo que la funcion anterior pero le agrega la palabra Nodo antes de cada valor de nodo
    const recorrerNodo = (nodo) => {
        
        arrayNodos.push("Nodo" + nodo.valor);
           
        $resultado.textContent = `El arbol completo es: ${arrayNodos}`;
        
        //console.log(nodo.valor);

        for(const nod of nodo.hijo){
            recorrerNodo(nod);
            //return(nodo.valor);
        }
    }


    //capta evento click del boton Calcular
    $btnCalcular.addEventListener("click", () => {
        //llama a la funcion que recorre el arbol y se le agrega a cada nodo la palabra Nodo
        recorrerNodo(nodoPrincipal); 
    });

    //capta el evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el DOM
        $resultado.textContent = "";
    });
    


}

