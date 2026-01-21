let calculateFactorial = (a, callback) => {

    let val=1;
    while(a>0){
        val= a*val;
        --a;
    }
    callback(val)

function callback(value){
    console.log(value);
    }
    
}
calculateFactorial(10)
