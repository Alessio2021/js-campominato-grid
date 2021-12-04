//L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49

const select = document.getElementById('select');
const grid = document.getElementById('grid');
const play = document.querySelector('.play');
const div = document.createElement('div')

let numMax = 100;
let numMin = 1;


play.addEventListener('click', function(){
    let selectValue = select.value;

    if (selectValue == 'facile') {
        for (let i = 0; i < 100 - 1; i++) {
            grid.append(div);
            div.classList.add('square');
        }
    } else if (selectValue == 'medio'){

    } else if (selectValue == 'difficile')


});