interface Iteravel<T>{
    
    i: number;
    
    data : T[];

    proximo: () => T;
    atual: () => T;
    isPrimeiro: () => boolean;
    isUltimo: () => boolean;
    irParaPrimeiro: () => void;

};

class ColecaoArray<U> implements Iteravel<U>{

    public i: number = 0;
    
    public data: U[] = [];

    proximo(): U{
        return this.data[this.i + 1]
    };
    
    atual(): U{
        return this.data[this.i]
    };

    isPrimeiro(): boolean{
        if(this.i === 0){
            return true
        } else {
            return false
        }
    };

    isUltimo(): boolean{
        if(this.i !== this.data.length - 1){
            return false
        } else {
            return true
        }
    };

    irParaPrimeiro(){
        this.i = 0
    };

    adiciona(item: U){
        this.data.push(item)
    };

};

let ca = new ColecaoArray<number>();

ca.adiciona(1);
ca.adiciona(2);
ca.adiciona(3);

console.log(ca.proximo())
console.log(ca.atual())
console.log(ca.isPrimeiro())
console.log(ca.isUltimo())
console.log(ca.irParaPrimeiro())