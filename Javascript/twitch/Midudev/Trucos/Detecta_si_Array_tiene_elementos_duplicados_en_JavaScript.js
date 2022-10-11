const a = [1,2,3,2,2]

hasDuplicates(a) // true

const hasDuplicates = array => {
    new Set(array).size < array.length    
}