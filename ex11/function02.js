function soma(n1=0, n2=0) { // ao colocar n1 e n2 recebendo 0, caso não seja colocado um valor nas variáveis, o zero já estará atribuído, fazendo assim que a variável não seja undefined.
    return n1 + n2
};

let res = soma(6);

console.log(res);


function fat(n) {
    let fat = 1;
    for(c = n; c > 1; c--) {
        fat *= c;
    }
    return fat
}

console.log(fat(7));