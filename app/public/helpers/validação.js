function validarCPF(cpf) {

    var soma = 0;
    var resto;
   
    var cpf = cpf.replace(/[^\d]+/g, '');

    if(cpf == '' || cpf.length != 11) 
        return false;

    if (cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;

tamanho = cpf.length - 2;
numeros = cpf.substring(0,tamanho);
digitos = cpf.substring(tamanho);
soma = 0;
pos = tamanho - 7;

for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
        pos = 9;
}

resto = soma % 11 < 2 ? 0 : 11 - soma % 11;
if (resto != digitos.charAt(0))
    return false;

tamanho = tamanho + 1;
numeros = cpf.substring(0,tamanho);
soma = 0;
pos = tamanho + 1;

for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
        pos = 9;
}

resto = soma % 11 < 2 ? 0 : 11 - soma % 11;
if (resto != digitos.charAt(1)) return false;

return true;

}