// 1. Scroll Reveal Logic
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 2. Ticker Speed Boost on Hover
const ticker = document.querySelector('.ticker');
ticker.addEventListener('mouseenter', () => ticker.style.animationDuration = '10s');
ticker.addEventListener('mouseleave', () => ticker.style.animationDuration = '25s');

// 3. Contact Modal Logic
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const span = document.querySelector(".close-btn");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

span.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
