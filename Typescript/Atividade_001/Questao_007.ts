const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const arrayPares: Array<number> = []

array.filter(item => {
    if(item % 2 == 0) arrayPares.push(item)
})

console.log(arrayPares)