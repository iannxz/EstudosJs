
// Solicitar ao usuario 
let altura = Number(prompt("Digite a altura da parede"));
let largura = Number(prompt("Digite a largura da parede"));

// Calcular a área do quarto e dividir os litros de tinta
quarto = (altura * largura);
litroTinta = (quarto / 2);

// Informar ao usuário a quantidade necessária de tinta para pintar o quarto e a área total
console.log ("Será necessário " + litroTinta + " Litros de tinta para pintar a área de " + quarto + " do quarto");
