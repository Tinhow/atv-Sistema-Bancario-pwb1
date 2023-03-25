class ClienteEspecial extends Cliente {
    _dependentes;
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = [];
    }
    adicionarDependente(dependente) {
        this._dependentes.push(dependente);
    }
    removerDependente(cpf) {
        const index = this._dependentes.findIndex((dependente) => dependente.cpf === cpf);
        if (index >= 0) {
            this._dependentes.splice(index, 1);
        }
    }
    listarDependentes() {
        console.log("Dependentes:");
        this._dependentes.forEach((dependente) => {
            console.log(dependente.toString());
        });
    }
}
