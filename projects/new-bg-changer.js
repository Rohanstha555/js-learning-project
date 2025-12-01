// let randomcolor = function () {
//     let color = Math.floor(Math.random() * 16777215).toString(16);
//     return "#" + color;
// };


let randomColor2 = function()  {
    let hex = '0123456789ABCDEF'
    let color = '#'

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let interval;

let start = document.getElementById("start");
let stopper = document.getElementById("stop");

function bgchanger() {
    document.body.style.backgroundColor = randomColor2();
}

start.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(bgchanger, 1000);
    }
});

stopper.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});



//another way

// let randomColor2 = function()  {
//     let hex = '0123456789ABCDEF'
//     let color = '#'

//     for(let i = 0; i < 6; i++){
//         color += hex[Math.floor(Math.random() * 16)]
//     }
//     return color
// }
// console.log(randomcolor());
