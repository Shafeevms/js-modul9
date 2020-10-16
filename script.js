const input = document.getElementById('input-title');
const textarea = document.getElementById('textarea');
const addTaskButton = document.getElementById('form-btn');
const ul = document.querySelector('.tasks__list');
let activeNum = document.querySelector('.active_num');
let perfomedNum = document.querySelector('.perfomed_num');
let tasks = [];
let perfomed = [];


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
                            <button class="label"></button>
                            <button class="task__rollup" aria-label="roll up the description"></button>
                            <button class="task__clear" aria-label="delete the description"></button>
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

ul.addEventListener('click', function(event) {
    let target = event.target;
    let parent = target.parentNode;
    // некорректно работает счетчик длины массива
    if (target.className === 'task__clear') {
        parent.remove();
        tasks = tasks.filter(el => el.id !== +target.parentNode.getAttribute('data-num'));
        activeNum.textContent = '(' + tasks.length + ')';
        perfomed = perfomed.filter(el => el.id !== +target.parentNode.getAttribute('data-num'));
        perfomedNum.textContent = '(' + tasks.length + ')';
    }

    if (target.className === 'task__rollup') {
        parent.querySelector('.task__description').classList.toggle('hide');
        // target.classList.toggle('rollup'); //когда добавляю эту строку - ломается работа...
    }
    
//    при нажатии на левую кнопку задача уходит в perfomed 

    if (target.className == 'label') {
        console.log(target)
        target.classList.toggle('done-green'); // опять toggle работает только один раз?
        perfomed.push(tasks.find(el => el.id === +target.parentNode.getAttribute('data-num')));
        tasks = tasks.filter(el => el.id !== +target.parentNode.getAttribute('data-num'));
        parent.remove();
        activeNum.textContent = '(' + tasks.length + ')';
        perfomedNum.textContent = '(' + perfomed.length + ')';
    }

});

document
    .querySelectorAll('.navigation__item')
    .forEach(el => el.addEventListener('click', event => {
        event.target.classList.contains('active') ?
        showListfromArray(tasks) :
        showListfromArray(perfomed)
    }));
    

function showListfromArray(array) {
    ul.innerHTML = '';
    array.forEach(el => {
        let li = document.createElement('li');
        li.className = 'task__item';
        li.innerHTML = `<article class="task__article" data-num="${el.id}">
                        <button class="label"></button>
                        <button class="task__rollup" aria-label="roll up the description"></button>
                        <button class="task__clear" aria-label="delete the description"></button>
                        <h2 class="taks__title">${el.title}</h2>
                        <p class="task__description">${el.description}
                    </article>`;
        ul.append(li);
    })
}
function counter() {
    let i = 0;
    return function() {
        return i++;
    };
}
let count = counter();



/* 
- лишние id убрал
- везде делаю строгое сравнение
- вроде бы стал правильно пользоваться селекторами
*/

/*
 - если длина массива равна 0, то убрать спаны от названий массивов
*/