const { forEach, map, filter, reject, find, reduce } = require("ramda");
const myArray = [1, 2, 3, 4, 5];

forEach: {
  // Array
  myArray.forEach(value => console.log(value));
  // Ramda
  forEach(value => console.log(value), myArray);
}

map: {
  // Array
  myArray.map(value => value * 2);
  // Ramda
  map(value => value * 2, myArray);
}

filter: {
  // Array
  myArray.filter(value => value % 2);
  // Ramda
  filter(value => value % 2, myArray);
}

reject: {
  // Array
  myArray.filter(value => !(value % 2));
  // Ramda
  reject(value => value % 2, myArray);
}

find: {
  // Array
  myArray.find(value => value === 3);
  // Ramda
  find(value => value === 3, myArray);
}

reduce: {
  // Array
  myArray.reduce((acc, value) => acc + value, 0);
  // Ramda
  reduce((acc, value) => acc + value, 0, myArray);
}
