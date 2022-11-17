// ctor - to create object
// function Person(name){
//     this.name = name
//     console.log(this);
// }

// let p1 = new Person('John');
// console.log(this);

function foo(){
    console.log(this.bar);
}
var bar = "global";
var obj1={
    bar: "obj1",
    foo: foo
}
var obj2 = {
    bar: "obj2"
}

foo();          // undefined because of strict mode
obj1.foo();     // obj1
foo.call(obj2); // obj2
new foo();      //calling