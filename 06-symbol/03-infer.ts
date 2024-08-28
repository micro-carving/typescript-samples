// type is symbol
let sys1 = Symbol();

// type is unique symbol
const sys2 = Symbol();

// type is symbol
const sys3 = sys1;

console.log(typeof sys2); // symbol
console.log(typeof sys3); // symbol

// type is symbol
const sys4 = sys2;

console.log(sys1 === sys3); // true
console.log(sys2 === sys4); // true
console.log(sys3 === sys4); // false

/**
 * 如果变量声明时没有给出类型，TypeScript 会推断某个 Symbol 值变量的类型。
 * 
 * let 命令声明的变量，推断类型为 symbol。
 * 
 * const 命令声明的变量，推断类型为 unique symbol。但是，const 命令声明的变量，如果赋值为另一个 symbol 类型的变量，则推断类型为 symbol。
 * 
 * let 或者 const 命令声明的变量，如果赋值为另一个 unique symbol 类型的变量，则推断类型还是 symbol。
 */