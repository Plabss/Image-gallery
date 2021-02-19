// const images = document.getElementById("images");
// const image = document.getElementById("bigImage");
// images.addEventListener("click", function (e) {
//     // image.setAttribute("src", `${e.target.src}`);
//     image.src = e.target.src;
// })


const images = document.querySelectorAll(".images img")
images[0].style.opacity = 0.4
const image = document.getElementById("bigImage");
images.forEach(img => img.addEventListener("click", function (e) {
    images.forEach(img => (img.style.opacity = 1));
    image.src = e.target.src;
    e.target.style.opacity = 0.4;
}));