
// Solicitar ao usuario a quantidade de cigarros e quantos anos está fumando
let cigarros = Number(prompt("Quantos cigarros fumado por dia?:"));
let anos = Number (prompt("Quantos anos está fumando?:"));

// Calcular o tempo e quantos dias de vida irá perder fumando a quantidade informada
tempo = anos * 365
dias = ((cigarros * tempo) * 10) / 1440

// Informar ao usuario quantos anos de vida ele irá perder fumando a quantidade de cigarros informada 
console.log ("Se você fumar: " + cigarros + " cigarros por dia, durante " + anos + " Anos, você perderá " + dias + " Dias de vida.")