function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let boa = document.getElementById('boa')
    let data = new Date()
    let hora = data.getHours()
    let mins = data.getMinutes()
    msg.innerHTML = `<p>Agora são <strong>${hora}:${mins} horas!</strong></p>`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = '#efd139'
        boa.innerHTML = `<strong>BOM DIA!</strong>`
    } else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#d98c2e'
        boa.innerHTML = `<strong>BOA TARDE!</strong>`
    } else{
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#302733'
        boa.innerHTML = `<strong>BOA NOITE!</strong>`
    }
}