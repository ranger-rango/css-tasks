document.addEventListener("DOMContentLoaded", () => 
{
    const html = document.documentElement;

    document.querySelector('.layout-1').addEventListener("click", () => 
    {
        html.setAttribute("data-theme", "layout1");
    });

    document.querySelector('.layout-2').addEventListener("click", () => 
    {
        html.setAttribute("data-theme", "layout2");
    });

    document.querySelector('.layout-3').addEventListener("click", () => 
    {
        html.setAttribute("data-theme", "layout3");
    });

    document.querySelector('.layout-4').addEventListener("click", () => 
    {
        html.setAttribute("data-theme", "layout4");
    });
    
});