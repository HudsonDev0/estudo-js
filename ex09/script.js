function contagem(){
    
    let i = document.getElementById('tini')
    let f = document.getElementById('tfim')
    let p = document.getElementById('tpass')
    let res = document.getElementById('res')

    if(p.value.length == 0 || f.value.length == 0 || i.value.length == 0){
        alert('[ERRO]')
    } else{
            res.innerHTML = 'Contagem... '
            i = Number(i.value)
            f = Number(f.value)
            p = Number(p.value)

    }if(p == 0){
        alert('Passos não definidos. Definido automaticamente para 1')
        p = 1    
    }
    
    if(i < f){           
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c}`
        }
    } else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c}`
        }
    }

    res.innerHTML += ` \u{1F3C1}`
}
