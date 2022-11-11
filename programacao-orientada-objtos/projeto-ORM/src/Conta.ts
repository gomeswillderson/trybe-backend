export default class Conta {
    //saldo = 0;
    private _saldo: number;

    constructor(depositoInicial: number){
        this._saldo = depositoInicial;
    }

    getSaldo(){
        return this._saldo // sintaxe tradicional
    }

    get saldo(){
        return this._saldo // sintaxe ts
    }

    public debitar(value: number) {
        if(value > this._saldo){
            throw new Error('SALDO_INSUFICIENTE');
        }

        this._saldo -= value;
    }

    // setSaldo(value: number) {
    //     this._saldo = value; // sintaxe tradicional
    // }

    // set saldo(value: number) {
    //     this._saldo = value;    // sintaxe ts
    // }
}