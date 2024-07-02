
// const data = [1,2,3,4,5,6] //js array
// data.splice(1,3,'hello','bye','world') //To change the data of array
// console.log(data) //js printf


// const num = [7,8,9,0]
// num.splice(1,2,'name','date')
// console.log(num)

// const vowels = ['m','o','h','i','t']
// vowels.splice(0,6,13,1,14,9,19,8)
// console.log(vowels)


// const text = 'I am from nepal' 
// const splittedData = text.split(" ")
// console.log(splittedData)

// const language = ['js','php','c']
// language.splice(1,0,'html')
// //language[1]="html"
// console.log(language)

// const person = Object.freeze({
//     name : "abcd",
//     address : "city",
//     nationality : "Home"
// })
// console.log(person.address)
// console.log(person['address'])
// person.age = 22
// person.haha = "hehe"
// console.log(person)
// console.log(Object.keys(person))
// console.log(Object.values(person))


// const datas = ({
//     name : ['manish','pranjal']
// })

// datas.name.push('sanjeev')
// console.log(datas.name)

// const datas = (
//     {
//     name : ['manish']
//     },
//     {
//      name : ['pranjal']
//     } 
// )

// datas.push({name :['sanjeev']})
// console.log(datas)

const datas = ({
    name : ['manish','pranjal','sanjeev']
})



datas.name.splice(0,3,1,2,3)
console.log(datas)


