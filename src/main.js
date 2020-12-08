export default class App {

    sumarParesFor(){
        let suma = 0;

        for(let i = 1; i <= 20; i = i + 1) {
            if(i % 2 == 0){
                suma = suma + i;
            }
        }
        return suma;
    }

    contarImparesFor(inicio, fin){
        let impares = 0;

        if (inicio> fin){
            let t = inicio;
            inicio = fin;
            fin = t;
        }

        for(let i = inicio; i<= fin; i++){
            if( i % 2 == 1){
                impares++;
            }
        }
        return impares;
    }

    sumarParesWhile(){
         let i = 1;
         let suma = 0;

        while(i <= 20){
            if(i % 2 == 0){
                suma = suma + i;
            }
        
            i++;
        }
        return suma;
    }
}

let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(5,10));
console.log(app.contarImparesFor(5,11));
console.log(app.contarImparesFor(11,5));

console.log(app.sumarParesWhile());
