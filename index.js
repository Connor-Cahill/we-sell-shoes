/* Functionality we need to add with JS:
-testimonials should cycle through on their own
-testimonial---> user should be able to hit dots to cycle through
*/

/// Testimonial Section
//3 dots
const nextNext = document.getElementById('next-next');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

//indivual testimonials
const testi1 = document.querySelector('.testi1');
const testi2 = document.querySelector('.testi2');
const testi3 = document.querySelector('.testi3');

//testimonial parent container
const tests = document.querySelector('.tests');

let nextNextInt = window.setInterval(function() {
    //check for and remove 2nd class
    if (tests.classList.contains('second')) {
        tests.classList.remove('second');
        tests.classList.add('third');
    }

}, 4000)

let nextInt = window.setInterval(function() {
    if (tests.classList.contains('first')) {
        tests.classList.remove('first');
        tests.classList.add('second');

    }
}, 8000)

let prevInt = window.setInterval(function() {
    if (tests.classList.contains('third')) {
        tests.classList.remove('third');
        tests.classList.add('first');
    }
}, 16000)

//middle dot click//////////
next.addEventListener('click', function() {
    if (tests.classList.contains('first')) {
        tests.classList.remove('first');
    }

    if (tests.classList.contains('third')) {
        tests.classList.remove('third');
    }
    //clear timing interval////////
    window.clearInterval(nextNextInt);
    window.clearInterval(nextInt);
    window.clearInterval(prevInt);

    tests.classList.add('second');
})

nextNext.addEventListener('click', function() {
    if (tests.classList.contains('second')){
        tests.classList.remove('second');
    }
    if (tests.classList.contains('first')) {
        tests.classList.remove('first');
    }
    window.clearInterval(nextNextInt);
    window.clearInterval(nextInt);
    window.clearInterval(prevInt);

    tests.classList.add('third');
})

prev.addEventListener('click', function() {
    if (tests.classList.contains('second')) {
        tests.classList.remove('second');
    }
    if (tests.classList.contains('third')) {
        tests.classList.remove('third');
    }
    window.clearInterval(nextNextInt);
    window.clearInterval(nextInt);
    window.clearInterval(prevInt);

    tests.classList.add('first');
})
/// End Of Testimonial Section


//////// FAQ Accordion Section /////////
const acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        // add in the active class
        this.classList.toggle('active');

        //select sibling element
        let panel = this.nextElementSibling;

        //if sibling open, close. if close, open
        if (panel.style.maxHeight) {
            //panel is open
            panel.style.maxHeight= null;
        } else {
            //panel is closed
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


///////// POP UP ////////////////
const popUp = document.getElementById('pop-up');
const popUpLayer = document.getElementById('pop-up-layer');
const closeModal = document.getElementById('close-pop-up');

const subBtn = document.getElementById('sub-btn');



subBtn.addEventListener('click', function() {
    popUpLayer.style.display= 'flex';
})

closeModal.addEventListener('click', function() {
    popUpLayer.style.display = 'none';
})


let popUpSeconds = 40;

//trigger popup after popUpSeconds //
let popUpFun = window.setInterval(function() {
    popUpLayer.style.display = 'flex';

    window.clearInterval(popUpFun);
}, popUpSeconds * 1000);
