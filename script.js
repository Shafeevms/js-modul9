const input = document.getElementById('input-title');
const textarea = document.getElementById('textarea');
const addTaskButton = document.getElementById('form-btn');
const ul = document.querySelector('.tasks__list');
let activeNum = document.querySelector('.active_num');
let perfomedNum = document.querySelector('.perfomed_num')
let tasks = [];
let perfomed = [];


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
    if (input.value && textarea.value) {
        input.classList.remove('alert');
        textarea.classList.remove('alert');
        tasks.push({
            title: input.value,
            description: textarea.value,
        });   
        let li = document.createElement('li');
        li.className = 'task__item';
        li.innerHTML = `<article class="task__article">
                            <button class="label" id="checkbox"></button>
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

ul.addEventListener('click', function(event) {
    let target = event.target;
    if (target.id == 'delete') {
        
        target.parentElement.parentElement.remove();
        tasks = tasks.filter(el => el.title != target.nextElementSibling.textContent 
            && el.description != target.nextElementSibling.nextElementSibling.textContent);
        activeNum.textContent = '(' + tasks.length + ')';
    };
    if (target.id == 'roll') {
        console.log(target.nextElementSibling.nextElementSibling.nextElementSibling, target);
        target.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('hide');
        target.classList.toggle('rollup')
    };
    
    // при нажатии на левую кнопку задача уходит в perfomed 

    if (target.id == 'checkbox') {
        // target.nextElementSibling.classList.toggle('done-green');
    //     perfomed.push(tasks.find(el => {
    //         el.title == target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent
    //         && el.description == target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent
    //     }))
    //     activeNum.textContent = '(' + tasks.length + ')';
    //     perfomedNum.textContent = '(' + tasks.length + ')';
    }

        let tempTitle = target.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        let tempDescr = target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent 
        console.log(tempTitle, tempDescr, tasks)

        // вот все переменные совпадают а в цикле они почему-то не работают
        tasks.forEach(function(el) {
            console.log(el.title, tempTitle);
            console.log(el.description, tempDescr)
            if (el.title == tempTitle && el.description == tempDescr) {
                console.log('yes');
            }
    })
    // вернуть из массива tasks (удалить из него) и вложить в массив perfomed
        let temp = tasks.find(el => {el.title == tempTitle && el.description == tempDescr})
    
});

// не получается скручивать кнопочку "свернуть"