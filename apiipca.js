document.addEventListener('DOMContentLoaded', function() {
    // Buscar Data atual e subtrair 12 meses
var datahoje = new Date();
var anopassado = new Date(new Date().setDate(new Date().getDate() - 365));

// Função para formatar a data no formato dd/mm/yyyy
function formatarData(data) {
  var dia = data.getDate().toString().padStart(2, '0');  // Garante que o dia tenha 2 dígitos
  var mes = (data.getMonth() + 1).toString().padStart(2, '0');  // Mês começa em 0, então somamos 1
  var ano = data.getFullYear();
  
  return dia + '/' + mes + '/' + ano;
}

// Define a URL da API com as datas formatadas
const apiUrl = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=' + formatarData(anopassado) + '&dataFinal=' + formatarData(datahoje);

// Faz a requisição GET
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na resposta da rede');
    }
    return response.json();
  })
  .then(data => {
    // Soma os valores
    const taxahojeipca = data.reduce((sum, item) => sum + parseFloat(item.valor), 0);

    // Exibe o resultado no console
    console.log("Soma total dos valores:", taxahojeipca);
    // Define o valor no campo "taxaipcahoje"
    document.getElementById('taxahojeipca').value = taxahojeipca.toFixed(2); // Define o valor com 2 casas decimais
  
  })
  .catch(error => {
    console.error('Erro:', error);
  });
});