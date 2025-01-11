// ---------------------------------------------------------------------------
// 2) Sequência de Fibonacci
// ---------------------------------------------------------------------------

const readline = require('readline');

function isFibonacci(num) {
  let a = 0, b = 1;
  while (b < num) {
    [a, b] = [b, a + b];
  }
  return b === num;
}

// Configuração do readline para entrada no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicita ao usuário o número
rl.question("Informe um número: ", (input) => {
  const numero = parseInt(input, 10);
  
  if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
  }

  rl.close(); // Encerra a interface readline
});
