// ---------------------------------------------------------------------------
// 2) Sequência de Fibonacci
// ---------------------------------------------------------------------------

function isFibonacci(num) {
  let a = 0, b = 1;
  while (b < num) {
      [a, b] = [b, a + b];
  }
  return b === num;
}

// Entrada do usuário
let numero = parseInt(prompt("Informe um número:"));

// Verificação e exibição do resultado
if (isFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}