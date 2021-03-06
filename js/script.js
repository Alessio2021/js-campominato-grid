//L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49

const select = document.getElementById('select');
const grid = document.getElementById('grid');
const play = document.querySelector('.play');



play.addEventListener('click', function(){
    let selectValue = select.value;
    grid.innerHTML = '';

    switch (selectValue){
    case 'facile':
        for (let i = 1; i < 100 + 1; i++) {
            const div = document.createElement('div')
            div.classList.add('square');
            div.innerHTML = i;
            grid.append(div);
            div.addEventListener('click', function () {
            div.classList.add('clicked');
            });
        }
        break;
    case 'medio':
        for (let i = 1; i < 81 + 1; i++) {
            const div = document.createElement('div')
            div.classList.add('square', 'medium');
            div.innerHTML = i;
            grid.append(div);
            div.addEventListener('click', function () {
            div.classList.add('clicked');
            });
        }
        break;

    case 'difficile':
        for (let i = 1; i < 49 + 1; i++) {
            const div = document.createElement('div')
            div.classList.add('square', 'hard');
            div.innerHTML = i;
            grid.append(div);
            div.addEventListener('click', function () {
            div.classList.add('clicked');
            });
        }
        break;
    }
});