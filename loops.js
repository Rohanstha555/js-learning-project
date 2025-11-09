// for of loop

const array = ['apple', 'banana', 'cherry'];

for (const fruit of array) {
    // console.log(fruit);  // prints each fruit
}


// maps

const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

for (const key of map){
    // console.log(key);
}

for (const [key,value] of map){
    // console.log(key :- value);
}


const myobj = {
    name: 'Alice',
    age: 25,
    city: 'Los Angeles'
};
for (const [ , value] of myobj){
    // console.log(key , value);  // not iterable
}




// forin loop

const person = {
    name: 'Bob',
    age: 28,
    city: 'Chicago'
};

for (const key in person) {
//    console.log(key)
    
}
for (const key in person) {
//    console.log(person[key])
    
}



const colors = ['red', 'green', 'blue'];

for (const index in colors) {
    // console.log(index);  // prints indexes 0, 1, 2
}
for (const index in colors) {
    console.log(colors[index]);  // prints indexes 0, 1, 2
}



// foreach loops

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//     console.log(number);  // prints each number
// })

numbers.forEach( (number) => {
    // console.log(number);  // prints each number
})



const arrofobj = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jane',
        age: 25
    },
    {
        name: 'Jim',
        age: 35
    }

]

arrofobj.forEach( (item) => {
    console.log(item.name);  // prints each name
})