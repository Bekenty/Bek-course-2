document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    message.className = 'message error';

    if (login === '') {
        message.textContent = 'Поле логина не может быть пустым.';
        return;
    }
    if (email === '') {
        message.textContent = 'Поле e-mail не может быть пустым.';
        return;
    }
    if (password.length < 8) {
        message.textContent = 'Пароль должен содержать не менее 8 символов.';
        return;
    }
    if (password !== confirmPassword) {
        message.textContent = 'Пароли не совпадают.';
        return;
    }

    message.className = 'message success';
    message.textContent = 'Аккаунт успешно создан!';
});