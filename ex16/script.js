function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var inic = Number(inicio.value)
    var fi = Number(fim.value)
    var pass = Number(passo.value)
    var resultado = window.document.getElementById('resultado')

    if (inic == 0 || fi == 0) {
        
        //window.alert('ERROR, falta dados!')
        resultado.innerHTML = ('Impossivel contar!')
        
    }
    else {
        resultado.innerHTML = ('Contando: <br>')
        if (pass <= 0 ) {
            window.alert('Passo inválido, considerando passo 1.')
            pass = 1;
        }
        if (inic < fi) {  
            //Contagem crescente
            for(var c = inic; c <= fi; c += pass) {
            resultado.innerHTML += `${c} \u{1F449} `
        }      
        }
        else {
            //Contagem regressiva
            for (var c = inic; c >= fi; c -= pass)
            resultado.innerHTML += `${c} \u{1F449} `
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}