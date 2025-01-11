# Desafio Técnico - Soluções em JavaScript

Este repositório contém as soluções para um desafio técnico composto por 5 questões. Cada questão foi implementada em JavaScript e organizada em arquivos separados para facilitar a manutenção e a execução.

## Questões e Soluções

### 1) Valor da variável SOMA

**Arquivo:**  `src/soma.js`
**Descrição:**  Calcula o valor da variável  `SOMA`  após a execução de um loop.

**Como executar:**

    node src/soma.js

 **Saída esperada:**
 
    91
    
----------

### 2) Sequência de Fibonacci

**Arquivo:**  `src/fibonacci.js`
**Descrição:**  Verifica se um número informado pelo usuário pertence à sequência de Fibonacci.

**Como executar:**

    node src/fibonacci.js

 **Saída esperada:**
 
    Informe um número: 21
    O número 21 pertence à sequência de Fibonacci.
    

----------

### 3) Faturamento Diário

**Arquivo:**  `src/faturamento.js`
**Descrição:**  Analisa os dados de faturamento diário de uma distribuidora, calculando o menor valor, o maior valor e o número de dias em que o faturamento foi superior à média mensal.
 **Dados de entrada:**  O arquivo  `data/faturamento.json`  contém os valores de faturamento diário.
 
**Como executar:**

    node src/faturamento.js

 **Saída esperada:**
 
    Menor valor de faturamento: 373.7838
    Maior valor de faturamento: 48924.2448
    Número de dias com faturamento acima da média: 10
    

----------

### 4) Percentual de Representação por Estado

**Arquivo:**  `src/percentualEstados.js`
**Descrição:**  Calcula o percentual de representação de cada estado no faturamento mensal de uma distribuidora.
**Dados de entrada:**  Os valores de faturamento por estado estão definidos diretamente no código.

**Como executar:**

    node src/percentualEstados.js

 **Saída esperada:**
 
    SP: 37.53%
    RJ: 20.29%
    MG: 16.17%
    ES: 15.03%
    Outros: 10.98%
    

----------

### 5) Inversão de String

**Arquivo:**  `src/inverterString.js`
**Descrição:**  Inverte os caracteres de uma string informada pelo usuário.
 **Funcionamento:**
    -   O programa solicita que o usuário insira uma string.    
    -   Em seguida, exibe a string invertida.
    
**Como executar:**

    node src/inverterString.js

 **Saída esperada:**
 
    Informe uma string: Hello, World!
    String invertida: !dlroW ,olleH
    


## Como Executar o Projeto

1.  **Pré-requisitos:**
    
    -   Node.js instalado (versão 12 ou superior).
    -   Git (opcional, para clonar o repositório).
        
2.  **Clonar o repositório (opcional):**

		git clone git@github.com:mguedesdev/ProcessoSeletivo.git
		cd ProcessoSeletivo

3.  **Instalar dependências:**
    
    -   Este projeto não requer dependências externas.
        
4.  **Executar as questões:**
    
    -   Navegue até a pasta  `src`  e execute os arquivos JavaScript com o Node.js:
    
		    node src/soma.js
		    node src/fibonacci.js
		    node src/faturamento.js
		    node src/percentualEstados.js
		    node src/inverterString.js
        