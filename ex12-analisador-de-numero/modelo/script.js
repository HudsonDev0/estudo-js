let tnum = document.getElementById('fnum');
let arraynum = [];
let res = document.getElementById('res');
let res2 = document.getElementById('res2')

function adicionar() {
    let x = Number(tnum.value)
    if(x <= 0 || x > 100) {
        alert('Número inválido!')
    } else if(arraynum.indexOf(x) == -1) { {
        res2.innerHTML = '';
        arraynum.push(x);
        res.innerHTML += `<p>Número ${x} adicionado.</p>`
        }
    }else {
        alert('número já contido na lista')
    }
}


function resul() {
    if(arraynum.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
    arraynum.sort()
    let s = 0
    for(pos in arraynum) {
        s += arraynum[pos]
    }
    let media = s/arraynum.length;
        res2.innerHTML += `<p>Ao todo temos ${arraynum.length} números cadastrados.</p>`
        res2.innerHTML += `<p>O menor valor informado foi ${arraynum[0]}</p>`
        res2.innerHTML += `<p>O maior valor informado foi ${arraynum[arraynum.length - 1]}</p>`
        res2.innerHTML += `<p>A soma dos elementos do array é: ${s}</p>`
        res2.innerHTML += `<p>A média aritmética entre os elementos é: ${media}</p>`
        res2.innerHTML += `<p>Array final: ${arraynum}</p>`
    }
    res.innerHTML = '<p></p>';
    arraynum = [];
}








/*
let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumber(n) {
   if(Number(n) >= 1 && Number(n) <= 100){
    return true
   }else {
    return false
   }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inLista(num.value, valores)) {

    }else {
        alert('Número inválido ou já consta na lista. Tente novamente.')
    }
}
*/