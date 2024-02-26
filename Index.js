// const num = 10;

// if(num % 2 === 0){
//     console.log(num, "is even num")
// }else{
//     console.log(num, "is odd num")
// }

///////////////////////////////////////////

// let score = 70;
// let grade;

// if(score>= 90 && score<= 100 ){
//     grade = "A"
// }else if(score>= 70 && score<= 80)
//  grade = "B"

// console.log("this is your result", grade)

///////////////////////////////////////////

// const sum = 0
// for(i = 1; i<=5; i++){
//     sum = sum + i;
// }

///////////////////////////////////////////

// let sum = 0;

// for(i=1; i<=10;i++){
//     sum = sum+i;
// }
// console.log(sum)

// let num = 0;
// for(i = num; num<=100; i++ ){
//     if(num % 2===0){
//         console.log(num)
//  }
// } 

// let arr = [23, 24 , 3, 2, 5]

// const hello = arr.filter((item)=>{
//    return item > 3;

// })
// console.log(hello)

// let arr = [23,20,16,17]

// const output = arr.reduce((prev,cur)=>{
//    return prev < cur ? prev : cur;
// })
// console.log(output)

// let arr = [90,60,86,97]

// const output = arr.filter((val)=>{
//   return val >= 90
// })
// console.log(output)

// let n = prompt("type any num you want sum")
// let arr = []

// for( let i = 1; i <= n; i++){
//   arr[i - 1] = i;
// }
// console.log(arr)

// let sum = arr.reduce((prev, cur)=>{
//   return prev + cur;
// })
// console.log(sum)

var visitorName = prompt("Enter your name.");
var productTitle = "T-Shirt(s)";
var quantity = prompt("Quantity you want to buy.");
document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing Store. \n");
document.write(`${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing store.`);