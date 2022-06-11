let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

    let clienteMedeia = [
        {produto: 'Camisa de lã', valor: 59.0},
        {produto: 'Calcinha de renda', valor: 20.0},
        {produto: 'Calça jeans clara', valor: 130.0},
        {produto: 'Camiseta cinza', valor: 36.0},
        {produto:  'Meia calça transparente', valor: 30.0}]
    
    let clienteMoira = [
        {produto: 'Calça preta', valor: 100.0},
        {produto: 'Meias de personagens', valor: 40.0},
        {produto: 'Short verde canelado', valor: 80.0},
        {produto: 'Óculos escuro marrom', valor: 100.0},git
        {produto: 'Jaqueta Jeans', valor: 300.0},
        {produto: 'Coturno preto tratorado', valor: 190.0},
        {produto: 'Camiseta de Anime', valor: 60.0},
        {produto: 'Sutiã com bojo', valor:50.0},
        {produto: 'Blusa simples', valor: 35.0},
        {produto: 'Vestido de festa azul', valor: 250.0},
        {produto: 'Saia social preta', valor: 80.0}]


        // RESOLVENDO USANDO OS NOVOS MÉTODOS 
        // Aqui está sendo aplicado o "push" para calcular o valor de desconto caso se apliquem as regras de negócio

        let valorTotal = []
        let valorDesconto []

        function calculandoDesconto (valor) {
            if (valor >=200){
                valorDesconto.push(valor*0,5)
            }
            else if (valor >= 100.) {
                valorDesconto.push(valor *0,2)
            }
            else if (valor >=80){
                valorDesconto.push(valor*0,1)
            }
            else if (valor>=50){
                valorDesconto.push (valor*0.05)
            }
        }

        //COMPRAS

        iniciarCompras(produtosClientes){

            let totalProduto= produtosCliente.lenght  //Nesse caso, o lenght é utilizado para pecorrer todos os itens

            produtosCliente.forEach(item => {
                valorTotal.push (item.valor)
                calculandoDesconto(item.valor)
            })
            valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual) 
           valorDesconto = valorDesconto.reduce((acumulador, atual) => acumulador + atual)

            let valorFinal = valorTotal - valorDesconto
            let dataDaCompra = new Date ()

            let notaFiscal = {

                "Valor Total da compra": R$${valorTotal.toFixed(2).replace ('.',','),
                "Valor do Desconto": R$${valorDesconto.toFixed(2).replace ('.',','),
                "Valor Final"R$${valorFinal.toFixed(2).replace ('.',','),
                "Data da Compra": dataDaCompra.toLocaleDateString('pt-BR', {  //Aqui será colocado data, hora, minuto e segundo da compra.
                    hour: 'numeric', 
                    minute: 'numeric', 
                    second: 'numeric'

            }
        }

        iniciarCompras(clienteLilit)
        iniciarCompras(clienteMedeia)
        iniciarCompras(clienteMoira)


        // Diferente da semana anterior, aprendemos o "push", para adição de descontos e a inserção do horário na nota fiscal.