//Array methods tuto

//Array
let names = ['james', 'leonard', 'paul', "joe"];
// let names2 = ['Yannick', 'john']
// let names3 = ['ricardo', 'brice']

//Method 1: toString
// let stringnames = names.toString();
// console.log(stringnames); 


//Method 2: join
// you can join the elements with any thing /, and , 
// let stringnames = names.join('/');
// console.log(stringnames);


//Method 3: concat
//  let joined = names.concat(names2, names3);
//  console.log(joined);


//Method 4:splice
// 1st 1 represent the index in the array from where you whiwh to start deleting and the 2nd 1 represents the index of the object in the array you want to delete
// names.splice(1, 2);
// console.log(names);

//the concept of mutation using the splice method
//  let pames = ["james", "leonard", "paul", "joe"];
//  let pamescopy = [...pames];

//  pamescopy.splice(1, 1);
//  console.log(pames);
//  console.log(pamescopy);

//addind and adding using the splice nethod
//  names.splice(1, 2, 'nelly', 'herve');
//  console.log(names);


//method 5: slice
//Removes the elements of the index but not delete and return the rest
// let slice = names.slice(1, 3);
// console.log(slice);

//Method 5:indexOf
//used to get the index of on object in an array
//can also use lastIndexOf
// let index = names.indexOf('paul');
// console.log(index);


//Method 6: flat
// let num = [1, 2, 3, 4, [5, 6, [7, 8]], 9];
// let flat = num.flat();
// console.log(flat); 

 
//Method 7: forEach
// let count = 0;
// names.forEach((n) => {
//     console.log(n)
// });
// console.log(count);

//or you can do this for loop
// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// };



//Method 8: map 
// use to return a new array from an array
// let nums = [1, 2, 3, 4, 5, 6];

// let double = nums.map((n) => n*2);
// console.log(double);

//Method 9: filter
// looping throw the array of post and getting all the posts owned by Dan
// let post = [
//     {title: 'post 1', author: 'Dan'},
//     {title: 'post 2', author: 'Dan'},
//     {title: 'post 3', author: 'Sarah'},  
// ];

// let danspost = post.filter((p) => p.author === 'Dan');
// console.log(danspost);



//Method 9:reduce
// use to reduce an array to a single value
// let nums = [1, 2, 3, 4, 5, 6];
 //initialy the current value is 1 and currentvalue is 2 for the first iteration and we can as well specify the starting number for our iteration in the array
//   let total = nums.reduce((total, currentValue)=> total + currentValue);
//   console.log(total);


// we can as wwell get the max num in an array using reducer

// let total = nums = nums.reducer((a, b) => Math.max(a, b), -Infinity)
// console.log(total);




//Method 10: .some
// this array method is to get if and element in the array passes the test
// const nums = [1, 2, 3, 4, 5, 6];
// let isGreaterThan5 = nums.some((n) => n > 5);
//    console.log(isGreaterThan5);



//Method 11: .every()
// similar to the .some , it loops through the array check and return true or false
//  const nums = [1, 2, 3, 4, 5, 6];

//  let allGreaterThan0 = nums.every(n => n > 0);
//  console.log(allGreaterThan0);

//Method 12: find
// use to find a value in an array that matches the test 
//  let shop = [
//    { item: "laptop", quantity: 32 },
//    { item: "book", quantity: 100 },
//    { item: "pen", quantity: 220 },
//  ];

//  let book = shop.find((s) => s.item === 'book');
//  console.log(book.quantity);



//Method 12: findIndex  
// use to find the index in the array that matches the test 
//  let shop = [
//    { item: "laptop", quantity: 32 },
//    { item: "book", quantity: 100 },
//    { item: "pen", quantity: 220 },
//  ];

//  let book = shop.findIndex((s) => s.item === 'book');
//  console.log(book);



 //Method 13: sort
//  use to arrange number in order of priority
let lastname = [1, 5, 3, 8, 5];

let julio = lastname.sort((a, b) => a - b);

console.log(lastname)
