// ---------------------------------------------------------------------------
// 5) Inversão de String
// ---------------------------------------------------------------------------
const readline = require('readline');

// Configura a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter uma string
function inverterString(s) {
    let invertida = "";
    for (let i = s.length - 1; i >= 0; i--) {
        invertida += s[i];
    }
    return invertida;
}

// Solicita a entrada do usuário
rl.question("Informe uma string: ", (texto) => {
    // Exibe a string invertida
    console.log(`String invertida: ${inverterString(texto)}`);

    // Fecha a interface de leitura
    rl.close();
});