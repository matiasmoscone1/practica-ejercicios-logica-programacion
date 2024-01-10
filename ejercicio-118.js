
//118. Algoritmo de Recorrido de Grafo: Implementa un algoritmo de búsqueda en profundidad (DFS)
//para recorrer un grafo dirigido. Puedes representar el grafo como una estructura de datos 
//y crear una función que realice el recorrido DFS desde un nodo inicial.


export default function recorrerGrafoDFS(btnMostrar, grafo, nodoInicial ,btnRecoorer, btnLimpiar){

    const $btnMostrar = document.querySelector(btnMostrar);
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
            let grafoCompleto = "";
            for (const nodo in this.nodos) {
                const vecinos = this.nodos[nodo].join(', ');
                grafoCompleto += `${nodo} -> [${vecinos}] <br>`;
                //console.log(`${nodo} -> [${vecinos}]`);
            }
            $grafo.innerHTML = grafoCompleto;
        }
        
    }

    $btnMostrar.addEventListener("click", () => {

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
    })


    $btnRecorrer.addEventListener("click", () => {
        const $nodoInicial = document.querySelector(nodoInicial).value;
        
        console.log($nodoInicial.toUpperCase());

        const nodosVisitados = new Set();

        nodosVisitados.add($nodoInicial.toUpperCase());

        console.log(nodosVisitados);
    });

    $btnLimpiar.addEventListener("click", () => {
        $grafo.textContent = "";
    });


}



