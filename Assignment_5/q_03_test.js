import {wrap} from './q03.js'
let ob = new wrap('text1.txt');
let c=ob.write("New File Created")
console.log(c);
let a=ob.readFile1();
console.log(a)
ob.append("new text")
ob.delete()
let b=ob.readFile1()
console.log(b)