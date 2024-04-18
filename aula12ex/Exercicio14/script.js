function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    var second = data.getSeconds()
    
    
    
    msg.innerHTML = `Agora são exatamente ${hora} horas e ${minute} minutos e ${second} segundos, horário de Brasilia.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'img/manha.jpg'
        document.body.style.background = '#201800'
    }
    else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'img/tarde.jpeg'
        document.body.style.background = '#4D6918'
    }
    else {
        //BOA NOITE
        img.src = 'img/noite.jpg'
        document.body.style.background = '#131F43'
    }
} 

