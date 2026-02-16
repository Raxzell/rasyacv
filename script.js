const card = document.getElementById("ktpCard");

window.addEventListener("scroll", () => {
    // Kalo user scroll lebih dari 100px, tambahkan class shrink
    if (window.scrollY > 100) {
        card.classList.add("shrink");
    } else {
        card.classList.remove("shrink");
    }
});