const verificar = document.getElementById('verificar');

function divisor () {
    
    const primeiro_numero = document.getElementById('primeiro_numero').value;
    const segundo_numero = document.getElementById('segundo_numero').value;
    const resultado = document.getElementById('resultado');
    
    if (primeiro_numero !== '' && segundo_numero !== '') {
        
        let resto_divisao = (primeiro_numero % segundo_numero)
        
        let resultado_divisao = (primeiro_numero / segundo_numero).toFixed(2)
    
        if (resto_divisao == 0) {
            resultado.textContent = `Resultado: ${segundo_numero} é divisor de ${primeiro_numero}, o resultado da divisão é ${resultado_divisao} e o resto da divisão é igual a ${resto_divisao}.`
        }else {
            resultado.textContent = `Resultado: ${segundo_numero} não é divisor de ${primeiro_numero}, o resultado da divisão é ${resultado_divisao} e o resto da divisão é igual a ${resto_divisao}.`
        }

    }else {
        resultado.textContent = `Preencha todos os campos!`
    }

}


verificar.addEventListener('click', divisor);