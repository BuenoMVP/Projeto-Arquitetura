import { Turma } from './Turma'

export class TurmaPresencial extends Turma {
    constructor(frequencia, codigo, nota) {
        super(codigo)
        super(nota)
        this._frequencia = frequencia
    }

    aprovado () {
        if(this._frequencia >= 75){
            if(this._nota > 6){
                return true
            }else {
                return false
            }
        }else{
            return false
        }
    }
}