document.getElementById('bt-calcular').addEventListener('click', function(){
    
    let salario = $('#salario').val()
    
    let horastrabalhadas = $('#horas-trabalhadas').val()
    
    let cargahoraria = $('#carga-horaria').val()
    

    let horasextras = fnHorasExtras(salario, horastrabalhadas, cargahoraria)
    $('#resposta').html(fnFormatarMonetario(horasextras))
})