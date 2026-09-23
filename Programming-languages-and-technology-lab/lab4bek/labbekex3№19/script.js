document.getElementById('internshipForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;
    
    // Сбор всех отмеченных чекбоксов навыков
    const checkedSkills = document.querySelectorAll('input[name="skills"]:checked');
    const motivation = document.getElementById('motivation').value.trim();
    const message = document.getElementById('message');

    message.className = 'message error';

    if (fullName === '') {
        message.textContent = 'Введите ваше ФИО.';
        return;
    }
    if (email === '') {
        message.textContent = 'Введите ваш e-mail.';
        return;
    }
    if (course === '') {
        message.textContent = 'Выберите ваш курс обучения.';
        return;
    }
    if (checkedSkills.length < 2) {
        message.textContent = 'Выберите как минимум 2 навыка.';
        return;
    }
    if (motivation.length < 30) {
        message.textContent = `Мотивационное письмо слишком короткое (${motivation.length}/30 символов).`;
        return;
    }

    message.className = 'message success';
    message.textContent = 'Заявка на стажировку успешно отправлена!';
});