function calculacdi(){
    // Obter os valores dos camposs
    var valorAplicado = parseFloat(document.cdi.valoraplicadocdi.value);
    var taxaCdiHoje = parseFloat(document.cdi.taxacdihoje.value);
    var taxaTituloCdi = parseFloat(document.cdi.taxatitulocdi.value); 
    var mesesCdi = parseFloat(document.cdi.meses_cdi.value);
    var isentoircdi = document.cdi.semircdi.checked ? "T" : "";
    // Verificar se os valores são válidos antes de tentar fazer o cálculo
    if (isNaN(valorAplicado) || isNaN(taxaCdiHoje) || isNaN(taxaTituloCdi) || isNaN(mesesCdi)) {
        document.getElementById('ValorFinalCDI').value = ''; // Limpar o campo caso algum valor esteja inválido
        return;
    } 
    var valorBrutoCdi = valorAplicado*(1+((taxaCdiHoje/100)*(taxaTituloCdi/100)))**(mesesCdi/12);

    // Calcular o valor final com base na fórmula
    if (mesesCdi <= 6){
        ImpostoRenda = 22.5;
    }
    else if(mesesCdi <= 12){
        ImpostoRenda = 20;
    }
    else if(mesesCdi <= 24){
        ImpostoRenda = 17.5;  
    }      
    else{
        ImpostoRenda = 15;
    }
    if(isentoircdi === "T"){
        var ValorLiquido_Cdi = valorBrutoCdi;
    }else{
        var ValorLiquido_Cdi = valorAplicado + (valorBrutoCdi - valorAplicado) - ((valorBrutoCdi - valorAplicado)*(ImpostoRenda/100));
    }
    // Exibir o resultado no campo de saída
    document.getElementById('ValorFinalCDI').value = ValorLiquido_Cdi.toFixed(2); // Exibir com duas casas decimais
}
function calculaIPCA(){
    var valorAplicadoIPCA = parseFloat(document.ipca.valoraplicadoipca.value);
    var taxaIPCAHoje = parseFloat(document.ipca.taxahojeipca.value);
    var taxaTituloIPCA = parseFloat(document.ipca.taxatituloipca.value); 
    var mesesIPCA = parseFloat(document.ipca.meses_ipca.value);    
    var isentoiripca = document.ipca.semiripca.checked ? "T" : "";    

    if (isNaN(valorAplicadoIPCA) || isNaN(taxaIPCAHoje) || isNaN(taxaTituloIPCA) || isNaN(mesesIPCA)) {
    document.getElementById('ValorFinalIPCA').value = ''; // Limpar o campo caso algum valor esteja inválido
    return;
    }
    var valorBrutoIPCA = valorAplicadoIPCA*(1+taxaIPCAHoje/100)*(1+taxaTituloIPCA/100)**(mesesIPCA/12);
    
    // Calcular o valor final com base na fórmula
    if (mesesIPCA <= 6){
        ImpostoRenda = 22.5;
    }
    else if(mesesIPCA <= 12){
        ImpostoRenda = 20;
    }
    else if(mesesIPCA <= 24){
        ImpostoRenda = 17.5;  
    }      
    else{
        ImpostoRenda = 15;
    }

    if(isentoiripca === "T"){
        var ValorLiquido_IPCA = valorBrutoIPCA;
    }else{
        var ValorLiquido_IPCA = valorAplicadoIPCA + (valorBrutoIPCA - valorAplicadoIPCA) - ((valorBrutoIPCA - valorAplicadoIPCA)*(ImpostoRenda/100));
    }
    document.getElementById('ValorFinalIPCA').value = ValorLiquido_IPCA.toFixed(2); // Exibir com duas casas decimais
}

function calculaprefixado(){
    var valorAplicadoprefixado = parseFloat(document.prefixado.valoraplicadoprefixado.value);
    var taxaTituloprefixado = parseFloat(document.prefixado.taxatituloprefixado.value); 
    var mesesprefixado = parseFloat(document.prefixado.meses_prefixado.value);   
    var isentoirprefixado = document.prefixado.semirprefixado.checked ? "T" : "";     

    if (isNaN(valorAplicadoprefixado) ||  isNaN(taxaTituloprefixado) || isNaN(mesesprefixado)) {
    document.getElementById('ValorFinalprefixado').value = ''; // Limpar o campo caso algum valor esteja inválido
    return;
    }
   
    var valorBrutoprefixado = valorAplicadoprefixado * (1+taxaTituloprefixado/100)**(mesesprefixado/12);
    // Calcular o valor final com base na fórmula
    if (mesesprefixado <= 6){
        ImpostoRenda = 22.5;
    }
    else if(mesesprefixado <= 12){
        ImpostoRenda = 20;
    }
    else if(mesesprefixado <= 24){
        ImpostoRenda = 17.5;  
    }      
    else{
        ImpostoRenda = 15;
    }
    if(isentoirprefixado === "T"){
        var ValorLiquido_prefixado = valorBrutoprefixado;
    }else{
        var ValorLiquido_prefixado = valorAplicadoprefixado + (valorBrutoprefixado - valorAplicadoprefixado) - ((valorBrutoprefixado - valorAplicadoprefixado)*(ImpostoRenda/100));
    }    
    document.getElementById('ValorFinalprefixado').value = ValorLiquido_prefixado.toFixed(2); // Exibir com duas casas decimais
}

function calculacdimais(){
    var valorAplicadocdimais = parseFloat(document.cdimais.valoraplicadocdimais.value);
    var taxacdimaisHoje = parseFloat(document.cdimais.taxahojecdimais.value);
    var taxaTitulocdimais = parseFloat(document.cdimais.taxatitulocdimais.value); 
    var mesescdimais = parseFloat(document.cdimais.meses_cdimais.value);    
    var isentoircdimais = document.cdimais.semircdimais.checked ? "T" : "";    

    if (isNaN(valorAplicadocdimais) || isNaN(taxacdimaisHoje) || isNaN(taxaTitulocdimais) || isNaN(mesescdimais)) {
    document.getElementById('ValorFinalcdimais').value = ''; // Limpar o campo caso algum valor esteja inválido
    return;
    }
    var valorBrutocdimais = valorAplicadocdimais*(1+taxacdimaisHoje/100 + taxaTitulocdimais/100)**(mesescdimais/12);
        // Calcular o valor final com base na fórmula
    if (mesescdimais <= 6){
        ImpostoRenda = 22.5;
    }
    else if(mesescdimais <= 12){
        ImpostoRenda = 20;
    }
    else if(mesescdimais <= 24){
        ImpostoRenda = 17.5;  
    }      
    else{
        ImpostoRenda = 15;
    }
    if(isentoircdimais === "T"){
        var ValorLiquido_cdimais = valorBrutocdimais;
    }else{
        var ValorLiquido_cdimais = valorAplicadocdimais + (valorBrutocdimais - valorAplicadocdimais) - ((valorBrutocdimais - valorAplicadocdimais)*(ImpostoRenda/100));
    }
    document.getElementById('ValorFinalcdimais').value = ValorLiquido_cdimais.toFixed(2); // Exibir com duas casas decimais
}