

// const chiya = function (){
//     let username = "Rohan"
//     console.log(this.username) //output is indefined
// }


// arrow function

// const chiya = () => {
//     let username = "Rohan"
//     console.log(this)  // output is {}
// }
// chiya()


// const chiya = (num1, num2) => {
//     return num1 + num2
// }
// console.log(chiya())

// const chiya = (num1, num2) => num1 + num2  //implict way 

// const chiya = (num1, num2) => (num1 + num2)  //implict way 


//we need to put () otherwise output will be undefined
// const chiya = () => {username: "Rohan"} 

// 
// correct way is
// const chiya = () => ({username: "Rohan"}) 

// const loggedinuser = (username) => {

//     if(!username){
//         console.log("please enter name")
//     }
//     return `welcome, ${username}`
// }
// console.log(loggedinuser("Rohan"))