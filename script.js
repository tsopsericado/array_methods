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
 let joined = names.concat(names2, names3);
 console.log(joined);


//Method 4:splice
// 1st 1 represent the index in the array from where you whiwh to start deleting and the 2nd 1 represents the index of the object in the array you want to delete
names.splice(1, 1);
