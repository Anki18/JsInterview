//each object in js have a prototype and prototype is a object itself
//all objects inherits there properties from there prototype

function Person(name, age){
    this.name = name;
    this.age = age;
    
}

Person.prototype.getDeatails = function(){
    return this.name + this.age;
}

function Customer(name, age, phone){
    Person.call(this,name,age);
    this.phone = phone;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.getMoreDeatails = function(){
    return this.name + this.age + this.phone;
}
const ank = new Person('ank', 28);
console.log(ank)