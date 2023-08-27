


//75. Implementa una función recursiva para calcular el factorial de un número.


export default function factRecursiva(){

    const factNum = (num) => {
        if(num === 0){
            return 0;
        }
        else{
            return num *= factNum(num--);
        }
    }


    console.log(factNum(5));

}







