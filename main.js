let date = new Date()
let DateOfBirth = new Date(2004,10,3)
console.log(DateOfBirth.toLocaleDateString())

let age = date.getFullYear() - DateOfBirth.getFullYear()
console.log(`you are ${age} Years Old`)

let nextBirthDayDate = new Date(date.getFullYear() ,DateOfBirth.getMonth(), DateOfBirth.getDate())
// console.log(nextBirthDayDate);

console.log(nextBirthDayDate.toLocaleDateString())
let nextBirthDay_DaysRemain = Math.ceil((nextBirthDayDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

console.log(nextBirthDay_DaysRemain)
