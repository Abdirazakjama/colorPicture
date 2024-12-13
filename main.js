// let array = ["white","red","yellow"]

// console.log(array)

// array.unshift("green")

// console.log(array)

// array.pop()

// console.log(array)

// array.shift()

// console.log(array)

// let car = {
//     make:"china",
//     model:"toyota",
//     year:2000,
//     great: () =>{
//         console.log("welcoome to " ,this.make)
//     },
//     start: () =>{
//         console.log("the car has started")
//     }
// }

// console.log(car)
// console.log(car.make)
// console.log(car.model)
// console.log(car.year)

// car.make ="hindia"

// console.log(car)

// car.expiredate = "1999"

// console.log(car)

// console.log(car.start())

// let students = [
//     {
//         name :"cabdirisaq",
//         age:20,
//         id : 235
//     },
//     {
//         name:"cali",
//         age:90,
//         id: 6778
//     }
// ]

// console.log(students[0].age)

// let numbers = [1,2,3,4,5]

// numbers.forEach(function(number){
//     console.log(number)
// })

// let numbers = [1,2,3,4,5,6,7,8]

// let newAray = numbers.filter((number) =>{
//  return number % 2 === 0
// })


// console.log(newAray)

// let scores = [10,40,50,60,70,80,90];

// let result = scores.filter((score) => score >= 50 )

// console.log(result)

// let city = "carmo"
// let name = "siciid cabdullahi dani"

// let message = `hello ${name} welcome to ${city}`

// console.log(message)

// let colors = ["red","green","blue"]

// let [red,green,blue] = colors

// console.log(red,blue)

// const person = {name:"cabdirisaq",age:20,birthday:"30"}

// const {name,age,birthday} = person;

// console.log(name,age, birthday)

// const about = document.querySelector('#about')

// console.log(about)
// const text = document.querySelectorAll('.text')[0]
// console.log(text)
// const buttan = document.querySelector('button')

// console.log(buttan)


// function changeText(){
//     about.textContent = "you now me"
// }

// function changeContent(){
//     text.innerHTML = `click my website <strong>to viewe</strong>`
// }

// const list = document.querySelector('#list')

// function additem(){
//     const newItem = document.createElement('li')

//     newItem.textContent = "new item",

//     list.appendChild(newItem)
// }

// additem()

// function removeitem(){
//     if(list.lastChild){
//           list.removeChild(list.lastChild)
//     }

// }

// removeitem()

const color = document.querySelector('#color')

const colorPreview = document.querySelector('#colorPreview')
const ColorHistory = document.querySelector('#ColorHistory')
const clearHistory = document.querySelector('#clearHistory')


color.addEventListener('input', function () {
    const colorSelected = color.value

    colorPreview.style.backgroundColor = colorSelected
    const showColorValue = document.createElement('li')

    showColorValue.textContent = colorSelected

    ColorHistory.appendChild(showColorValue)

    showColorValue.style.color = colorSelected



})

clearHistory.addEventListener('click', function () {
    if (ColorHistory) {
        ColorHistory.remove(ColorHistory)
    }

})