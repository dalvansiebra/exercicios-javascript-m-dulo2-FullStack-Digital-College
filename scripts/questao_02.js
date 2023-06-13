function checar () {

    let letra = document.getElementById("letra").value.toLocaleLowerCase();
    const resultado = document.getElementById("resultado");

    let solucao = ''

    if (letra.length !== 1 || letra === Number) {
        
        // Não consegui verificar se o usuário colocou um número...

        resultado.textContent = 'Digite apenas UMA letra.'
        
    } else {
        
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
           solucao = 'vogal.'
        }else {
            solucao = 'consoante.'
        }
    
        resultado.textContent = `A letra ${letra} é uma ${solucao}`

    }
  
}