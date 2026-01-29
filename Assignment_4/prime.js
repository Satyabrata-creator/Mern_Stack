// Write an asynchronous function that will generate a random integer number between
// 1 and 100 after 3 seconds. Write another function that will check whether the number
// is prime or not by using a promise. If the number is prime the promise will resolve
// and reject otherwise. Use async/await and try/catch to call both the functions and
// display the generated number and also display if it is even or odd.

function randomInt(){
    let myPromise=new Promise((resolve,reject)=>
        setTimeout(() => {
            let num=Math.floor(Math.random()*100)+1;
            if(num>0){
                 resolve(num)
            }
           else{
            reject("Not a Number")
           }
        }, 3000)
    )
    return myPromise;
}
function checkPrime(num){
    let checkPromise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            let count=0;
            for(let i=1;i<num;i++){
                if(num/i==0){
                    count++;
                }
            }
            if(count<=2){
                resolve(`${num} is a prime number`)
            }
            else{
                reject(`${num} is not a prime number`)
            }
        }, 500);
    })
    return checkPromise;
}

async function operate(){
    try {
        let n=await randomInt();
        console.log(n);
        let primeNum=await checkPrime(n)
        console.log(primeNum);
    } catch (error) {
        console.log("Error: "+error)
    }
}

operate()