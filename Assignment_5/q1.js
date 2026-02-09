// Create a module in Node.JS containing a function to reverse a number. Use ES6 default
// export to export the function from the module. Import the module in a separate file
// and test the reverse function.
export default function reverse(Num){
    let reverse=0;
    while(Num>0){
        let digit=Num%10;
        reverse=reverse*10+digit;
        Num=parseInt(Num/10);
    }
    return reverse;
}
