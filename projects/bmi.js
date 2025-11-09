const calculateBtn = document.getElementById("calcBtn");

calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const result = document.getElementById("result");
  if (weight === "" || height === "") {
    alert("please enter your weight and height");
  } else {
    const calculatedValue = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `your final result is :- ${Math.floor(Math.round(calculatedValue * 100) / 100)}`;
    if(calculatedValue < 18.5){
          result.innerHTML = `your final result is :- ${Math.floor(Math.round(calculatedValue * 100) / 100)} (Underweight)`;
    }
  
    if(calculatedValue < 24.9 && calculatedValue >= 18.5){
          result.innerHTML = `your final result is :- ${Math.floor(Math.round(calculatedValue * 100) / 100)} (Normal weight)`;
    }
  
    if(calculatedValue < 29.9 && calculatedValue >= 25){
          result.innerHTML = `your final result is :- ${Math.floor(Math.round(calculatedValue * 100) / 100)} (Overweight)`;
    }
  }

});
