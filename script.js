var servidor = [
    {
        'nome':'MARCIO CARVALHO DOS SANTOS',
        'cargo':'TAE',
        'funcao':'SECRETARIO',
        'vinculo': 'EFETIVO',
        'matricula': '4154445',
        'contato': '6398484-8484'
    },
    {
        'nome':'MARIA CLEIDE DA SILVA',
        'cargo':'AAE',
        'funcao':'VIGIA NOTURNO',
        'vinculo': 'EFETIVO',
        'matricula': '45454545',
        'contato': '6394454-8484'
    },
];

function addHoliday(){
    var newInput = document.querySelector('#divHoliday')
    var inputHoliday = document.createElement('input');
    inputHoliday.setAttribute('class', 'holiday');
    inputHoliday.setAttribute('type', 'date');
    newInput.appendChild(inputHoliday);
}

function addSatLetivo(){
    var newInput = document.querySelector('#divSaturday')
    var inputHoliday = document.createElement('input');
    inputHoliday.setAttribute('class', 'saturday');
    inputHoliday.setAttribute('type', 'date');
    newInput.appendChild(inputHoliday);
}

function month(mesAtual){
   var meses = [
       {'nome':'JANEIRO', 'num':'1'},
       {'nome':'FEVEREIRO', 'num':'2'},
       {'nome':'MARÇO', 'num':'3'},
       {'nome':'ABRIL', 'num':'4'},
       {'nome':'MAIO', 'num':'5'},
       {'nome':'JUNHO', 'num':'6'},
       {'nome':'JULHO', 'num':'7'},
       {'nome':'AGOSTO', 'num':'8'},
       {'nome':'SETEMBRO', 'num':'9'},
       {'nome':'OUTUBRO', 'num':'10'},
       {'nome':'NOVEMBRO', 'num':'11'},
       {'nome':'DEZEMBRO', 'num':'12'},
       ];

       var mes = meses.filter((a)=>{
        return a.num === mesAtual;
       });

       return mes[0].nome; 
}

function montaSelect(){
    var result = '';
    for(var t = 0; t<servidor.length; t++){
        result += `
            <option value="${servidor[t].matricula}">${servidor[t].nome}</option>
        `;
    }
    return result
}