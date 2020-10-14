const input = document.getElementById('input-title');
const textarea = document.getElementById('textarea');
const addTaskButton = document.getElementById('form-btn');
const ul = document.querySelector('.tasks__list');
let activeNum = document.querySelector('.active_num');
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

addTaskButton.addEventListener('click', function(e) {
    e.preventDefault();
    if(input.value && textarea.value) {
        input.classList.remove('alert');
        textarea.classList.remove('alert');
        tasks.push({
            title: input.value,
            description: textarea.value,
        });   
        let li = document.createElement('li');
        li.className = 'task__item';
        li.innerHTML = `<article class="task__article">
                            <input type="checkbox" class="checkbox" id="checkbox">
                            <label class="label label-done" for="checkbox" aria-label="mark task"></label>
                            <button class="task__rollup" id="roll" aria-label="roll up the description"></button>
                            <button class="task__clear" id="delete" aria-label="delete the description"></button>
                            <h2 class="taks__title">${input.value}</h2>
                            <p class="task__description">${textarea.value}
                        </article>`;
        ul.append(li);
        input.value = '';
        textarea.value = ''; 
    
        activeNum.textContent = '(' + tasks.length + ')';
    } else {
        input.classList.add('alert');
        textarea.classList.add('alert');
    }
    
});

// этой кнопки не было при загрузке ДОМа - как ее найти?  говорят про какое-то делегирование))

// const deleteButton = document.getElementById('delete');

// deleteButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     target = e.target;
//     console.log(target)
// });


