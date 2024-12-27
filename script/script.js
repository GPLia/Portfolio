const themeToggle = document.getElementById('theme-toggle');
const body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', ''); 
    }
});