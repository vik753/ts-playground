const user = {
  name: 'John',
  age: 22,
};

const getValue = <T extends object, U extends keyof T>(obj: T, key: U): T[U] => obj[key];

const getKey = <T extends object, U extends keyof T>(obj: T, value: T[U]) =>
  (Object.keys(obj) as Array<U>).find((key) => obj[key] === value) || null;

console.log(getValue(user, 'age'));

console.log(getKey(user, 'John'));
