document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const toggleDot = document.getElementById('toggle-dot');
    const body = document.getElementById('body-wrapper');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    // Select all buttons that need text swapping
    const contactBtns = document.querySelectorAll('.contact-btn');

    // Theme Toggle Logic
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        toggleDot.classList.toggle('translate-x-[24px]');

        // Update button text
        const isLight = body.classList.contains('light-theme');
        contactBtns.forEach(btn => {
            btn.textContent = isLight ? "Button" : "Contact Me";
        });
    });

    // Mobile Menu Logic
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });
});