// 11️⃣ Largest Number in Array

// [10, 45, 22, 99, 50]

// Output:

// 99

 
//  const numbers =  [10, 45, 22, 99, 50];

//  const length = Math.max(...numbers);
//  console.log(length);


//  12️⃣ Smallest Number

// array থেকে smallest number বের করো।

// const numbers =  [10, 45, 22, 99, 50];

// const smallest = Math.min(...numbers);
// console.log(smallest);



// 13️⃣ Count Even Numbers

// array এর মধ্যে কয়টা even number আছে?

// const numbers =  [10, 45, 22, 99, 50];
// let count = 0;

// for(let num of numbers) {
//     if(num % 2 === 0) {
//        count++
//     } 
// }
 
// console.log('Even Number: ', count)


// 14️⃣ Factorial

// 5! = 5 × 4 × 3 × 2 × 1

// Output:

// 120

// let number = 5;
// let factorial = 1;

//  for(let i = number; i >= 1; i--) {
//     factorial = factorial * i;
     
//  }
// console.log(factorial)


// 15️⃣ Fibonacci

// First 10 Fibonacci number print করো।

// let fibo = [0, 1];

// for(let i = 2; i < 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
//  console.log(fibo.join(', '))
 



// // 16️⃣ Remove Duplicate

// // [1,2,2,3,4,4,5]

// const numbers = [1,2,2,3,4,4,5];
// const unique_numbers = [...new Set(numbers)];
// console.log(unique_numbers);


// 17️⃣ Average

// array এর average বের করো।

// const numbers = [10, 45, 22, 99, 50]
// const sum = numbers.reduce((a, b) => a + b, 0);
 
// const average = sum / numbers.length;

// console.log(average);


// 18️⃣ Student Result

// marks যদি

// 80+ → A
// 70+ → B
// 60+ → C
// 50+ → D


// let marks = 50;
// if(marks >= 80) {
//     console.log('A');
// } else if (marks >= 70) {
//     console.log('B');
// } else if(marks >= 60) {
//     console.log('C');
// } else if (marks >= 50 ) {
//     console.log('D');
// } else {
//     console.log('F')
// }


// 19️⃣ Object Access

// const student = {
//  name: "Rahim",
//  marks: 85
// }

// const student = {
//  name: "Rahim",
//  marks: 85
// }
// console.log(student.name)
// console.log(student.marks)

// // Bracket Notation (Dynamic kajer jonno)
// console.log(student['name'])
// console.log(student['marks'])
 


// 20️⃣ Array of Object Sum

// const students = [
//  {name:"Rahim", marks:80},
//  {name:"Karim", marks:60},
//  {name:"Salam", marks:70}
// ]

// সব marks এর sum বের করো।

// const students = [
//  {name:"Rahim", marks:80},
//  {name:"Karim", marks:60},
//  {name:"Salam", marks:70}
// ]

// const sum = students.reduce((total, student) => {
//     return total + student.marks;
// }, 0);

 
 

// console.log(sum)