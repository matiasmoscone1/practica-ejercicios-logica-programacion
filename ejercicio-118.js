
//118. Algoritmo de Recorrido de Grafo: Implementa un algoritmo de búsqueda en profundidad (DFS)
//para recorrer un grafo dirigido. Puedes representar el grafo como una estructura de datos 
//y crear una función que realice el recorrido DFS desde un nodo inicial.


export default function recorrerGrafoDFS(btnMostrar, grafo, nodoInicial ,btnRecoorer, btnLimpiar){

    //creando variables referenciales al DOM
    const $btnMostrar = document.querySelector(btnMostrar);
    const $grafo = document.querySelector(grafo);
    const $btnRecorrer = document.querySelector(btnRecoorer);
    const $btnLimpiar = document.querySelector(btnLimpiar);

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
        
        algoritmoDFS(nodo, nodosVisitados){

            nodosVisitados.add(nodo);
            console.log(`Visitando el nodo: ${nodo}`);
    
            for(const vecino of this.nodos[nodo]){
                if(!nodosVisitados.has(vecino)){
                    this.algoritmoDFS(vecino, nodosVisitados);
                }
            }
    
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


/*
    const algoritmoDFS = (nodo, nodosVisitados) => {

        nodosVisitados.add(nodo);
        console.log(`Visitando el nodo: ${nodo}`);

        for(const vecino of this.nodos[nodo]){
            if(!nodosVisitados.has(vecino)){
                this.algoritmoDFS(vecino, nodosVisitados);
            }
        }

    }*/

    $btnRecorrer.addEventListener("click", () => {
        const $nodoInicial = document.querySelector(nodoInicial).value.toUpperCase();
        
        //console.log($nodoInicial.toUpperCase());

        const nodosVisitados = new Set();

        //nodosVisitados.add($nodoInicial);

        const miGrafo = new Grafo();
        
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


       miGrafo.algoritmoDFS($nodoInicial, nodosVisitados);



        console.log(nodosVisitados);
    });

    $btnLimpiar.addEventListener("click", () => {
        $grafo.textContent = "";
    });


}



