let val = [0, 5, 8, 6, 2, 9, 4];

/*for(let pos = 0; pos < val.length; pos++){
    console.log(`A posição ${pos} tem o valor ${val[pos]}`);
};
    Simplificando estrutura for para array abaixo
*/
for(let pos in val) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`);
};

//console.log(val.indexOf(4)); conferir se um dado está contido em um array

let dado = val.indexOf(2); // essa variável receberá a posição desse dado dentro do array

if(dado < 0) {
    console.log(`Esse dado não está contido no array: ${val}`);
}else {
    console.log(`O dado ${val[dado]} está contido na posição ${dado} do array: ${val}`)
}