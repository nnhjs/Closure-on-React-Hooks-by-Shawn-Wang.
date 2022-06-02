function getAdd() {
  let foo = 1;
  return function () {
    foo = foo + 1;
    return foo;
  }
}

const add = (function getAdd() {
  let foo = 1;
  return function () {
    foo = foo + 1;
    return foo;
  }
})()

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
