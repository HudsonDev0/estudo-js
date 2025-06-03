function verificar(){
    let data = new Date()
    let anoatual = data.getFullYear()
    let fano = document.getElementById('txtano') 
    let res = document.querySelector('div#res')
    let idade = anoatual - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')

    if (fano.value == 0 || Number(fano.value) > anoatual){
        alert('Verifique os dados e tente novamente')
    } else {
        let sex = document.getElementsByName('sexo')
        if(sex[0].checked) {
            if(idade >= 0 && idade < 13){

            genero = 'Menino'
            img.setAttribute('src', 'imagens/menino.png')
            res.innerHTML = `<p>Você é um(a) ${genero} de ${idade} anos.</p>`

        } else if (idade < 23){

            genero = 'Rapaz'
            img.setAttribute('src', 'imagens/rapaz.png')
            res.innerHTML = `<p>Você é um(a) ${genero} de ${idade} anos.</p>`

        } else if (idade < 24 && idade > 22){

            genero = 'Larrasco'
            img.setAttribute('src', 'larrasco.png')
            res.innerHTML = `<p>Você é um ${genero}.</p>`

        } else if (idade < 50){

            genero = 'Homem'
            img.setAttribute('src', 'imagens/homem.png')
            res.innerHTML = `<p>Você é um(a) ${genero} de ${idade} anos.</p>`

        } else {

            genero = 'Senhor'
            img.setAttribute('src', 'imagens/senhor.png')
            res.innerHTML = `<p>Você é um(a) ${genero} de ${idade} anos.</p>`

        }
            
        } else if(sex[1]){
            if(idade >= 0 && idade < 13){

            genero = 'Menina'
            img.setAttribute('src', 'imagens/menina.png')

        } else if (idade < 23){

            genero = 'Garota'
            img.setAttribute('src', 'imagens/garota.png')

        }  else if (idade < 50){

            genero = 'Mulher'
            img.setAttribute('src', 'imagens/mulher.png')

        } else {

            genero = 'Senhora'
            img.setAttribute('src', 'imagens/senhora.png')

        }

        res.innerHTML = `<p>Você é um(a) ${genero} de ${idade} anos.</p>`
        
        }
    }
        res.appendChild(img)
}