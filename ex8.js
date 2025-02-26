
// Solicitar ao usuario o preço original do produto
let precoProduto = Number(prompt("Digite o preço do produto"));

// Calcular o desconto de 5% e calcular o preço do produto subtraindo o desconto
desconto = (precoProduto * 0.05);
precoFinal = (precoProduto - desconto);

// Informar ao usuario o preço final do produto com o desconto
console.log ("O preço do produto com desconto ficará " + precoFinal);