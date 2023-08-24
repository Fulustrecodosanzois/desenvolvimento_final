async function fetchAndDisplayData() {
    try {
        const response = await fetch('https://64d2a382f8d60b1743624173.mockapi.io/hotel');
        const data = await response.json();

        for (const item of data) {
            document.querySelector('#cod-reserva').textContent = item.codigo_reserva;
            document.querySelector('#nome').textContent = item.nome;
            document.querySelector('#email').textContent = item.email;
            document.querySelector('#tel').textContent = item.telefone;
            document.querySelector('#endereco').textContent = item.endereco;
            document.querySelector('#nasc').textContent = item.data_nascimento;
            document.querySelector('#tipo_quarto').textContent = item.tipo_quarto;
            document.querySelector('#pessoas').textContent = item.quantidade_pessoas;
            document.querySelector('#in').textContent = item.data_check_in;
            document.querySelector('#out').textContent = item.data_check_out;
            // Adicione mais campos aqui se necessário
        }
    } catch (error) {
        console.error('Erro ao buscar e exibir dados da API:', error);
    }
}

// Chama a função ao carregar a página
window.onload = fetchAndDisplayData;





