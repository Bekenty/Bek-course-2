const temperatureInput = document.querySelector("#temperature");
const fromSelect = document.querySelector("#from");
const toSelect = document.querySelector("#to");
const convertBtn = document.querySelector("#convertBtn");
const clearBtn = document.querySelector("#clearBtn");
const result = document.querySelector("#result");

// Перевод температуры в Celsius
function toCelsius(value, unit) {
    if (unit === "C") {
        return value;
    } else if (unit === "F") {
        return (value - 32) * 5 / 9;
    } else {
        return value - 273.15;
    }
}

// Перевод Celsius в нужную единицу
function fromCelsius(value, unit) {
    if (unit === "C") {
        return value;
    } else if (unit === "F") {
        return value * 9 / 5 + 32;
    } else {
        return value + 273.15;
    }
}

// Основная функция
function convertTemperature() {
    const value = Number(temperatureInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    // Проверка пустого поля
    if (temperatureInput.value === "") {
        result.textContent = "Введите температуру!";
        return;
    }

    // Переводим значение в Celsius
    const celsius = toCelsius(value, from);

    // Проверка абсолютного нуля
    if (celsius < -273.15) {
        result.textContent =
            "Ошибка: температура ниже абсолютного нуля!";
        return;
    }

    // Переводим Celsius в выбранную единицу
    const converted = fromCelsius(celsius, to);

    result.textContent =
        `${value} °${from} = ${converted.toFixed(2)} °${to}`;
}

// Кнопка конвертации
convertBtn.addEventListener("click", convertTemperature);

// Изменение исходной единицы
fromSelect.addEventListener("change", convertTemperature);

// Изменение конечной единицы
toSelect.addEventListener("change", convertTemperature);

// Очистка
clearBtn.addEventListener("click", function () {
    temperatureInput.value = "";
    result.textContent = "";
});