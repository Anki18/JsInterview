let a = "I am outside";
function foo(){
    console.log(a);
    let a = "I am inside";
    console.log(a);
}

foo();

console.log(a);