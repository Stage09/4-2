// ----------------------------||1-rasm||----------------------

// 1-masala

// let list = [1,2,3,5,6,7,8,9,10]
// let result = list[0] + list[list.length - 1]
// console.log(result) 

// ----------------------------------------------------------

// 2-masala

// let number = [12,55,65,66,78]
// let maxNum = number[0]
// for(let num of number){
//     if(num > maxNum){
//         maxNum = num
//     }
// }
// console.log(maxNum)

// ----------------------------------------------------------

// 3-masala

// let number = [2,5,6,7,8]
// for(let i = 0; i < number.length;i++){
//     number[i] = number[i] + 1
// }
// console.log(number);

// ----------------------------------------------------------

// 4-masala

// let number = prompt("Son kiriting") - 0
// for(let i = 1; i <= number; i++){
//     if(number % i==0){
//         console.log(i);
//     }
// }

// ----------------------------------------------------------

// 5-masala

// let arr1 = [22,33,44,55,66]
// let arr2 = [22,88,44,99,55]
// let resArr = []

// for(let num1 of arr1){

//     for(let num2 of arr2){
//         if(num1 == num2){
//             resArr.push(num1)
//         }
//     }
// }
// console.log(resArr)

// ----------------------------||2-rasm||----------------------

// 1-masala

// let a = prompt('1 - son')
// let b = prompt('2 - son')
// let c = prompt('3 - son')
// let soni

// if ((a > b && a < c) || (a < b && a > c)) {
//     soni = a
// } else if ((b > a && b < c) || (b < a && b > c)) {
//     soni = b
// } else {
//     soni = c
// }

// console.log("Orta son: ", soni)


// 2-masala

// let num = prompt("Uch xonali son kiriting:");
// if (num.length === 3) {
//     let num1 = num[0]
//     if (num1 % 2 === 0) {
//         console.log("Birinchi raqam juft!")
//     } else {
//         console.log("Birinchi raqam toq!")
//     }
// } 
// else {
//     console.log("uch xonali son kiritshingiz lozim!")
// }


// 4-masala

// for (let i = 5; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 6-masala

// let arr = ["hello", 11, true];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'boolean') {
//         console.log("Boleanni indeksi: ", i);
//     }
// }

// 9-masala

// let arr = [-1,-2,-3,-4,-5,-6,8,11]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         arr[i] = -arr[i];
//     }
// }
// console.log("Musbat qiymati sonlar:", arr)