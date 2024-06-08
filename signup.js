document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("signupModal");
    var btn = document.getElementById("signupBtn");
    var close = document.getElementById("closeBtn");
    var containerLogin = document.getElementById("container");

    btn.onclick = function() {
        modal.style.display = "block";
        containerLogin.style.display = "none";
    }

    close.onclick = function() {
        modal.style.display = "none";
        containerLogin.style.display = "flex";
    }

    // mini banco de dados - cadastro
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtendo os valores dos campos do formulário
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Verificando se os valores não estão vazios
        if (!username || !email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Criando um objeto para armazenar os dados do usuário
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Verificando se já existem usuários cadastrados no Local Storage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Adicionando o novo usuário à lista
        users.push(user);

        // Salvando a lista atualizada de usuários no Local Storage
        localStorage.setItem('users', JSON.stringify(users));

        // Resetando o formulário
        document.getElementById('signup-form').reset();

        alert('Usuário cadastrado com sucesso!');
    });

    // verificar os dados de login no local storage
    document.getElementById('signin-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('signin-username').value;
        const password = document.getElementById('signin-password').value;

        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password)

        if (user) {
            alert('Login bem-sucedido!');
            window.location.href = 'finnances.html'; // logar na pagina finnance
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
    });
});
