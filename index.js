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

//middle dot click
next.addEventListener('click', function() {
    if (tests.classList.contains('first')) {
        tests.classList.remove('first');
    }

    if (tests.classList.contains('third')) {
        tests.classList.remove('third');
    }
    //clear timing interval
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
