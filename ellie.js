function foo(a, b) {
  console.log(this.name + this.age + a + b);
}

const obj = {
  name: "ank",
  age: 28,
};

foo.call(obj, "hi", "there");

function multiply(x)
{
    return function(y) {
        return x*y;
    }
}

console.log(multiply(5)(3));
