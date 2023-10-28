document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("nav-btn");
    const sidenav = document.querySelector(".sidenav");
    const cancelBtn = document.querySelector(".cancel-btn");

    menuButton.addEventListener("click", function () {
        sidenav.classList.toggle("show");
    });

    cancelBtn.addEventListener("click", function () {
        sidenav.classList.remove("show");
    });
});
