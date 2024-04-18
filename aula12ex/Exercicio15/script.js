function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = window.document.querySelector('#txtano')
    var resultado = window.document.getElementById('resultado')

    if (Number(formularioano.value) == 0 || Number(formularioano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioano.value)
        // resultado.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
            // Crianca
            img.setAttribute('src', 'img/criancam.jpg')  
            }
            else if ( idade < 21) {
                //JOVEM
                img.setAttribute('src', 'img/jovemm.jpg')  
            }
            else if ( idade < 65) {
                // adulto
                img.setAttribute('src', 'img/adultom.jpg')  
            }
            else { //IDOSO
                img.setAttribute('src', 'img/idosom.jpg')  
            }
            
         }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Crianca  
                img.setAttribute('src', 'img/criancaf.jpg')  
                }
                else if ( idade < 21) {
                    //JOVEM
                    img.setAttribute('src', 'img/jovemf.jpg')  
                }
                else if ( idade < 65) {
                    // adulto
                    img.setAttribute('src', 'img/adultof.jpg')  
                }
                else { //IDOSO
                    img.setAttribute('src', 'img/idosof.jpg')  
                }
        }
        resultado.innerHTML = `<p>Detectamos: ${genero} de ${idade} anos.</p>`
        resultado.appendChild(img) /*PARA ADICIONAR UM ELEMENTO*/
        /*resultado.style.textAlign= 'center'*/
    }
}