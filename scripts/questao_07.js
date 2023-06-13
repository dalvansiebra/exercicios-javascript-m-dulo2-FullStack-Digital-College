const calcular = document.getElementById("btn_aumente");

function calcular_aumento () {

    var salario_inicial = document.getElementById("input_salario").value;
    var resultado = document.getElementById("resultado");

    var percentual_aumento = '';
    
    
    
    if (salario_inicial != '') {
        
        if (salario_inicial <= 280) {
            percentual_aumento = 20% // coloquei como 0.20 e não funcionou também
            
        } if (salario_inicial <= 700) {
            percentual_aumento = 15%
            
        } if (salario_inicial <= 1500) {
            percentual_aumento = 10%
            
        } else {
            percentual_aumento = 5%
        }
        
        var salario_final = (salario_inicial ++ percentual_aumento);

        resultado.textContent = `Seu salário de ${salario_inicial} recebeu um aumento de ${percentual_aumento}, atualizando para ${salario_final}`


    
    } else {
        resultado.textContent = 'O campo está vazio.'
    }





    // switch (salario_inicial) {
    
    //     case <== 280:
    //         percentual_aumento = 20%;
    //         break;
    //     case <== 700:
    //         percentual_aumento = 15%;
    //         break;
    //     case <== 1500:
    //         percentual_aumento = 10%;
    //         break;
    //     default:
    //         percentual_aumento = 5%;
    //         break;



    //     resultado.textContent = `Seu salário de ${salario_inicial} recebeu um aumento de ${percentual_aumento}, atualizando para $`

    // }

}