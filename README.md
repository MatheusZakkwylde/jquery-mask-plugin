# jquery-mask-plugin
Aplicação de mascara com a biblioteca jquery-mask-plugin para campos CPF, CNPJ, CEP, RG, Telefone, Celular, Salário, Data, Placa de transporte, Código. Status: Funcionando.

Réquisitos: Entendimento de javascript básico.Regex, jquery.

O plugin jquery-mask-plugin fornece a construção de mascara de campos de formulário de forma facil e dinâmica.

1- Todas as mascaras trabalham em sua forma basica pelo reconhecimento do id de indentificação de cada campo.

< input type="text" id="cpf" >

2- Utilizando-se do seletor de id do jquery chamamos o método mascara e aplicamos a forma desejada. Para o exemplo usaremos a mascara para o input CPF.
  
  ' $('#cpf').mask('000.000.000-00') '
  
    Como podemos verificar no exemplo a cima, chamamos pelo seletor do jquery o id de indentificação do campo input CPF e em seguinda o método
    
    O método mask() passando a mascara da regra de CPF onde temos os primeiros 3 numeros obrigátorios, o ponto de separação, mais 3 campos obrigátorios
, mais um ponto e mais 3 campos obrigátorios e o sepado com dois campos obrigátorios.
  
- O elemento zero significa que todos os campos são obrigátorios
- O elemento nove em mascaras significa que o campo destinado não é obrigátorio.

Vejamos os exemplos a baixo:
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
