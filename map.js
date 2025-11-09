

const numbers = [1, 2, 3, 4, 5];

// const newnums = numbers.map( (num) => {
//     return num * 2;
// })

const newnums = numbers
                .map( num => num * 10 ) 
                .map( num => num + 5 )
                .filter( (num) => num > 20)

console.log(newnums);