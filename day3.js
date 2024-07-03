// DAY----3

// const isRaining = false

// if(isRaining){
//     console.log("carry umbrella")
// }else{
//     console.log("Don't carry umbrella")
// }



// const age = 21
// if(age > 18){
//     console.log("carry umbrella")
// }else{
//     console.log("Don't carry umbrella")
// }

// const age = "21" // it is an string
// if(age === 21){ // 2 equal sign check only the value but 3 eual sign will check both the value and the data type
//     console.log("carry umbrella")
// }else{
//     console.log("Don't carry umbrella")
// }

//ternary opersator
// const result = isRaining ? "const Umbrella" : "Don't carry umbrella"
// console.log(result)

// isRaining && console.log("carry Umbrella") //if left is i.e "israining = true" then print else not

// const temperature = 27
// if(temperature > 30){
//     console.log("HOT")
// }else if(temperature > 20){
//     console.log("Moderate")
// }else{
//     console.log("Cool")
// }
// const grade = 70
// 80- 90 --> console.log("A")
// 70- 80 --> console.log("B+")
// 60- 70 --> console.log("B")
// 0- 60 --> console.log("Fail")
// if(grade >= 80){
//     console.log("A")
// }else if(grade >= 70){
//     console.log("B+")
// }else if(grade >= 60){
//     console.log("B")
// }else{
//     console.log("Fail")
// }

// loop

// const days = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ]

// for(var i = 0; i < days.length; i++){
//     console.log(days[i])
// }

// for(let day of days){ // same as loop in C
//     console.log(day)
// }

// const data = {
//     name : "abcd",
//     age : 15,
//     address : "city"
// }
// for(let key in data){ 
//     console.log(key)
// }
// for(let key in data){ 
//     console.log(key +' is '+ data[key])
// }

//functions

// regular function
// function add(a,b){
//     console.log(a+b) //block of code should be inside curly brackets
// }
// add(1,2)

// // named regular function
// const add = function add(a,b){
//     console.log(a+b) 
// }

// // arrow regular function
// const add = (a,b)=>{
//     console.log(a+b) 
// }

// ()=>{
//     console.log("Hello World") 
// }

// const numbers = [1,2,3,4,5]
// function add(a){
//    for(let data of a){ 
//       console.log(data)
//       console.log(data*data)
//    }}

// add(numbers)

const Ob = {
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}

function abc(Ob){
    console.log(Ob.code[0].userId)
    console.log(Ob.code[0].title)
    console.log(Ob.code[0].ipAddress)
}

abc(Ob)