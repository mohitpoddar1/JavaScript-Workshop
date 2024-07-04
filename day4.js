// DAY---4

// getSomething(funtion(){

// })

// getSomething(()=>{

// })


// const fruits = ["Mango","Apple","Orange"]

// fruits.forEach(function(fruit){ // it is only for loop
//     console.log(fruit)
// })

// const nums = [1,2,3,4,5]
// const squares = []
// nums.forEach(function(num){
//  squares.push(num*num)
// })
// console.log(squares)

// fruits.map(function(fruit){
//     console.log(fruit)
// })

// fruits.filter((){
    
// })

// const data = [
//     {
//         firstname : "Manish",
//         lastname : "Basnet",
//         address : "Itahari"
//     },
//     {
//         firstname : "Pranjal",
//         lastname : "Sharma",
//         address : "Basbari"
//     },
//     {
//         firstname : "Bob",
//         lastname : "Marley",
//         address : "Balgram"
//     }
// ]

// data.forEach((abc)=>{
// console.log(abc.firstname + " " + abc.lastname)
// })

// const nums2 = [2,4,6,8]
// const squared = nums2.map((num)=>{ //loop push give a new array
//     return num * num
// })
// console.log(squared)

// const result = data.map((Ob)=>{
//     return {
//         fullname : Ob.firstname + " " + Ob.lastname
//     }
// })

// console.log(result)

// const nums = [1,2,3,4,5]

// const result = nums.map((abc)=>{
//  return {
//     text : 'A',
//     number : abc
//  }
// })

// console.log(result)

// const result = data.map((abc)=>{
//     return { 
//             ...abc, // for selecting all data as it is from the variable(object) name 'sprade operator'
//              fullname : abc.firstname + " " + abc.lastname}
//     })

// console.log(result)

// const numdata = [1,2,3,4,5,6,7,8,9,10]

// const oddnum = numdata.filter((num)=>{
//       return num%2!==0
// })
// console.log(oddnum)

// const oddnum2 = numdata.filter((num)=>{
//     return num > 5
// })
// console.log(oddnum2)

// const books = [
//     {
//         title : "You can win",
//         author : 'shiv khera',
//         publishedAt : 2001
//     },
//     {
//         title : "Think like a monk",
//         author : 'Jay shetty',
//         publishedAt : 2022
//     },
//     {
//         title : "Cashflow quadrant",
//         author : 'Robert T. Kiyosaki',
//         publishedAt : 1909
//     },
//     {
//         title : "You can win2",
//         author : 'shiv khera',
//         publishedAt : 1990
//     },
//     {
//         title : "Think like a monk2",
//         author : 'Jay shetty',
//         publishedAt : 1999
//     },
//     {
//         title : "Cashflow quadrant2",
//         author : 'Robert T. Kiyosaki',
//         publishedAt : 2010
//     }
// ]

// const oddnum2 = books.filter((xyz)=>{
    
//     return xyz.publishedAt > 2000
   
// })
// console.log(oddnum2)

// const files = ["index.html","app.js","app.java","styles.css","test.js"]

// const num3 = files.filter((xyz)=>{
    
//     return xyz.endsWith(".js")
   
// })
// console.log(num3)

// const lastTask = [1,2,null,undefined,"Manish","haha","hehe"]
// const abc = lastTask.filter((xyz)=>{
//     return xyz != null && xyz != undefined
// })
// console.log(abc)

// const data = [
//     {
//         name : "Manish",
//         marks : 800,
//         status : "pass"
//     },
//     {
//         name : "Anish",
//         marks : 500,
//         status : "fail"
//     },
//     {
//         name : "Pranjal",
//         marks : 900,
//         status : "pass"
//     },
//     {
//         name : "Bob",
//         marks : 100,
//         status : "fail"
//     },
//     {
//         name : "Hari",
//         marks : 550,
//         status : "fail"
//     },
//     {
//         name : "Shyam",
//         marks : 600,
//         status : "pass"
//     },
//     {
//         name : "Laxman",
//         marks : 300,
//         status : "fail"
//     }
// ]

// const abc = data.filter((xyz)=>{
//     return xyz.marks > 500 && xyz.name.endsWith('sh') && xyz.status == "pass"
// })
// console.log(abc)

