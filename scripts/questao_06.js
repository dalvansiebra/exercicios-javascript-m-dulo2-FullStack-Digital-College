function calcular_media () {

    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const resultado = document.getElementById("resultado");
    
    // const media_geral = 7
    // const media_maxima = 10
    
    if (nota1 !== '' && nota2 !== '') {
        
        const media = ((nota1 + nota2) / 2);

        // const nota_total = nota1 + nota2;
        // const media = nota_total / 2;

        // console.log(nota_total);
        // console.log(media);
    
        if (media < 7) {
            resultado.textContent = `Reprovado! Sua média é ${media}.`;
    
        } if (media >= 7 && media <= 10) {
            resultado.textContent = `Aprovado! Sua média é ${media}.`;
    
        } if (media == 10) {
            resultado.textContent = `Aprovado com Distinção! Sua média é ${media}, o resultado máximo!`;
    
        } else {
            resultado.textContent = `Digite uma nota válida.`;
        }

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }

}
