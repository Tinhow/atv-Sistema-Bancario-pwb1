class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;
  
    constructor(nome: string, cpf: string, conta: Conta) {
      super(nome, cpf, conta);
      this._dependentes = [];
    }
  
    adicionarDependente(dependente: Cliente) {
      this._dependentes.push(dependente);
    }
  
    removerDependente(cpf: string) {
      const index = this._dependentes.findIndex(
        (dependente) => dependente.cpf === cpf
      );
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
  
  