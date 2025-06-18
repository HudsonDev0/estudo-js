//Função para calcular fatorial de um number



function fatorial(n) { // PRESTE ATENÇÃO! inicio...... teste.. bloco.. incremento.. teste.. bloco.. incremento.. teste.. quebrou! Isso é a estrutura for.
    let fat = 1
    for(c = n; c > 1; c--) {
        console.log(c)
        fat *= c
    }
    return fat
}

console.log(fatorial(5));
