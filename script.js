const input = document.getElementById('input-title');
const textarea = document.getElementById('textarea');
const addTaskButton = document.getElementById('form-btn');
const ul = document.querySelector('.tasks__list');
const activeNum = document.querySelector('.active_num');
const perfomedNum = document.querySelector('.perfomed_num');
let tasks = [];
let perfomed = [];
let count = counter();

// создаем задачу - работает.
addTaskButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (input.value && textarea.value) {
        input.classList.remove('alert');
        textarea.classList.remove('alert');
        tasks.push({
            title: input.value,
            description: textarea.value,
            id: count(),
        });   
        let li = document.createElement('li');
        li.className = 'task__item';
        li.innerHTML = `<article class="task__article" data-num="${tasks[tasks.length - 1].id}">
                            <button class="label" aria-label="помечают задачу "выполненное(perfomed)"></button>
                            <button class="task__rollup" aria-label="roll up the description"></button>
                            <button class="task__clear" aria-label="delete the description"></button>
                            <h2 class="taks__title">${input.value}</h2>
                            <p class="task__description">${textarea.value}
                        </article>`;
        showListfromArray(tasks);
        input.value = '';
        textarea.value = ''; 
        activeNum.textContent = '(' + tasks.length + ')';
    } else {
        input.classList.add('alert');
        textarea.classList.add('alert');
    }
    
});

ul.addEventListener('click', function(event) {
    let target = event.target;
    let parent = target.parentNode;
    console.log(target)
// удаляем задачу - работает
    if (target.className === 'task__clear') {
        parent.remove();
        tasks = tasks.filter(el => el.id !== +target.parentNode.getAttribute('data-num'));
        activeNum.textContent = tasks.length ? '(' + tasks.length + ')' : '';
        perfomed = perfomed.filter(el => el.id !== +target.parentNode.getAttribute('data-num'));
        perfomedNum.textContent = perfomed.length ? '(' + perfomed.length + ')' : '';
    }
    
// сворачиваем задачу - работает 
    if (target.classList.contains('task__rollup')) {
        parent.querySelector('.task__description').classList.toggle('hide');
        target.classList.toggle('rollup'); 
    }
// переходит в раздел perfomed

    if (target.classList.contains('label') && !target.classList.contains('done-green')) {
        perfomed.push(tasks.find(el => el.id === +target.parentNode.getAttribute('data-num')));
        tasks = tasks.filter(el => el.id !== +target.parentNode.getAttribute('data-num'));
        parent.remove();
        activeNum.textContent = tasks.length ? '(' + tasks.length + ')' : '';
        perfomedNum.textContent = perfomed.length ? '(' + perfomed.length + ')' : '';
    }
});
// очищаем раздел perfomed - работает
document
    .querySelector('.navigation__button')
    .addEventListener('click', function(e) {
        e.preventDefault();
        perfomed = [];
        perfomedNum.textContent = '';
        showListfromArray(tasks);
    });
// переключаемся между разделами tasks и perfomed
document
    .querySelectorAll('.navigation__item')
    .forEach(el => el.addEventListener('click', event => {
        event.target.classList.contains('active') ?
        showListfromArray(tasks) :
        showListfromArray(perfomed, 'done-green');
    }));
    

function showListfromArray(array, addClass) {
    ul.innerHTML = '';
    array.map(el => {
        let li = document.createElement('li');
        li.className = 'task__item';
        li.innerHTML = `<article class="task__article" data-num="${el.id}">
                        <button class="label ${addClass}"></button>
                        <button class="task__rollup" aria-label="roll up the description"></button>
                        <button class="task__clear" aria-label="delete the description"></button>
                        <h2 class="taks__title">${el.title}</h2>
                        <p class="task__description">${el.description}
                    </article>`;
        ul.append(li);
    })
};

function counter() {
    let i = 0;
    return function() {
        return i++;
    };
}
