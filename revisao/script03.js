const array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
Object.freeze(array);
array.push(6);
console.log(array);