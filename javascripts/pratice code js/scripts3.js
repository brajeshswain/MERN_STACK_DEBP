const image = document.getElementById("image")

const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
]
let index = 0;

document.getElementById("next").addEventListener("click", function () {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    image.src = images[index]
})

document.getElementById("previous").addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = images.length - 1
    }
    image.src=images[index]
})