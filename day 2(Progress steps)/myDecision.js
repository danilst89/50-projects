const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const allCircles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');

const removeAllActiveClass = () => {
    allCircles.forEach(circle => {
        circle.classList.remove('active');
    })
};

const activateFirst = () => {
    removeAllActiveClass();
    allCircles[0].classList.add('active');
};
activateFirst();

let counterClicks = 0;
let widthLine = 0;

next.addEventListener('click', () => {
    if (counterClicks !== 3) {
        ++counterClicks;
        allCircles[counterClicks].classList.add('active');
        widthLine += 33;
        progress.style.width = `${widthLine}%`;
    }
    if (counterClicks === 3) {
        next.setAttribute('disabled', 'true');
    }
    if (counterClicks > 0) {
        prev.removeAttribute('disabled');
    }
});

prev.addEventListener('click', () => {
    if (counterClicks > 0) {
        allCircles[counterClicks].classList.remove('active');
        widthLine -= 33;
        progress.style.width = `${widthLine}%`;
    }
    if (counterClicks < 4) {
        next.removeAttribute('disabled');
    }
    if (counterClicks === 1) {
        prev.setAttribute('disabled', 'true');
    }
    if (counterClicks !== 0) {
        --counterClicks;
    }
});
