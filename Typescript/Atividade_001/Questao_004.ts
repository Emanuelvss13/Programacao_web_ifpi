//a
enum DiasSemana {
    Dom,
    Seg,
    Ter,
    Qua,
    Qui,
    Sex,
    Sab,
}

//b
namespace DiasSemana {
    export function isDiaUtil(x: DiasSemana){
        if(x === DiasSemana.Sab || x === DiasSemana.Dom){
            return false
        } else {
            return true
        }
    }
}

//c
let a = DiasSemana

console.log(DiasSemana.isDiaUtil(a.Dom))