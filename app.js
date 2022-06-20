/*------------ Decoracion------- */

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const current = document.querySelector('.current');
const alertaM = document.querySelector('.alertaM');
const alertaI = document.querySelector('.alertaI');
const alertaG = document.querySelector('.alertaG');


const boxMartian = document.querySelector('.boxMartian');
const boxInter = document.querySelector('.boxInter');
const boxGrav = document.querySelector('.boxGrav');

const lessM = document.querySelector('.lessM');
const moreM = document.querySelector('.moreM');

const lessI = document.querySelector('.lessI');
const moreI = document.querySelector('.moreI');

const lessG = document.querySelector('.lessG');
const moreG = document.querySelector('.moreG');


let contador = 2;


setTimeout(()=>{
    next.style.display = 'block';
    previous.style.display = 'block';
    document.querySelector('.pics').style.transformStyle = 'flat';
    document.querySelector('.pics').style.perspective = 'none';
}, 20000)

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

const boxAppear = (currentBox) => {

    currentBox.style.zIndex = '100';
    currentBox.style.opacity = '1';
}

const boxFade = (currentBox) => {

    currentBox.addEventListener('mouseleave', () => {
        currentBox.style.transition = '.2s';
        currentBox.style.zIndex = '0';
        currentBox.style.opacity = '0';

    })

}



slider();

previous.addEventListener('mouseover', () => {

    boxInter.style.opacity = '0';
    boxInter.style.zIndex = '0';
    boxGrav.style.opacity = '0';
    boxGrav.style.zIndex = '0';
})
previous.addEventListener('click', () => {


    if (contador === 1) {
        return;
    }
    else {

        contador--;
        slider();
    }

})

next.addEventListener('mouseover', () => {
    boxMartian.style.opacity = '0';
    boxMartian.style.zIndex = '0';
    boxInter.style.opacity = '0';
    boxInter.style.zIndex = '0';

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

    if (e.target.id === 'img1') {

        boxAppear(boxMartian);
        boxFade(boxMartian);

    }

    else if (e.target.id === 'img2') {

        boxAppear(boxInter);
        boxFade(boxInter);


    }
    else if (e.target.id === 'img3') {

        boxAppear(boxGrav);
        boxFade(boxGrav);
    }
})


/*----------------------Desafio---------------------------*/

const input1 = document.getElementById('input1');

const input2 = document.getElementById('input2');

const input3 = document.getElementById('input3');



let sticker1 = 0;
let sticker2 = 0;
let sticker3 = 0;

let integ;

let suma3Stickers;

const sumaGlobal = () => {
    suma3Stickers = Number(input1.value) + Number(input2.value) + Number(input3.value);

}

const topeStickers = () => {

    if (suma3Stickers < 10) {

        alertaM.textContent = `Total stickers: ${suma3Stickers}`;
        alertaI.textContent = `Total stickers: ${suma3Stickers}`;
        alertaG.textContent = `Total stickers: ${suma3Stickers}`;
    } else {

        alertaM.textContent = "Llevas muchos stickers!";
        alertaI.textContent = "Llevas muchos stickers!";
        alertaG.textContent = "Llevas muchos stickers!";
    }

}



const sumarStickers = (botton, input, sticker) => {

    botton.addEventListener('click', () => {
        sticker = input.value;
        sticker++;
        input.value = sticker;
        sumaGlobal();
        topeStickers();

    })
}
const restarStickers = (botton, input, sticker) => {
    botton.addEventListener('click', () => {

        if (input.value == 0) {
            return;
        }
        else {
            sticker = input.value;
            sticker--;
            input.value = sticker;
            sumaGlobal();
            topeStickers();
        }
    })
}

const valorInput = (input, sticker) => {
    input.addEventListener('change', () => {
        if (isNaN(input.value)) {
            input.value = sticker
        } else {
            integ = Math.ceil(input.value);
            sticker = integ;
            input.value = sticker;
            sumaGlobal();
            topeStickers();
        }

    })
}

valorInput(input1, sticker1);
valorInput(input2, sticker2);
valorInput(input3, sticker3);

sumarStickers(moreM, input1, sticker1);
restarStickers(lessM, input1, sticker1);

sumarStickers(moreI, input2, sticker2);
restarStickers(lessI, input2, sticker2);

sumarStickers(moreG, input3, sticker3);
restarStickers(lessG, input3, sticker3);















