class Clientes {
    _clientes;
    constructor() {
        this._clientes = new Array;
        const conta1 = new Conta('1', 450);
        const poupanca1 = new Poupanca('2', 3000);
        const contaBonificada1 = new ContaBonificada('3', 1500);
        const cliente1 = new Cliente("Will", "1234", conta1);
        const cliente2 = new Cliente("Thiago", "5678", poupanca1);
        const cliente3 = new Cliente("Brunoo", "9101", contaBonificada1);
        this._clientes.push(cliente1, cliente2, cliente3);
    }
    inserirCliente(cliente) {
        this._clientes.push(cliente);
    }
    removerCliente(cpf) {
        const index = this._clientes.findIndex(cliente => cliente.cpf === cpf);
        if (index !== -1) {
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
