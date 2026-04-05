alert('Boas vindas ao jogo no número secreto!');

let numero = 100;

// kjkjjkjk

let numeroSecreto = parseInt(Math.random() * numero + 1);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    
    chute = prompt(`Escolha um número entre 1 e ${numero}`);

    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} após ${tentativas} ${palavraTentativa}`);


