function mostrarMensagem() {
    const mensagem = 'Informe seu número de telefone (sem DDD):';
    const numeroTelefone = prompt(mensagem);
    
    if (numeroTelefone !== null) {
        // Use uma expressão regular para verificar se a entrada contém apenas dígitos
        const regex = /^\d+$/;
        if (!regex.test(numeroTelefone)) {
            alert('Número de telefone inválido. Use apenas dígitos numéricos.');
        } else if (numeroTelefone.length === 0) {
            alert('Nenhum número foi adicionado.');
        } else if (numeroTelefone.length < 8) {
            alert('Número de telefone inválido.');
        } else if (numeroTelefone.length > 13) {
            alert('O número de telefone não é válido.');
        } else {
            alert('Entraremos em contato com você em breve!');
        }
    }
}

document.getElementById('franchiseButton').addEventListener('click', mostrarMensagem);