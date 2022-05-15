function validaCPF(cpf) {
    if(cpf.length != 11)
        return false;

    let i, soma = 0, resultado;
    let numeros = cpf.substring(0, 9);
    let digitos = cpf.substring(9);

    for(i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
    }

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if(resultado != digitos.charAt(0))
        return false;

    soma = 0;
    numeros = cpf.substring(0, 10);

    for(i = 11; i > 1; i--) {
        soma += numeros.charAt(11 - i) * i;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if(resultado != digitos.charAt(1))
        return false;

    return true;
}

function validacao() {
    let success = document.getElementById('success');
    let error = document.getElementById('error');
    
    success.style.display = "none";
    error.style.display = "none";
    
    let cpf = document.getElementById('cpf_digitado').value;
    let resultado = validaCPF(cpf);

    if(resultado) {
        success.style.display = "block";
    } else {
        error.style.display = "block";
    }
}