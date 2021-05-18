const panels = document.querySelectorAll('.panel');

const clearActive = (panels) => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        clearActive(panels);
        e.target.classList.add('active');
    });
});