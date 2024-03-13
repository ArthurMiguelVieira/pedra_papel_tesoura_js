// Variáveis para controlar o jogo
let empate = 0;
let vitoria = 0;
let derrota = 0;
let round = 0;

// Elementos HTML
let jogadaPlayer = document.querySelector('#jogadaPlayer');
let jogadaComputador = document.querySelector('#jogadaComputador');
let resultados = document.querySelector('#resultado');
let vitorias = document.querySelector('#vitorias');
let derrotas = document.querySelector('#derrotas');
let empates = document.querySelector('#empates');
let rounds = document.querySelector('#rounds');

// Função para reiniciar o jogo
function reiniciarJogo() {
    empate = 0;
    vitoria = 0;
    derrota = 0;
    round = 0;

    jogadaPlayer.src = "./img/interrogacao.png";
    jogadaComputador.src = "./img/interrogacao.png";
    resultados.innerHTML = "Esperando jogada";
    empates.textContent = "0 Empates";
    vitorias.textContent = "0 Vitórias";
    derrotas.textContent = "0 Derrotas";
    rounds.textContent = "0 Rounds";
}

// Função para jogar
function jogar(escolhaUsuario) {
    // Verifica se o jogo ainda não terminou
    if (vitoria < 5 && derrota < 5) {
        const escolhasComputador = ['pedra', 'papel', 'tesoura'];
        let escolhaComputador = escolhasComputador[Math.floor(Math.random() * 3)];

        // Verifica o resultado da rodada
        if (escolhaUsuario == escolhaComputador) {
            jogadaPlayer.src = "./img/" + escolhaUsuario + '.png';
            jogadaComputador.src = "./img/" + escolhaComputador + '.png';
            resultados.innerHTML = "Empate";
            empate++;
            empates.textContent = empate.toString() + " Empates";
        } else if (escolhaUsuario == 'pedra' && escolhaComputador == 'papel') {
            jogadaPlayer.src = "./img/" + escolhaUsuario + 'Derrota.png';
            jogadaComputador.src = "./img/" + escolhaComputador + 'Vitoria.png';
            resultados.innerHTML = "Derrota";
            derrota++;
            derrotas.textContent = derrota.toString() + " Derrotas";
        } else if (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura') {
            jogadaPlayer.src = "./img/" + escolhaUsuario + 'Vitoria.png';
            jogadaComputador.src = "./img/" + escolhaComputador + 'Derrota.png';
            resultados.innerHTML = "Vitória";
            vitoria++;
            vitorias.textContent = vitoria.toString() + " Vitórias";
        } else if (escolhaUsuario == 'papel' && escolhaComputador == 'tesoura') {
            jogadaPlayer.src = "./img/" + escolhaUsuario + 'Derrota.png';
            jogadaComputador.src = "./img/" + escolhaComputador + 'Vitoria.png';
            resultados.innerHTML = "Derrota";
            derrota++;
            derrotas.textContent = derrota.toString() + " Derrotas";
        } else if (escolhaUsuario == 'papel' && escolhaComputador == 'pedra') {
            jogadaPlayer.src = "./img/" + escolhaUsuario + 'Vitoria.png';
            jogadaComputador.src = "./img/" + escolhaComputador + 'Derrota.png';
            resultados.innerHTML = "Vitória";
            vitoria++;
            vitorias.textContent = vitoria.toString() + " Vitórias";
        } else if (escolhaUsuario == 'tesoura' && escolhaComputador == 'pedra') {
            jogadaPlayer.src = "./img/" + escolhaUsuario + 'Derrota.png';
            jogadaComputador.src = "./img/" + escolhaComputador + 'Vitoria.png';
            resultados.innerHTML = "Derrota";
            derrota++;
            derrotas.textContent = derrota.toString() + " Derrotas";
        } else if (escolhaUsuario == 'tesoura' && escolhaComputador == 'papel') {
            jogadaPlayer.src = "./img/" + escolhaUsuario + 'Vitoria.png';
            jogadaComputador.src = "./img/" + escolhaComputador + 'Derrota.png';
            resultados.innerHTML = "Vitória";
            vitoria++;
            vitorias.textContent = vitoria.toString() + " Vitórias";
        }

        // Atualiza o número de rounds
        round++;
        rounds.textContent = round.toString() + " Rounds";
    }

    // Verifica se o jogo terminou e exibe mensagem
    if (derrota == 5) {
        alert("Você Perdeu :(");
        reiniciarJogo();
    } else if (vitoria == 5) {
        alert("Você Venceu :)");
        reiniciarJogo();
    }
}
