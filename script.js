const card = document.getElementById("ktpCard");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        card.classList.add("shrink");
    } else {
        card.classList.remove("shrink");
    }

});
