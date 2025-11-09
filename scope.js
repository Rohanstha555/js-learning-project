function parent(){
    const username = "Rohan"

    function child(){
        const password = 1234

        // child can access parent variables
        console.log("I am printing parent vlaue", username)
    }
    child()

    //this console doesnt work because parent cannot access child variables
    // console.log("i am printing child vlaue", password) 
}
parent()