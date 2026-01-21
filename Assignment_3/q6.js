// Construct an array of 10 numbers and perform the following operations using higher-order
// array methods –
// a. Display the array elements using forEach
// b. Produce a new array by squaring each number of the given array using map
// c. Produce an array with all the even numbers present on the original array using filter
// d. Remove any number from the array using filter
// e. Sort the array in both ascending and descending order using sort and display
// f. Find the average of the array elements
// g. Find the smallest number amongst the array elements.
let a=[1,2,3,4,5,6,7,9,8,10]
// let b=a.forEach((i)=>{
//     console.log(i);  
// })

// let mapping = a.map((a) => a ** 2)
// console.log(mapping);

// let b = a.filter(c => c%2==0)
// console.log(b)

// let b = a.filter(c => c!=10)
// console.log(b);

// a.sort((a,b)=>(a-b))
// console.log(a);

// a.sort((a,b)=>(b-a))
// console.log(a);

// b= a.reduce((prev,curr) => (prev+curr),0)
// console.log(b/a.length);

b=a.reduce((prev,curr)=>prev<curr?prev:curr,a[0])
console.log(b);




