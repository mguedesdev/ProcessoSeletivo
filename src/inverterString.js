// ---------------------------------------------------------------------------
// 5) Inversão de String
// ---------------------------------------------------------------------------

function inverterString(s) {
  let invertida = "";
  for (let i = s.length - 1; i >= 0; i--) {
      invertida += s[i];
  }
  return invertida;
}

// Entrada do usuário
let texto = prompt("Informe uma string:");

// Exibir resultado
console.log(`String invertida: ${inverterString(texto)}`);