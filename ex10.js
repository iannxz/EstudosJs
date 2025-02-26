
// Solicitar ao usuario a quantidade de kms percorrido e a quantidade de dias que o carro foi usado
let kmPercorrido = Number(prompt("Qual foi a quantidade de km's percorrido?"));
let quantidadeDias = Number(prompt("Quantos dias o carro foi usado?"));

// Calcular os KM's percorrido e a quantidade de dias com base nas respostas do usuario
precoTotalPagarKM = kmPercorrido * 0.20 
quantidadeDiasKM = quantidadeDias * 90
total = precoTotalPagarKM + quantidadeDiasKM

// Informar ao usuario o quanto ele irá pagar pelo km's percorridos e a quantidade de dias pelo uso do carro
console.log ("O preço a pagar em Km's ficou em: " + precoTotalPagarKM + "Reais e a quantidade de dias ficou em " + quantidadeDiasKM + " Reais no total ficou: " + total +  "Reais" );