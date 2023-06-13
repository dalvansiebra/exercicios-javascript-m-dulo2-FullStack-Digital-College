function verificar () {
    
    let valor1 = document.getElementById("numero_1").value;
    let valor2 = document.getElementById("numero_2").value;
    let valor3 = document.getElementById("numero_3").value;
    const resultado = document.getElementById("resultado");
    
    if (valor1 !== '' && valor2 !== '' && valor3 !== '') {
        
        let maior;
        let medio;
        let menor;

        //  1   2   3
        if (valor1 < valor2 && valor2 < valor3) {
            maior = valor3;
            medio = valor2;
            menor =  valor1;
        //  1   3   2
        } if (valor1 < valor3 && valor3 > valor2) {
            maior = valor2;
            medio = valor3;
            menor = valor1;
        //  2   3   1
        } if (valor3 < valor1 && valor1 < valor2) {
            maior = valor2;
            medio = valor1;
            menor = valor3;
        //  2   1   3
        } if (valor2 < valor1 && valor1 < valor3) {
            maior = valor3;
            medio = valor1;
            menor = valor2;
        //  3   1   2
        } if (valor2 < valor3 && valor3 < valor1) {
            maior = valor1;
            medio = valor3;
            menor = valor2;
        //  3   2   1
        } else {
            maior = valor1;
            medio = valor2;
            menor = valor3;
        }

        resultado.textContent = `Crescente ${menor}, ${medio}, ${maior} / Decrescente ${maior}, ${medio}, ${menor}`

    } else {
        resultado.textContent = `Preencha todos os campos!!`
    }
}

// 1   2   3
// 1   3   2
// 2   3   1
// 2   1   3
// 3   1   2
// 3   2   1






