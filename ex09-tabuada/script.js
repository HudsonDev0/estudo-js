function tabuada(){

let n = document.getElementById('tnum')
let ate = document.getElementById('tate')
let res = document.getElementById('res')


if(n.value.length == 0 || ate.value.length == 0){
    alert('Insira os dados e tente novamente.')
}else{

    n = Number(n.value)
    ate = Number(ate.value)
    let tabresul = 0

    res.innerHTML = `Tabuada: <br>`
    for(let c = 1; c <= ate; c += 1){
        tabresul = n*c
        res.innerHTML += `${n} x ${c} = [${tabresul}] | `
        
    }
}

}