document.addEventListener("DOMContentLoaded", () => 
{
    const html = document.documentElement;

    document.querySelector('.gallery-1').addEventListener("click", () => 
    {
        html.setAttribute("data-theme", "gallery1");
    });

    document.querySelector('.gallery-2').addEventListener("click", () => 
    {
        html.setAttribute("data-theme", "gallery2");
    });

    document.querySelector('.gallery-3').addEventListener("click", () => 
    {
        html.setAttribute("data-theme", "gallery3");
    });

    document.querySelector('.gallery-4').addEventListener("click", () => 
    {
        html.setAttribute("data-theme", "gallery4");
    });
    
});