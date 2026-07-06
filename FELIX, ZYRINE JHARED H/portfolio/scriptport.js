window.addEventListener('scroll', () => {
    const topBtn = document.getElementById('topBtn');
    if (window.scrollY > 300) {
        topBtn.style.opacity = '1';
        topBtn.style.pointerEvents = 'auto';
    } else {
        topBtn.style.opacity = '0';
        topBtn.style.pointerEvents = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const topBtn = document.getElementById('topBtn');
    topBtn.style.transition = 'opacity 0.3s ease';
    topBtn.style.opacity = '0';
    topBtn.style.pointerEvents = 'none';
});