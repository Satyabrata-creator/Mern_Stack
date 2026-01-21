// Answer the following questions using setTimeout, setInterval and clearInterval.
// a. Create a function delayedGreeting that accepts a name and a delay time (in
// milliseconds). After the specified delay, it should log a greeting message (e.g., "Hello,
// [name]!").
// b. Display a 10 second count down timer in a webpage.

let delayedGreeting = (name,n) =>
{
    console.log(`Hello ${name}`);
    setTimeout(n)
}

delayedGreeting("Satyabrata Mohapatra",1000)
// let interval=10;

// let val= setInterval(() =>{
//     document.getElementById("clock").innerHTML=interval--;
//     if(interval<0){
//         clearInterval(val)
//     }
// },100)