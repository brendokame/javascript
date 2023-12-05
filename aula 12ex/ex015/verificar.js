function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res =  document.querySelector('div#res') 
    if (fano.value.length === 0 || parseInt(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebemenino.jpg');
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem.jpg');
            } else if (idade < 50) {
                // Adulto
            } else {
                // idoso
            }
        }
        if (fsex [1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && <10) {
                // criança
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50){
                // Adulto
            } else {
                // idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}
