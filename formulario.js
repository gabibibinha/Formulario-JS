function enviar() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const form = document.getElementById('meuForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (form.checkValidity()) {
            form.style.backgroundColor = 'pink';
            alert('Formulário enviado com sucesso!');

            setTimeout(() => {
                form.submit();
            }, 1000);
        } else {
            form.style.backgroundColor = 'lightcoral';
            alert('Por favor, preencha todos os campos!');
        }

        titulo.textContent = 'Formulário enviado com sucesso!';
    });

    let erroMsg = document.getElementById('erroMsg');
    erroMsg.textContent = '';

    if (!nome) {
        erroMsg.textContent = 'O campo "Nome" é obrigatório!'
    }

    if (!email) {
        erroMsg.textContent = 'O campo "Email" é obrigatório!'
    }

    if (!senha) {
        erroMsg.textContent = 'O campo "Senha" é obrigatório!'
    }

    
}