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

        for(let i = inicio; i<= fin; i = i + 1){
            if( i % 2 == 1){
                impares= impares + 1;
            }
        }
        return impares;
    }
}

let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(5,10));
console.log(app.contarImparesFor(5,11));