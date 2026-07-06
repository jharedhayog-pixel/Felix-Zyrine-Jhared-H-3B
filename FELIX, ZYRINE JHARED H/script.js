document.addEventListener('DOMContentLoaded', () => {
    const typingEl = document.querySelector('.typing');
    const text = typingEl.textContent;
    typingEl.textContent = '';

    let i = 0;
    const typingSpeed = 100;
    const pauseAfter = 1500;
    const pauseBefore = 500;

    function type() {
        if (i <= text.length) {
            typingEl.textContent = text.slice(0, i);
            i++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseAfter);
        }
    }

    function erase() {
        if (i > 0) {
            i--;
            typingEl.textContent = text.slice(0, i);
            setTimeout(erase, typingSpeed / 2);
        } else {
            setTimeout(type, pauseBefore);
        }
    }

    type();
});