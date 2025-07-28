document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.display-switcher-btn').addEventListener("click", () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');

        if (currentTheme === 'grid') {
            html.setAttribute('data-theme', 'flex');
            document.querySelector('.display-switcher-btn').innerHTML = "<p>Grid</p>";
        } else {
            html.setAttribute('data-theme', 'grid');
            document.querySelector('.display-switcher-btn').innerHTML = "<p>Flex</p>";
        }
        
    });
});