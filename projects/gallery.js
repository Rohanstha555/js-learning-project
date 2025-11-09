document.addEventListener("DOMContentLoaded", () => {
  
    let display = document.getElementById("display-img");
    let images = document.querySelectorAll(".img");
    
    images.forEach((pic) => {
        // console.log(pic);
        pic.addEventListener("click", (e) => {
            console.log(e);
            console.log(e.target);
            
            let imgSrc = e.target.src;
            display.style.backgroundImage = `url("${imgSrc}")`;
            // display.innerHTML = `<img src="${imgSrc}" alt="Gallery Image" />`;
        });
    });
    
});