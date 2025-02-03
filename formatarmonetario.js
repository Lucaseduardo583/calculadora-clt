function fnFormatarMonetario(valor){
    console.log(valor)
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}