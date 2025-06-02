let agora = new Date()
let diaSem = agora.getDay()

/*
esse getday pega o número do dia da semana:

    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado

*/

switch(diaSem){
    case 0:
        console.log(`Hoje é DOMINGO!`)
        break
    case 1: 
        console.log(`Hoje é SEGUNDA!`)
        break
    case 2:
        console.log(`Hoje é TERÇA`)    
        break
    case 3:
        console.log(`Hoje é QUARTA`)
        break    
    case 4:
        console.log(`Hoje é QUINTA`)
        break
    case 5:
        console.log(`Hoje é SEXTA`)
        break        
    case 6:
        console.log(`Hoje é SÁBADO`)
        break    
    default:
        console.log(`[ERRO]`)
        break
}

