function getUser(name){
    let mod = name + "uname"
     return function get() {
        return mod;
    }
}

const a = getUser("ak");
//console.log(a());

var increment = (function(n){
    return function(){
        n += 1;
        return n;
    }
}(0));

// console.log(increment());
// console.log(increment());
// console.log(increment());



function plusOne(){
    var val = 0;
    function incre(){
        val += 1;
        return val;
    }
    return incre;
}

var adder = plusOne();
console.log(adder());
console.log(adder());
console.log(adder());