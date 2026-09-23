document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;
    const agree = document.getElementById('agree').checked;
    const message = document.getElementById('message');

    message.className = 'message error';

    if (fullName === '') {
        message.textContent = 'Пожалуйста, введите ФИО.';
        return;
    }
    if (email === '') {
        message.textContent = 'Пожалуйста, введите e-mail.';
        return;
    }
    if (course === '') {
        message.textContent = 'Пожалуйста, выберите курс обучения.';
        return;
    }
    if (!agree) {
        message.textContent = 'Необходимо подтвердить согласие с правилами.';
        return;
    }

    message.className = 'message success';
    message.textContent = 'Регистрация успешно завершена!';
});