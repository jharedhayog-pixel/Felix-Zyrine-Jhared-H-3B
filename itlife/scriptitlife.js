window.addEventListener('scroll', () => {
    const topBtn = document.getElementById('topBtn');
    if (window.scrollY > 300) {
        topBtn.style.opacity = '1';
        topBtn.style.pointerEvents = 'auto';
    } else {
        topBtn.style.opacity = '0';
        topBtn.style.pointerEvents = 'none';
    }

    let current = '';
    document.querySelectorAll('main section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const topBtn = document.getElementById('topBtn');
    topBtn.style.transition = 'opacity 0.3s ease';
    topBtn.style.opacity = '0';
    topBtn.style.pointerEvents = 'none';
});