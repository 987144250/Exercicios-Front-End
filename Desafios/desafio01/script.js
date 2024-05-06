function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 4
    msg.innerText = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'amanhecer01.png'

        document.body.style.background = '#fdb338' // Atribuindo a cor da paleta selecionada no gimp(amanhecer01.png) para o background atual,chamando o body atraves de 'estilo.css'

    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'entardecer.png'
        document.body.style.background = '#faa876'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#1890c7'
    }
    
    }