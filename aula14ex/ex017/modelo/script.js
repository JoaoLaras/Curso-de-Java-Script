function calcular() {
    var numdig = window.document.getElementById('numberdig')
    var tab = window.document.getElementById('selecttabuada')
    if (numdig.value.length == 0 ) { 
        window.alert('Por favor digite um número')
        
    } else { 
        var numero = Number(numdig.value)
        var c = 1 
        tab.innerHTML = ''
        while(c <= 10 ) {
            var item = window.document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    }
    
    
    
    
}