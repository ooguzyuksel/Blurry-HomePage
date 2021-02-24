const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const maintext = document.querySelector(".maintext");
const footer = document.querySelector("footer");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();

})

let load = 0;

let int = setInterval(blurring, 30); // Function Runs in every 30 miliseconds "blurring" function

function blurring() {
    load++;

    if (load > 99) {
        search.style.display = "inline-block";
        maintext.style.display = "inline-block";
        footer.style.display = "flex";
        clearInterval(int); //it stops blurring function, when load is greater than 99 ( when it hits to 100 )

    }

    console.log(load);
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
