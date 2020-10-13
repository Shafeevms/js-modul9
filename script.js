const input = document.getElementById('input-title');
const textarea = document.getElementById('textarea');
const addTaskButton = document.getElementById('form-btn');
const tasks = [];

// так не работает... почему?

// function Task(title, description) {
//     this.title = title,
//     this.description = description
// }
// addTaskButton.addEventListener('click', function() {
//     let newTask = new Task(input.value, textarea.value);
//     console.log(newTask);
//     tasks.push(newTask);
    
// });

// и так не работает

// addTaskButton.addEventListener('click', function() {
//     let task = {};
//     task.title = input.value;
//     task.description = textarea.value;
//     tasks.push(task);
// });

// и так не работает
// let arr = [];
// addTaskButton.addEventListener('click', function() {
//     arr.push(input.value);
//     // arr.push(textarea.value);
//     console.log(input.value)
// });
// console.log(arr)

// работет через раз
// addTaskButton.addEventListener('click', function() {
//     let inputValue = input.value;
//     let textareaValue = textarea.value;
//     console.log(inputValue, textareaValue);
// });

