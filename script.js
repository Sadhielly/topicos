document.addEventListener("DOMContentLoaded", () => {
    console.log("Hotfix v1.0.1 ativo. Dados protegidos contra perda.");

    const toggleBtn = document.getElementById('toggle-dark-mode');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});