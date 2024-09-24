// Array dos jogadores e seus resultados
let jogadores = [
    { nome: "José", vitorias: 50, derrotas: 21 },
    { nome: "Denis", vitorias: 10, derrotas: 5 },
    { nome: "Amanda", vitorias: 150, derrotas: 9 },
    { nome: "Geovana", vitorias: 90, derrotas: 17 }
];

// Função para calcular o saldo de vitórias
function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível do jogador
function calcularNivel(saldoVitorias) {
    let nivel;

    // Verifica o nível com base no saldo de vitórias
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

// Iterando sobre cada jogador e exibindo o resultado no console
for (let i = 0; i < jogadores.length; i++) { // .length retorna o número de elementos do array 
    let jogador = jogadores[i];
    // Para acessar informação específica dentro do array, se usa a notação de ponto (.) seguida pelo nome da propriedade desejada
    let saldoVitorias = calcularSaldoVitorias(jogador.vitorias, jogador.derrotas);
    let nivel = calcularNivel(saldoVitorias);
    console.log(`${jogador.nome} tem saldo de ${saldoVitorias} pontos e está no nível de ${nivel}`);
}
