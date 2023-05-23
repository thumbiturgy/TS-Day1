
// ================================== Question 1 ====================================

// Create a type to represent the following instances of CTStudent Also declare three 3 students below as type CTStudent and set their values

// let student1 = {
//     id: 'GMK435&g62L00',
//     name: 'John Smith',
//     age: 24,
//     isTired: true,
//     projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
//     pet: 'dog'
// }

// let student2= {
//     id: '6KGS%54GmlY76',
//     name: 'Jenny Hawthorne',
//     age: 28,
//     isTired: false,
//     projectsCompleted:["HTML Portfolio"],
// }

// let student3 = {
//     id: '6KGS%54GmlY76',
//     name: 'Neo',
//     age: 57,
//     isTired: true,
//     projectsCompleted:["Matrix","Biological Interface Program"],
//     pet:'cat'
// }

type CTStudent = {
    id: string,
    name: string,
    age: number
    isTired: boolean
    projectsCompleted: [...string[]]
    pet?: string
}

let student10: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student11: CTStudent= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student12: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

console.log(student10)
console.log(student11)
console.log(student12)



// Question #2

// Write a function that will accept a an object of type Fruit, the object of type Fruit could also be null. If their is a Fruit print the color of the fruit, otherwise print You ate my fruit already be sure to annoate the return type of the function

1

//Given

2

type Fruit={
    color:string,
    shape:string
} | null

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit=null

function fruitColor(fruit:Fruit):void{
    if(fruit === null){
        console.log('You ate my fruit already')
    }
    if(fruit != null){
       console.log(fruit.color)
    }
}



fruitColor(apple)
fruitColor(eaten)

// Question #3

// Create a Union Type named Ebook for Book and DigitalBook and create one instance of the new union type

1

//Given 
 type Book={
    isbn:string,
    title:string,
    author:string
}

type DigitalBook={
    fileType:string,
}
//Answer

type Ebook = Book & DigitalBook

const lotr:Ebook ={
    isbn: 'a09s8d7f',
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkein',
    fileType: '.wav'
}

console.log(typeof lotr)



// Question #4

// Create a Type to represent a ShopItem that will fit the following rules. You may need to create additional structures

//     All ShopItems have an numeric id that can not be edited
//     All ShopItems have a price
//     All ShopItems have a description
//     Some ShopItems have a color
//     All ShopItems have a Category represented with an enum
//         Possible Categories are Shirts Shoes Pants Hats
//     All ShopItems have a list of keywords used to help search for the ShopItem
//         For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

// After Creating the ShopItem type create 3 items using this type

enum Categories{
    Shirts= 'SHIRTS',
    Shoes= 'SHOES',
    Pants= 'PANTS',
    Hats='HATS',
    Gloves='GLOVES'
}
type ShopItem = {
    readonly id:number,
    price:number,
    description:string,
    color?:string,
    category: Categories,
    keywords: string[]
}

const hulkHands:ShopItem={
    id:1,
    price:20,
    description: 'For Smashing',
    color: 'green',
    category: Categories.Gloves,
    keywords: ['Hulk', 'Sound', 'Marvel', 'Costume', 'Avengers', 'She-Hulk', 'Endgame']
}