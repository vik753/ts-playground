"use strict";
const user = {
    name: "John",
    age: 22
};
const getValue = (obj, key) => obj[key];
console.log(getValue(user, 'age'));
const getKey = (obj, value) => Object.keys(obj).filter(key => obj[key] === value)[0] || null;
console.log(getKey(user, "John"));
