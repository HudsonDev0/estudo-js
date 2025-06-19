let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // Acho esse raciocínio de negação um pouco complicado de se entender. Preferiria tirar as negações tanto da função inLista quanto da comparação dentro da função adicionar. Pois o return iria ir direto para o if dessa função, sem precisar ser invetido. Observe: na função inLista ele faz uma negação do -1, ou seja, se algo for diferente de -1, ele retorna true. Só que o array vazio sempre vai retornar -1 e o return será sempre false, não sendo possível colocar valor nenhum ao Array. Sendo necessário a negação desse return na comparação if da função adicionar. Isso poderia ser evitado se tirássemos a negação de ambas as funções(== na função inLista e remoção do ! na comparação if da função adicionar). Mas Ok, bola pra frente! 
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = ''; // resetar o input ao adicionar o número. Muito legal!
    num.focus(); // após adicionar o dado ao array, além de resetar o input(linha 31), ele vai manter o foco nele, não precisando clicar novamente para adicionar outro valor. Brabo demais!
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {
            soma += valores[pos];
            if(valores[pos] > maior) { 
                maior = valores[pos]; // aqui ele irá comparar o valor do primeiro elemento do array com o próximo, utilizando da varredura de array do for. Se o elemtento da posição "pos" for maior que o valor da variável "maior", a variável "maior" receberá esse valor contido nessa posição.
            }
            if(valores[pos] < menor) {
                menor = valores[pos]; // aqui segue oe mesmo raciocínio só que com o valor menor. Esse teste de for irá terminar quando chegar na última posição do array, onde não acontecerá mais nenhum teste, e assim teremos o maior e o menor valor em suas respectivas variáveis.
            }
        }
        media = soma/total;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados!</p>`;
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.`;
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.`;
        res.innerHTML += `<p>A soma dos valores é ${soma}`;
        res.innerHTML += `<p>A média dos valores é ${media}`;
        res.innerHTML += `<p>Lista final: ${valores}</p>`;
    }
}