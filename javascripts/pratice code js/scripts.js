let count = 0;
let display = document.getElementById("count");

function increment() {

    count++;
    display.innerText = count;


}

function decrement() {
    if (count > 0) {

        count--;

    }
    display.innerText = count;
}
