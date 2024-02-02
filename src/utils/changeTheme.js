document.getElementById('themeToggle').addEventListener('change', function() {
    const theme = document.querySelector('.theme');
    const isDarkMode = theme.classList.contains('theme-dark');
    theme.classList.toggle('theme-dark', !isDarkMode);
    theme.classList.toggle('theme-light', isDarkMode);
});