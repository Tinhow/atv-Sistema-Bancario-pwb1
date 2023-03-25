// vai exibir no html //
const clienteController = new ClienteController();
clienteController.listar();
/////// para exibir no console /////
const clientes = new Clientes();
// Inserindo clientes
const contaPoupanca = new Poupanca("123", 100);
const cliente1 = new Cliente("João", "1114", contaPoupanca);
clientes.inserirCliente(cliente1);
const contaBonificada = new ContaBonificada("456", 200);
const cliente2 = new Cliente("Maria", "2223", contaBonificada);
clientes.inserirCliente(cliente2);
// Pesquisando cliente
const clienteEncontrado = clientes.pesquisar("1114");
if (clienteEncontrado) {
    console.log("Cliente encontrado:");
    console.log(clienteEncontrado.toString());
}
else {
    console.log("Cliente não encontrado.");
}
// Removendo cliente
clientes.removerCliente("111.111.111-11");
console.log("Clientes após remoção:");
clientes.listarCliente().forEach((cliente) => {
    console.log(cliente.toString());
});
