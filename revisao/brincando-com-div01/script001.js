let dv = document.querySelector('div#eventos');

dv.addEventListener('click', clicar);
dv.addEventListener('mouseenter', entrou);
dv.addEventListener('mouseleave', saiu);
dv.addEventListener('mousedown', press);

function entrou() {
    dv.style.color = 'black'
    dv.style.background = 'white'
    dv.innerHTML = '<p>ENTROU!!!</p>'
}

function saiu() {
    dv.style.background = 'white'
    dv.style.color = 'black'
    dv.innerHTML = '<p>saiu...</p>'
}

function clicar() {
    dv.style.background = 'red'
    dv.style.color = 'white'
    dv.innerHTML = '<p>clicou!</p>'
}

function press() {
    dv.style.background = 'black'
    dv.style.color = 'lime'
    dv.innerHTML = '<p>pressionando!!</p>'
}
