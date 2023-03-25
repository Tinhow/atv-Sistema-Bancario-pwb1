class Clientes extends Cliente {
    _clientes;
    constructor(nome, cpf, conta) {
        super('', '', conta);
        this._clientes = [];
    }
    inserirCliente(cliente) {
        this._clientes.push(cliente);
    }
    removerCliente(cpf) {
        const index = this._clientes.findIndex(cliente => cliente.cpf === cpf);
        if (index >= 0) {
            this._clientes.splice(index, 1);
        }
    }
    listarCliente() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
}
