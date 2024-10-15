export class Turma {
    constructor(codigo, nota){
        this._codigo = codigo
        this._nota = nota
    }

    aprovado () {
        if(this._nota > 6) {
            return true
        }else{
            return false
        }
    }
}