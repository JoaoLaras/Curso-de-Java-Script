let numDig = window.document.getElementById('dig')
let list = window.document.getElementById('flista')
let res = window.document.getElementById('resultado')
let valores = []
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {        return false}

}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if (isNumero(numDig.value) && !inLista(numDig.value, valores)) {
        valores.push(Number(numDig.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${numDig.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
        
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numDig.value = ''
    numDig.focus()
}
function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        
        media = soma/tot
        res.innerHTML =''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
    }
}