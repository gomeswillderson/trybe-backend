// deve ser possivel realizar um pagamento
// com: ...
// o pagamento possui? ...
// comportamentos

import Conta from "./Conta";

interface IPrestacao {
    valor: number;
    vencimento: Date;
}

type PagamentoParams = {
    conta: Conta,
    valor: number,
    tipo: string,
    vencimento: Date,
    descricao: string,
}

export default class Pagamento {
   private _conta: Conta;
   private _valor: number;
   private _tipo: string;
   private _vencimento: Date;
   private _descricao: string;
   private _multa: number;
   private _prestacoes: IPrestacao[];

    constructor(params: PagamentoParams) {
        if (params.valor < 0) {
            throw new Error('INVALID_NEGATIVE_VALUE');
        }
                
        this._conta = params.conta;
        this._valor = params.valor;
        this._tipo = params.tipo;
        this._vencimento = params.vencimento;
        this._descricao = params.descricao;
        this._multa = 0.2;
        this._prestacoes = []
    }

    efetivarPagamento() {
        if(this._tipo ==='pix'){
           return this.pagarViaPix()
        }
        if(this._tipo ==='boleto'){
           return this.pagarViaBoleto()
        }
        if(this._tipo ==='cartao'){
          return  this.pagarViaCartao()
        }

        throw new Error('INVALID_PAYMENT_TYPE')
    }

    private pagarViaPix() {

    }

    private pagarViaBoleto() {
        console.log('Pagandovia Boleto');
        console.log('Saldo conta:', this._conta.saldo);
        console.log('Dados par apagamento boleto:');
        console.log('Descrição:', this._descricao);
        console.log('Vencimento:', this._vencimento);
        console.log('Multa:', this._multa);
        console.log('Processando pagamento ...');  
        
        let valorCobrado = this._valor

        if(this.estaVencido()){
            valorCobrado += valorCobrado* this._multa;

        }

        this._conta.debitar(valorCobrado)
                   
    }

    private pagarViaCartao() {
        
    }

    private estaVencido() {
        const vencimentoTime = this._vencimento.getTime();
        const nowTime = new Date().getTime();

        return vencimentoTime < nowTime;
    }

}