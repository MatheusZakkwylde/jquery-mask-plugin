$(document).ready(function () {

    //APLICANDO REGEX
    let options = {
        translation:{
            //APENAS DE A a Z MAISCULO
            'A': {pattern: /[A-Z]/},
            //APENAS MENUSCULA
            'L':{pattern:/[a-z]/},
            //APENAS X MAISCULO E DE 0 A NOVE
            'w':{pattern: /[X0-9]/}
        }
    }

    //CPF
    $('#cpf').mask('000.000.000-00')
    //CNPJ
    $('#cnpj').mask('00.000.000/0000-00')
    //TELEFONE
    $('#telefone').mask('(00) 0000-000')
    //SALÁRIO COM A REGRA DE TRÁS PARA FRENTE E O 9 SENDO COMO VALOR ADICIONAL
    $('#salario').mask('999.999.990,00', {reverse : true})
    //CEP
    $('#cep').mask('00.000-000')
    //DATA
    $('#data').mask('00/00/0000')
    //RG PEGANDO A REGRA PARA 9 VALORES OPCIONAIS E W APLICANDO O REGEX DE OPTIONS E A FUNÇÃO DE TRÁS PARA FRENTE
    $('#rg').mask('999.999.999-w',options,{reverse: true})
    //PLACA PEGANDO A REGRA REGEX DE A
    $('#placa').mask('AAA-0000',options)

    $('#codigo').mask('AA.LLL.000',options)

    $("#celular").mask('(00) 0000-00009')

    $('celular').blur(function(event){
        if($(this).val().length === 15){
            $("#celular").mask('(00) 00000-0009') 
        }else{
            $("#celular").mask('(00) 0000-00009')
        }
    })
 })