const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, current) => {
    console.log(`Acc:${acc} current:${current}`);
    return acc + current      
}, 0)

console.log("Sum:", sum);