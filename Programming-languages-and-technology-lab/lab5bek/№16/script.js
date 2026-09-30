const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const statistics = document.querySelector("#statistics");

let tasks = [];

// Функция добавления задачи
function addTask() {
    const text = taskInput.value.trim();

    // Проверка пустого поля
    if (text === "") {
        alert("Введите название задачи!");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    renderTasks();
}

// Функция отображения задач
function renderTasks() {
    taskList.innerHTML = "";

    // Цикл перебора массива задач
    tasks.forEach(task => {

        const li = document.createElement("li");

        const span = document.createElement("span");

        span.textContent = task.text;
        span.className = "task-text";

        // Если задача выполнена
        if (task.completed) {
            span.classList.add("completed");
        }

        // Отметить задачу выполненной
        span.addEventListener("click", function () {
            task.completed = !task.completed;

            renderTasks();
        });

        // Создание кнопки удаления
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Удалить";
        deleteButton.className = "delete-btn";

        // Удаление задачи
        deleteButton.addEventListener("click", function () {

            tasks = tasks.filter(function (item) {
                return item.id !== task.id;
            });

            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });

    updateStatistics();
}

// Функция обновления статистики
function updateStatistics() {

    const total = tasks.length;

    const completed = tasks.filter(function (task) {
        return task.completed;
    }).length;

    const remaining = total - completed;

    statistics.textContent =
        `Всего: ${total} | Выполнено: ${completed} | Осталось: ${remaining}`;
}

// Добавление задачи по кнопке
addBtn.addEventListener("click", addTask);

// Дополнительная функция:
// добавление задачи клавишей Enter
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }
});

// Первоначальное отображение
renderTasks();