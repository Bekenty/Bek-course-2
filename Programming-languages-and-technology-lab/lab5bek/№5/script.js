const numberInput = document.querySelector("#number");
const generateBtn = document.querySelector("#generateBtn");
const clearBtn = document.querySelector("#clearBtn");
const result = document.querySelector("#result");

// Функция создания таблицы умножения
function createTable(number) {
    let html = `<h2>Таблица умножения на ${number}</h2>`;

    // Цикл от 1 до 10
    for (let i = 1; i <= 10; i++) {
        html += `<p>${number} × ${i} = ${number * i}</p>`;
    }

    return html;
}

// Обработка нажатия кнопки
generateBtn.addEventListener("click", function () {
    const number = Number(numberInput.value);

    if (numberInput.value === "") {
        result.textContent = "Введите число!";
    } else {
        result.innerHTML = createTable(number);
    }
});

// Очистка результата
clearBtn.addEventListener("click", function () {
    numberInput.value = "";
    result.textContent = "";
});