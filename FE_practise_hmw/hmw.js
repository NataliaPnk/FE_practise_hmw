// HOMEWORK


// TASK 6
// Написать функцию, которая принимает массив строк, 
// и вернет строку с минимальной длиной.

// function stringMin(array) {
//   if(array.length === 0) {
//   return null;
// }

// let minStr = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length < minStr.length) { 
//     minStr = array[i];
//   }
//   }

//   return minStr;
// }

// let string = ['avocado', 'bread', 'butter', 'oil'];
// let res = stringMin(string)
// console.log(res);




// TASK 7

// Написать функцию, которая будет искать количество 
// вхождений символа в строке.
// ```
// getEntries('a', 'pumba'); // 1
// getEntries('m', 'ramamba haru mamburu'); // 4
// ```


// function getEntries(array, el) {
//   let count = 0;
//   for(let i = 0; i < array.length; i++) {
//     if (array[i] === el) {
//       count++;
//     }
//   }
//   return count;
// }

// const res = getEntries('it is a beautiful day today', 'a');
// console.log(res);



// TASK 8
// Написать функцию `duplicate`. Она должна принять 
// аргумент, и вернуть:
//  - если аргумент - строка, то "удвоенную" строку 
//  (конкатенация строки с ней же)
//  - если число - то число * 2
//  - если логическое значение - то просто вернуть 
//  аргумент



// function duplicate(date) {
//   if (String) {
//     return date + date;
//   } else if (Number) {
//     return date * 2;
//   } else (Boolean)
//   return date;
// }

// let res = duplicate(8)
// console.log(res)