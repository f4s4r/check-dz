// Загружаем JSON с вопросами
fetch('tasks.json')
    .then(response => response.json())
    .then(data => {
        displayTasks(data.tasks);
    });

// Функция для динамического вывода вопросов и полей ввода
function displayTasks(tasks) {
    const tasksContainer = document.getElementById('tasksContainer');

    tasks.forEach((task, index) => {
        // Создаем элементы для каждого задания
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const questionParagraph = document.createElement('p');
        questionParagraph.textContent = `Задание ${index + 1}: ${task.question}`;

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.id = `answer${index}`;

        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        resultDiv.id = `result${index}`;

        taskDiv.appendChild(questionParagraph);
        taskDiv.appendChild(inputField);
        taskDiv.appendChild(resultDiv);

        tasksContainer.appendChild(taskDiv);
    });
}

// Функция для проверки ответов
function checkAnswers() {
    fetch('tasks.json')
        .then(response => response.json())
        .then(data => {
            data.tasks.forEach((task, index) => {
                const userAnswer = document.getElementById(`answer${index}`).value.trim();
                const resultDiv = document.getElementById(`result${index}`);

                if (userAnswer.toLowerCase() === task.answer.toLowerCase()) {
                    resultDiv.textContent = "Правильно!";
                    resultDiv.style.color = "green";
                } else {
                    resultDiv.textContent = "Неправильно. Попробуйте еще раз.";
                    resultDiv.style.color = "red";
                }
            });
        });
}
