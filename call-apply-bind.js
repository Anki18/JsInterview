//call

function Person(name) {
    this.name = name;
}
console.log(Person);
function Customer(name, age) {
    Person.call(this, name);
    this.age = age;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

var c1 = new Customer("ankit", 28);


// bind
function Name(){
    this.name = "ank";
};

function AppendLastname(){
    return this.name + "vad";
}

var res = AppendLastname.bind(Name);
console.log(res());


