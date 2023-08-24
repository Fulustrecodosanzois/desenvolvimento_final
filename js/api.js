async function fetchAndDisplayData() {
    try {
        const response = await fetch('https://64d2a382f8d60b1743624173.mockapi.io/hotel');
        const data = await response.json();

        const codReservaElement = document.querySelector('#cod-reserva');
        if (codReservaElement) {
            codReservaElement.textContent = data[0].codigo_reserva; // Supondo que o código da reserva está no primeiro objeto do array
        }

        const nomeElement = document.querySelector('#nome');
        if (nomeElement) {
            nomeElement.textContent = data[0].nome; 
        }

        const emailElement = document.querySelector('#email');
        if (emailElement) {
            emailElement.textContent = data[0].email; 
        }

        const telefoneElement = document.querySelector('#tel');
        if (telefoneElement) {
            telefoneElement.textContent = data[0].telefone; 
        }
        
        const enderecoElement = document.querySelector('#endereco');
        if (enderecoElement) {
            enderecoElement.textContent = data[0].endereco; 
        }

        const nascElement = document.querySelector('#nasc');
        if (nascElement) {
            nascElement.textContent = data[0].data_nascimento; 
        }

        
        const quartoElement = document.querySelector('#tipo_quarto');
        if (quartoElement) {
            quartoElement.textContent = data[0].tipo_quarto; 
        }
        
        
        const pessoasElement = document.querySelector('#pessoas');
        if (pessoasElement) {
            pessoasElement.textContent = data[0].quantidade_pessoas; 
        }
        
        
        const inElement = document.querySelector('#in');
        if (inElement) {
            inElement.textContent = data[0].data_check_in; 
        }
        
        const outElement = document.querySelector('#out');
        if (outElement) {
            outElement.textContent = data[0].data_check_out; 
        }
        
        
        const pagamentoElement = document.querySelector('#pagamento');
        if (pagamentoElement) {
            pagamentoElement.textContent = data[0].tipo_pagamento; 
        }
        
        
        const diariaElement = document.querySelector('#diaria');
        if (diariaElement) {
            diariaElement.textContent = data[0].valor_diaria; 
        }
        


    } catch (error) {
        console.error('Erro ao buscar e exibir dados da API:', error);
    }
}

// Chama a função ao carregar a página
window.onload = fetchAndDisplayData;




























// let tabela = document.querySelector(".cod-reserva")

// // async = forma em que o js transforma uma função síncrona em assincróna, utilizado em API
// async function carregarDados() {
//     const url = "https://64d2a382f8d60b1743624173.mockapi.io/hotel"

//     // o await é usado apenas em assincrono
//     const resultado = await fetch(url)
//     //fetch = pedi uma busca na url em parâmetro para puxar informações, e aguarda a informação 
//     // tento puxado os resultados, se converte para .json, abaixo:
//     const dados = await resultado.json()// convertendo os dados da api(resultado) em .json a await é novamente usada para entregar as informações apenas quando tudo estiver carregado (código 200)

//     // console.log(dados)

//     // for (const item of dados) {
//         // console.log(item.email) aqui é chamado o valor específico


//     // -------------------------------------- CRIANDO ELEMENTOS HTML
//     const linha = document.createElement("tr")
//     const tdNome = document.createElement("td")
//     const tdEmail = document.createElement("td")
//     const tdTRabalho = document.createElement("td")
//     const tdFone = document.createElement("td")

//     // --------------------------------------- CRIANDO CONTEÚDO DAS COLUNAS

//     tdNome.textContent = item.firstname
//     tdEmail.textContent = item.email
//     tdFone.textContent = item.phone
//     tdTRabalho.textContent = item.company.bs //.company.bs é porque bs se encontra dentro de company

//     // -------------------------------------- ADICIONANDO OS ELEMENTOS EM SUAS TEGS

//     linha.appendChild(tdNome) // adicione a tag filha de tr
//     linha.appendChild(tdEmail)
//     linha.appendChild(tdTRabalho)
//     linha.appendChild(tdFone)

//     tabela.appendChild(linha)


//     // }


// }

// carregarDados()












