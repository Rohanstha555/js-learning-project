const obj = {
    username : "rohan",
    age: 10,

    welcome: function(){
        console.log(`${this.username}  youkusu watashino soul society`)
        console.log(this) // shows current obj or context
    }
}
obj.welcome()
obj.username = "puntu";
obj.welcome()

console.log(this)// empty paranthesis