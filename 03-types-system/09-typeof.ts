typeof 'foo'; // "string"
console.log(typeof 'foo'); // "string"

console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof true); // "boolean"
console.log(typeof 123); // "number"
console.log(typeof {}); // "object"
console.log(typeof parseInt); // "function"
console.log(typeof Symbol()); // "symbol"
console.log(typeof 127n); // "bigint"

const t0 = { x: 0 };
type T0 = typeof t0; // { x: number }
type T1 = typeof t0.x; // number

let t1 = 1;
// type operation
let t2: typeof t1; // number

// value operation
if (typeof t1 === 'number') {
  t2 = t1;
}

type T2 = typeof Date; // Date
// ts-error-warning => 'Date' refers to a value, but is being used as a type here.
// type T3 = typeof Date();// error

type T4 = number;
// ts-error-warning => 'T4' only refers to a type, but is being used as a value here.
// type T5 = typeof T4; // error

/**
 * JavaScript 语言中，typeof 运算符是一个一元运算符，返回一个字符串，代表操作数的类型。
 * TypeScript 中，typeof 运算符可以用来获取一个变量或对象的类型。
 * JavaScript 里面， typeof 运算符只可能返回八种（undefined、boolean、string、number、object、function、symbol、bigint）结果，而且都是字符串。
 * 
 * JavaScript 的 typeof 遵守 JavaScript 规则（值运算），TypeScript 的 typeof 遵守 TypeScript 规则（类型运算）。它们的一个重要区别在
 * 于，编译后，前者会保留，后者会被全部删除。
 */