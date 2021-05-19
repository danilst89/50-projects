const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const allCircles = document.querySelectorAll('.circle');
const progress = document.querySelector('#progress');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > allCircles.length) {
        currentActive = allCircles.length;
    }

    update();
});

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

const update = () => {
    allCircles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (allCircles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === allCircles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};