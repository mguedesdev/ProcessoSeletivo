// ---------------------------------------------------------------------------
// 3) Faturamento Diário
// ---------------------------------------------------------------------------

const fs = require('fs');

// Carregar dados do JSON
let faturamento = JSON.parse(fs.readFileSync('./data/faturamento.json', 'utf-8'));

// Filtrar dias com faturamento
let diasComFaturamento = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);

// Calcular menor, maior e média
let menor = Math.min(...diasComFaturamento);
let maior = Math.max(...diasComFaturamento);
let media = diasComFaturamento.reduce((acc, valor) => acc + valor, 0) / diasComFaturamento.length;

// Contar dias acima da média
let diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > media).length;

// Resultados
console.log(`Menor valor de faturamento: ${menor}`);
console.log(`Maior valor de faturamento: ${maior}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);