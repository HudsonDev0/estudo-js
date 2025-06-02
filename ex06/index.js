let idade = 18
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não pode votar')
} else{

    //if (idade >= 16 && idade < 18){ se a idade for maior que 16, automaticamente ela é igual ou maior que 18. Não precisando colocar essa condição de "">= 16" 

    if(idade < 18 || idade > 65){
        console.log('Voto opcional.')
    } else if (idade >= 18){
        console.log('Voto obrigatório.')
    }
}