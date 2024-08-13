function calculateAverage(numbers){
    const sum = numbers.reduce((total,num) => total + num, 0)
    return sum / numbers.length;
}

const numbers = [12, 32, 3, 14, 5];
console.log(calculateAverage(numbers));