const strings = ["Bob", "AleX", "532", "Donald", "redux", "bebra", "Юга"]
const nums = [23, 1, 53, 2, 3, 61, 11]
console.log(strings.sort())
console.log(nums.sort((a, b) => b - a))
const students = [
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 99
    },
    {
        name: "Nick",
        age: 20,
        isMarried: true,
        scores: 120
    },
    {
        name: "Kir",
        age: 19,
        isMarried: true,
        scores: 110
    },
    {
        name: "Mari",
        age: 30,
        isMarried: false,
        scores: 111
    },
    {
        name: "Katy",
        age: 21,
        isMarried: false,
        scores: 93
    }
]
console.log(students
    .sort((a, b) => b.scores - a.scores)
    .reverse())
console.log(students.sort((a, b) => b.name < a.name ? -1 : 1))
//функция должна добавлять всех друзей каждого студента
const addFriends = (students) => students.map(st=>({...st,friends:students.map(st=>st.name).filter(name=>st.name!==name)}))
console.log(addFriends(students))