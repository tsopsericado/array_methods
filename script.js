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
let nums = [1, 2, 3, 4, 5, 6];

let double = nums.map((n) => n*2);
console.log(double);

//Method 9: filter
