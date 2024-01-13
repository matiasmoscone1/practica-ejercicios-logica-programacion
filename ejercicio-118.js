
//118. Algoritmo de Recorrido de Grafo: Implementa un algoritmo de búsqueda en profundidad (DFS)
//para recorrer un grafo dirigido. Puedes representar el grafo como una estructura de datos 
//y crear una función que realice el recorrido DFS desde un nodo inicial.


export default function recorrerGrafoDFS(btnMostrar, grafo, nodoInicial ,btnRecoorer, btnLimpiar, resultado){

    //creando variables referenciales al DOM
    const $btnMostrar = document.querySelector(btnMostrar);
    const $grafo = document.querySelector(grafo);
    const $btnRecorrer = document.querySelector(btnRecoorer);
    const $btnLimpiar = document.querySelector(btnLimpiar);
    const $resultado = document.querySelector(resultado);

    let mostrarRecorrido = "";

    //creando grafo
    class Grafo {
        //constructor
        constructor(){
            this.nodos = {};
        }
        
        //funcion/metodo que agrega un nodo
        agregarNodo(valor){
            this.nodos[valor] = [];
        }

        //agrega la arista de un nodo al otro
        agregarArista(nodo1, nodo2) {
            this.nodos[nodo1].push(nodo2);
            this.nodos[nodo2].push(nodo1);
          }
        
      //imprime el grafo en el DOM
        imprimirGrafo() {
            //crea una variable vacia de grafoCompleto
            let grafoCompleto = "";
            //recorre el grafo y crea los vecinos de cada nodo
            for (const nodo in this.nodos) {
                const vecinos = this.nodos[nodo].join(', ');
                //almacena en la variable vacia el formato en q se representa el nodo y sus vecinos
                grafoCompleto += `${nodo} -> [${vecinos}] <br>`;
                //console.log(`${nodo} -> [${vecinos}]`);
            }
            //muestra en el DOM el resultado
            $grafo.innerHTML = grafoCompleto;
        }
        
        //crea el algoritmo de busqueda en profuncidad como metodo del grafo
        //se le pasa por parametro el nodo y los nodos visitados (que es un SET que almacena los nodos)
        
        algoritmoDFS(nodo, nodosVisitados){

            
            //agrega al Set el nodo que se esta recorriendo
            nodosVisitados.add(nodo);

            //console.log(`Visitando el nodo: ${nodo}`);
            mostrarRecorrido += `Visitando el nodo: ${nodo} <br>`;

            //muestra el resultado del recorrido en el DOM
            $resultado.innerHTML = mostrarRecorrido;

            //recorre el nodo y los vecinos
            for(const vecino of this.nodos[nodo]){
                //si no existe el vecino en el Set de nodosVisitados, se hace recursion y se
                //llama nuevamente a la funcion algoritmoDFS para que siga recorriendo todos los nodos
                if(!nodosVisitados.has(vecino)){
                    this.algoritmoDFS(vecino, nodosVisitados);
                }
            }
    
        }
        
    }

    //captando evento click del boton Mostrar
    $btnMostrar.addEventListener("click", () => {

        //crea el Grafo
        const miGrafo = new Grafo;
        
        //se le agregan todos los nodos
        miGrafo.agregarNodo('A');
        miGrafo.agregarNodo('B');
        miGrafo.agregarNodo('C');
        miGrafo.agregarNodo('D');
        miGrafo.agregarNodo('E');
    
        //se le agregan todas las aristas a los nodos
        miGrafo.agregarArista('A', 'B');
        miGrafo.agregarArista('B', 'C');
        miGrafo.agregarArista('C', 'D');
        miGrafo.agregarArista('D', 'A');
        miGrafo.agregarArista('D', 'E');
    
        //imprime el grafo en el DOM
        miGrafo.imprimirGrafo();
    })

    //captando click del boton Recorrer
    $btnRecorrer.addEventListener("click", () => {
        //tomando el valor del input del usuario del nodo inicial
        const $nodoInicial = document.querySelector(nodoInicial).value.toUpperCase();
        
        //console.log($nodoInicial.toUpperCase());

        //crea el Set de nodos visitados
        const nodosVisitados = new Set();

        //nodosVisitados.add($nodoInicial);

        //crea nuevamente el grafo para aplicar el algoritmoDFS
        const miGrafo = new Grafo();

        //se le agregan los nodos al grafo
        miGrafo.agregarNodo('A');
        miGrafo.agregarNodo('B');
        miGrafo.agregarNodo('C');
        miGrafo.agregarNodo('D');
        miGrafo.agregarNodo('E');
    
        //se le agregan las aristas al nodo
        miGrafo.agregarArista('A', 'B');
        miGrafo.agregarArista('B', 'C');
        miGrafo.agregarArista('C', 'D');
        miGrafo.agregarArista('D', 'A');
        miGrafo.agregarArista('D', 'E');


        //se llama a la funcion/metodo algoritmoDFS para recorrer el grafo y que visite todos los nodos
        miGrafo.algoritmoDFS($nodoInicial, nodosVisitados);



        //console.log(nodosVisitados);
    });

    //captando evento click del boton Limpiar
    $btnLimpiar.addEventListener("click", () => {
        //limpia el resultado del mostrarGrafo y Recorrido del DOM y tambien el input
        //del usuario donde ingresa el nodo inicial
        $grafo.textContent = "";
        document.querySelector(nodoInicial).value = "";
        $resultado.textContent = "";
    });


}



