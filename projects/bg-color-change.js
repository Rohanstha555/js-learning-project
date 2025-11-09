const button = document.querySelectorAll(".box");
const body = document.body;

button.forEach( (btn) => {
    console.log(btn);
    btn.addEventListener("click" , (e) => {
        console.log(e)
        console.log(e.target)
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "black"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "beige"){
            body.style.backgroundColor = e.target.id;
        }
    })
})

// button.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const buttonId = e.target.id;
//     console.log(buttonId);
//     switch (buttonId) {
//       case "red":
//         body.style.backgroundColor = e.target.id;
//         break;
//       case "green":
//         body.style.backgroundColor = e.target.id;
//         break;
//       case "blue":
//         body.style.backgroundColor = e.target.id;
//         break;
//       case "black":
//         body.style.backgroundColor = e.target.id;
//         break;
//       case "beige":
//         body.style.backgroundColor = e.target.id;
//         break;
//     }
//   });
// });
