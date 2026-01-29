function checkAge(age){
    let myPromise=new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(age>=18){
                resolve("You are Eligible to vote")
            }
            else{
                reject("You are not eligible to vote")
            }
        },2000)
    })
    return myPromise;
}

async function getPromise(){
    try {
       let age=18;
       let vote=await checkAge(age) 
       console.log(vote);
       
    } catch (error) {
        console.log("Error: "+error);
        
    }
}

getPromise()