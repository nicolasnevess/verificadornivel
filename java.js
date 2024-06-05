function calcular() {
    let vitorias = parseInt(document.getElementById('vitorias').value);
    let derrotas = parseInt(document.getElementById('derrotas').value);

    if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
        alert("INSIRA VALORES VÁLIDOS!");
        return;
    }
    let conta = vitorias - derrotas;
    let z = Math.abs(conta);
    let winrate = vitorias / derrotas;
    let pontosRank = vitorias * winrate;

    if (winrate < 0.5) {
        pontosRank += pontosRank * 0.15;
    }

    let rank = '';
    if (derrotas == 0) {
        rank = 'Sem Rank';
    } else if (conta < 0) {
        rank = 'Sem Rank';
    } else if (pontosRank > 3000) {
        rank = 'Diamante';
    } else if (pontosRank < 25) {
        rank = 'Sem Rank';
    } else if (pontosRank < 100) {
        rank = 'Bronze';
    } else if (pontosRank < 500) {
        rank = 'Prata';
    } else if (pontosRank < 1500) {
        rank = 'Ouro';
    } else if (pontosRank < 3000) {
        rank = 'Safira';
    } else {
        rank = 'Sem Rank';
    }

    if (conta < 0) {
        document.getElementById('resultado').textContent = `O Herói tem um saldo de ${z} derrotas, e está ${rank}`;
    } else if (conta == 0) {
        document.getElementById('resultado').textContent = `O Herói tem um saldo de ${conta}, e está ${rank}`;
    } else if (derrotas == 0) {
        document.getElementById('resultado').textContent = `O Herói tem um saldo de ${conta} vitórias, e está ${rank}`;
    } else if (pontosRank < 25) {
        document.getElementById('resultado').textContent = `O Herói tem um saldo de ${conta} vitórias, e está ${rank}`;
    } else {
        document.getElementById('resultado').textContent = `O Herói tem um saldo de ${conta} vitórias, e está no rank ${rank}`;
    }

    console.log(pontosRank);
}
