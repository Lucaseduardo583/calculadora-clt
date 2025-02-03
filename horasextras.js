function horasextras(salario, horastrabalhadas, cargahoraria) {

 if(isNaN (salario) || isNaN (horastrabalhadas) || isNaN (cargahoraria)){
     return "todos os valores devem ser números";
 }
    if (salario < 0 || horastrabalhadas < 0 || cargahoraria < 0) {
        return "todos os valores devem ser positivos";
    }

    let horasextras = 0;
    if(horastrabalhadas > cargahoraria){
        horasextras = (horastrabalhadas - cargahoraria) * salario;
    }

    return horasextras;
}

module.exports = horasextras;