class Cliente{
    
    private _nome: string;
    public _cpf: string;
    private _conta: Conta;


    constructor(nome: string, cpf: string, conta: Conta){
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }


    // para os nomes
    get nome():string{
       return this._nome;
    }


    set nome(novoNome: string){
        this._nome = novoNome;
    }


    // para os cpfs
    get cpf():string{
        return this._cpf;
    }


    set cpf(novoCpf: string){
        this._cpf = novoCpf;
    }


    // para as contas
    get conta():Conta{
        return this._conta;
    }

    toString(): string {
        return `Cliente: 
                nome: ${this._nome}
                cpf: ${this._cpf}
                conta: ${this._conta.toString()}`;
    }
}

