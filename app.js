const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const current = document.querySelector('.current');
const box = document.querySelector('.box');
const p = document.querySelector('.p');
const theCount = document.querySelector('.theCount');
const less = document.querySelector('.less');
const currentNumber = document.querySelector('.currentNumber');
const more = document.querySelector('.more');


let contador = 2;

let stickerMR = 0;
let stickerIn = 0;
let stickerGrav = 0;


const slider = () => {
    if (contador === 2) {

        img1.style.left = '-100%';
        img2.style.left = '0';
        img3.style.left = '100%';
        previous.style.opacity = '1';
        next.style.opacity = '1';
        previous.style.cursor = 'pointer'
        next.style.cursor = 'pointer'
    }
    else if (contador === 1) {

        img1.style.left = '0';
        img2.style.left = '100%';
        img3.style.left = '200%';
        previous.style.opacity = '.1';
        next.style.opacity = '1';
        previous.style.cursor = 'default';
        next.style.cursor = 'pointer'

    }
    else if (contador === 3) {
        img1.style.left = '-200%';
        img2.style.left = '-100%';
        img3.style.left = '0';
        previous.style.opacity = '1';
        next.style.opacity = '.1';
        next.style.cursor = 'default';
        previous.style.cursor = 'pointer'
    }
}

slider();


previous.addEventListener('click', () => {

    if (contador === 1) {
        return;
    }
    else {
        contador--;
        slider();
    }

})

next.addEventListener('click', () => {
    if (contador === 3) {
        return
    }
    else {
        contador++;
        slider();
    }
})



current.addEventListener('mouseover', (e) => {

    box.style.opacity = '1';
    box.style.zIndex = '100';

    if (currentNumber.value == 0) {

        less.style.opacity = '.1';
        less.style.cursor = 'cursor';

    }

    if (e.target.id === 'img1') {

         currentNumber.innerHTML = stickerMR;

        more.addEventListener('click', () => {
            
            less.style.opacity = '1';
            less.style.cursor = 'pointer';
            stickerMR ++;
            console.log(stickerMR);
            
        })

        
        
        p.textContent = 'Consigue tus stickers de misión rescate';


    }
    else if (e.target.id === 'img2') {

        currentNumber.value = stickerIn;
        p.textContent = 'Consigue tus stickers de Interstellar';
        stickerIn = currentNumber.value;
    }
    else {
        currentNumber.value = stickerGrav;
        p.textContent = 'Consigue tus stickers de Gravity';
        stickerGrav = currentNumber.value;
    }

})



current.addEventListener('mouseleave', (e) => {

    box.style.opacity = '0';
    box.style.zIndex = '0';
})



box.addEventListener('mouseover', e => {
    box.style.transition = '.5s';
    box.style.opacity = '1';
    box.style.zIndex = '100';
})

box.addEventListener('mouseleave', e => {
    box.style.opacity = '0';
    box.style.zIndex = '0';
})








