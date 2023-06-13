function maior () {

    let num1 = document.getElementById("numero_1").value;
    let num2 = document.getElementById("numero_2").value;
    let num3 = document.getElementById("numero_3").value;
    const resultado = document.getElementById("resultado");

    let maior = '';

    if (num1 !== '' && num2 !== '' && num3 !== '') {
        
        
        if (num1 > num2 && num1 > num3) {
            maior = num1;
            
        } if (num2 > num1 && num2 > num3) {
            maior = num2;
            
        } if (num3 > num1 && num3 > num2) {
            maior = num3;
            
        } else {
            resultado.textContent = `Todos os números são iguais.`
        }
      
        resultado.textContent = `O maior número entre (${num1}, ${num2} e ${num3}) é: ${maior}.`


    }else {
        resultado.textContent = `Preencha todos os campos!`
    }


}