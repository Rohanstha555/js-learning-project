// const score = 100

// if(score <= 100){
//     const power = "stealth"
//     console.log(`you've gained new skill : ${power}`)
// }

//     console.log(`you've gained new skill : ${power}`) //error


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 


if(userLoggedIn && debitCard){
    console.log("you can shop")
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("user logged in")
}