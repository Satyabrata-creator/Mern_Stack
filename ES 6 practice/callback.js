// function add(a,b,callback){
//     let sum=a+b
// callback(sum)
// }
// function callback(res){
//     console.log("The sum is "+res)
// }
// add(5,10,callback)

// function multiply(a,b,function(value){
//     console.log(value)
// }){
//     mul=a*b;
// }
// multiply(5,10,function(value){
//     console.log("The multiplication is "+value)
// })

// setTimeout(function(){
//      console.log("Time Out!!!")
//  },2000)
 let student  = {
     name: "John",
     getName: function(){
         console.log(this)
     },
     getStdName: ()=>{
         console.log(this)
     }
 }

 student.getName()
 student.getStdName()