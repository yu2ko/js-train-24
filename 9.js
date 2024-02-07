console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  function fetchWithError() {
    const errorMessage = "Помилка при з'єднанні з сервером";
    return Promise.reject(new Error(errorMessage));
  }

  fetchWithError()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Викликаємо функцію task10
task9();

// Error: Помилка при з'єднанні з сервером
//     at fetchWithError (file:///C:/Users/Master/projects/work/js-train-24/9.js:12:27)
//     at task9 (file:///C:/Users/Master/projects/work/js-train-24/9.js:15:3)
//     at file:///C:/Users/Master/projects/work/js-train-24/9.js:21:1
//     at ModuleJob.run (node:internal/modules/esm/module_job:192:25)
//     at async DefaultModuleLoader.import (node:internal/modules/esm/loader:246:24)
//     at async loadESM (node:internal/process/esm_loader:40:7)
//     at async handleMainPromise (node:internal/modules/run_main:66:12)
