function loadsystem() {
    var data = new Date()
    var ano = data.getFullYear()
    var jan = window.document.getElementById('janela')
    var msg = window.document.getElementById('msg')
    var nasc = window.document.getElementById('box')
    var img = window.document.getElementById('image')
   // var opcoesSexo = window.document.getElementsByName('opção')

    if (nasc.value.length == 0 || Number(nasc.value) > ano ) { // Caso não digite nada OU o valor digitado seja maior que o ano atual:

        window.alert('[ERRO], Verifique os dados e tente novamente')
        
    } else {
        var fsex = document.getElementsByName('opção')
        var idade = ano - Number(nasc.value)
        var genero = ''
        if (fsex[0].checked) { // Se o primeiro marcador for selecionado (0 , homem)
            genero = 'Homem'
            if (idade >= 1 && idade < 5) {
                jan.classList.add('alta')
                img.src = 'homembaby.png'

            } else if (idade >= 6 && idade <= 17) {
                jan.classList.add('alta')
                img.src = 'homemkid.png'

            } else if (idade > 17 && idade <= 35) {
                jan.classList.add('alta')
                img.src = 'homemjovem.png'
            
            } else if (idade > 35 && idade <= 120) {
                jan.classList.add('alta')
                img.src = 'homemvelho.png'
            } else if (idade > 120) {
                jan.classList.add('alta')
                img.src = 'skull.png'
            }      
        } else if (fsex[1].checked) { // Se o segundo marcador for selecionado(1 , mulher)
            genero = 'Mulher'
            if (idade >= 1 && idade < 5) {
                jan.classList.add('alta')
                img.src = 'mulherbaby.png'

            } else if (idade >= 6 && idade <= 17) {
                jan.classList.add('alta') // Alterando altura da janela section 'janela' para caber uma imagem dentro.
                img.src = 'mulherkid.png'
            
            } else if (idade > 17 && idade <= 35) {
                jan.classList.add('alta')
                img.src = 'mulherjovem.png'

            } else if (idade > 35 && idade <= 120) {
                jan.classList.add('alta')
                img.src = 'mulhercoroa.png'

            } else if (idade > 120) {
                jan.classList.add('alta')
                img.src = 'skull.png'
            }   
        }
        
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

    // ABAIXO ESTÁ O CODIGO COM REPETIÇÃO FOR

    /* for (let i = 0; i < opcoesSexo.length; i++) {
        if (opcoesSexo[i].checked) {
            // Exiba uma mensagem com base na opção selecionada
            if (opcoesSexo[i].value === 'M') {
                jan.classList.add('alta') 
                img.src = 'homemvelho.png'
                msg.innerHTML = `Detectamos um homem de ${idade} anos`
            } else if (opcoesSexo[i].value === 'F') {
                jan.classList.add('alta')
                img.src = 'mulhercoroa.png'
                msg.innerHTML = `Detectamos uma mulher de ${idade} anos`
            }
            return *
}
    } */
}            