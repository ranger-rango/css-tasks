document.addEventListener("DOMContentLoaded", () => 
{
    const dialog = document.querySelector('dialog')
    document.querySelector('.show-mortgage-calc').addEventListener("click", () => 
    {
        dialog.showModal();
    });

    document.querySelector('.close-mortgage-calc').addEventListener("click", () => 
    {
        dialog.close();
    });
});