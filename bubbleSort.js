const mas = [1, 5, 2, 7, 23, 8, 6, 2, 7, 8, 0]
mas.sort((a, b) => a - b)
console.log(mas)

for (let j = 0; j < mas.length - 1; j++) {

    for (let i = 0; i < mas.length - 1 - j; i++) {
        if (mas[i] > mas[i + 1]) {
            let temp = mas[i]
            mas[i] = mas[i + 1]
            mas[i + 1] = temp
        }
    }
}



