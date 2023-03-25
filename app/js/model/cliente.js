class Cliente {
    _nome;
    _cpf;
    _conta;
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    // para os nomes
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    // para os cpfs
    get cpf() {
        return this._cpf;
    }
    set cpf(novoCpf) {
        this._cpf = novoCpf;
    }
    // para as contas
    get conta() {
        return this._conta;
    }
    toString() {
        return `Cliente: 
                nome: ${this._nome}
                cpf: ${this._cpf}
                conta: ${this._conta.toString()}`;
    }
}
