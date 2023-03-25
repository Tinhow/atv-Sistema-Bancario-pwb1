class ClienteController {
    _inputNome;
    _inputCpf;
    _selecionarConta;
    _clientes;
    _contas;
    constructor() {
        this._inputNome = document.querySelector("#nome");
        this._inputCpf = document.querySelector("#cpf");
        this._selecionarConta = document.querySelector("#tipoConta");
        this._clientes = new Clientes();
        this._contas = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        const numero = Math.floor(Math.random() * 1000).toString();
        let tipoDeConta = this._selecionarConta.options[this._selecionarConta.selectedIndex].value;
        let cliente;
        let conta;
        switch (tipoDeConta) {
            case "poupança":
                conta = new Poupanca(numero, 0);
                cliente = new Cliente(this._inputNome.value, this._inputCpf.value, conta);
                break;
            case "bonificada":
                conta = new ContaBonificada(numero, 0);
                cliente = new Cliente(this._inputNome.value, this._inputCpf.value, conta);
                break;
            default:
                conta = new Conta(numero, 0);
                cliente = new Cliente(this._inputNome.value, this._inputCpf.value, conta);
        }
        this._contas.inserir(conta);
        this._clientes.inserirCliente(cliente);
        this._inputNome.value = "";
        this._inputCpf.value = "";
        this.inserirHTML(cliente);
    }
    inserirHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = `Nome: ${cliente.nome}, CPF: ${cliente._cpf}, Conta: ${cliente.conta}`;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this._contas.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
    listar() {
        this._clientes.listarCliente().forEach(cliente => {
            this.inserirHTML(cliente);
        });
    }
}
