
//118. Algoritmo de Recorrido de Grafo: Implementa un algoritmo de búsqueda en profundidad (DFS)
//para recorrer un grafo dirigido. Puedes representar el grafo como una estructura de datos 
//y crear una función que realice el recorrido DFS desde un nodo inicial.


export default function recorrerGrafoDFS(grafo, btnRecoorer, btnLimpiar){

    const $grafo = document.querySelector(grafo);
    const $btnRecorrer = document.querySelector(btnRecoorer);
    const $btnLimpiar = document.querySelector(btnLimpiar);


    class Grafo {
        constructor(){
            this.nodos = {};
        }
        
        agregarNodo(valor){
            this.nodos[valor] = [];
        }

        agregarArista(nodo1, nodo2) {
            this.nodos[nodo1].push(nodo2);
            this.nodos[nodo2].push(nodo1);
          }
        
        imprimirGrafo() {
            for (const nodo in this.nodos) {
                const vecinos = this.nodos[nodo].join(', ');
                $grafo.innerHTML = `${nodo} -> [${vecinos}]`;
                console.log(`${nodo} -> [${vecinos}]`);
            }
        }
        
    }


    $btnRecorrer.addEventListener("click", () => {

    
        const miGrafo = new Grafo;
        
        miGrafo.agregarNodo('A');
        miGrafo.agregarNodo('B');
        miGrafo.agregarNodo('C');
        miGrafo.agregarNodo('D');
        miGrafo.agregarNodo('E');
    
        miGrafo.agregarArista('A', 'B');
        miGrafo.agregarArista('B', 'C');
        miGrafo.agregarArista('C', 'D');
        miGrafo.agregarArista('D', 'A');
        miGrafo.agregarArista('D', 'E');
    

        miGrafo.imprimirGrafo();
    });


}

