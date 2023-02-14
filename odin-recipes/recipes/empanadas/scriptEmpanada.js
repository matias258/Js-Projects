
const imgs = document.querySelectorAll(".eng,.esp,.img");

imgs.forEach(function(img) {
    img.addEventListener("mouseover", function() {
        this.classList.add("hovered");
    });
    img.addEventListener("mouseout", function() {
        this.classList.remove("hovered");
    });
});
