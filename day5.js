// DAY----5

// const num = [1,2,3,4,5]

// const sum = num.reduce((accumulator,num)=>{
//      return num + accumulator
// },0)

// console.log(sum)

// const products = [
//     {
//         product : 'A',
//         price : 200,
//         qty : 2
//     },
//     {
//         product : 'B',
//         price : 300,
//         qty : 7
//     },
//     {
//         product : 'A',
//         price : 1100,
//         qty : 8
//     }
// ]

// const sum = products.reduce((accumulator,product)=>{
//     accumulator.Total = product.price*product.qty + accumulator.Total
//     accumulator.quantity = product.qty + accumulator.quantity
//     return accumulator
// },{Total : 0,quantity : 0})

// console.log(sum)

const reviews = [
    {
        rating : 2
    },
    {
        rating : 4
    },
    {
        rating : 5
    }
]
function total(abc){
    const sum = reviews.reduce((acc,prt)=>{
        return prt.rating + acc 
   },0)
   const avg = sum/abc
   console.log(avg)
}
total(reviews.length)

