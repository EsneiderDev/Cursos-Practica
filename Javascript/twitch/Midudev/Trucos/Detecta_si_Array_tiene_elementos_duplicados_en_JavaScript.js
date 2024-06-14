const a = [1, 2, 3, 2, 2];

const hasDuplicates = (array) => {
    console.log(new Set(array)) // Set(3) { 1, 2, 3 }
    return new Set(array).size < array.length;
};

console.log(hasDuplicates(a)); // true