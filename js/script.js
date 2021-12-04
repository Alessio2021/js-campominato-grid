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

    if (selectValue == 'facile') {
        for (let i = 1; i < 100 + 1; i++) {
            const div = document.createElement('div')
            grid.append(div);
            div.classList.add('square');
            div.innerHTML = i;
        }
    } else if (selectValue == 'medio'){
        for (let i = 1; i < 81 + 1; i++) {
            const div = document.createElement('div')
            grid.append(div);
            div.classList.add('square', 'medium');
            div.innerHTML = i;

        }
    } else if (selectValue == 'difficile')
        for (let i = 1; i < 49 + 1; i++) {
            const div = document.createElement('div')
            grid.append(div);
            div.classList.add('square', 'hard');
            div.innerHTML = i;

        }
    

});