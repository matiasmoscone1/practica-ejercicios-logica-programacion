


//75. Implementa una función recursiva para calcular el factorial de un número.


export default function factRecursiva(){

    const factNum = (num) => {
        if(num === 0 || num === 1){
            return 1;
        }
        else{
            return num *= factNum(num - 1);
        }
    }


    console.log(factNum(5));

}







