//Callback examples

// let add = (a,b,d) => {
//     setTimeout(()=>{
//         d(a+b)
//     },1000)
// }
// function display(a){
//     console.log(a);
// }
// add(99,99,display)

// promises

// function aService(){
//     let myPromise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // console.log("Operation Done")
//             let status = true

//             if(status){
//                 resolve("Task is completed");
//             } else {
//                 reject("Error while performing the operation")
//             }
//         }, 2000)
//     })
//     return myPromise
// }

// async function operator(){
//     try{ // resolve
//         let res = await aService();
//         console.log("Try Block: "+res)
//     } catch(err){ // reject
//         console.log("catch block: "+err)
//     } finally{
//         console.log("Finally Block")
//     }
// }

// operator()

//EvenorOdd using promises

//Create a random no
function EvenorOdd(){
    let promises=new Promise((resolve,reject) =>{
        setTimeout(()=>{
        let myNum=Math.floor(Math.random()*100)+1
        if(myNum%2==0){
            resolve(myNum)
        }
        else{
            reject("Not an even Number")
        }
    },2000)})
    return promises;
}

//Multiply with 20

function Multiply20(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num*20);
        },2000)
        
    })
}

//
async function Operation() {
    let number= await EvenorOdd();
    console.log(number);
    let MultiplyNum= await Multiply20(number)
    console.log(MultiplyNum);
}

Operation();