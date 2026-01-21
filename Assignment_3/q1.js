let pallindrome = (Num) => {
    let reverse=0;
    let originalNum=Num;
    while(Num>0){
        let digit=Num%10;
        reverse=reverse*10+digit;
        Num=parseInt(Num/10);
    }
    if(originalNum===reverse){
        console.log(originalNum+" is a pallindrome number");
    }
    else{
        console.log(originalNum+" is not a pallindrome number");
    }
}
