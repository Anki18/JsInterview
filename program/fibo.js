function fibo(num){
    let num1 = 0;
    let num2 = 1;
    console.log(num1);
    console.log(num2);
    let next = num1 + num2;
    while(next < num){
        console.log(next);
        num1 = num2;
        num2 = next;
        next = num1 + num2;
    }
}

fibo(8);