let hello: 'hello';

hello = 'hello'; // ok

// ts-error-warning: Type '"hi"' is not assignable to type '"hello"'.
// hello = 'hi'; // error

// next-line value type is 'https', not string
const https = 'https'; // ok
// next-line value type is string
const http: string = 'http'; // ok

console.log(typeof https); // string
console.log(typeof http); // string

const vx = { foo: 1 }
vx.foo; // number

// ts-error-warning: Type '5' is not assignable to type 'number'.
// 5 is subtype of number, but number is parent-type of 5, parent-type can't be assigned to subtype
// const vn: 5 = 4 + 1; // error

// use as 5 to tell ts compiler that 4 + 1 is 5, type assertion
const vn: 5 = (4 + 1) as 5; // ok

let vn1: 5 = 5;
let vn2: number = 4 + 1; // ok
// vn1 = vn2; // error
vn2 = vn1; // ok

/**
 * TypeScript 规定，单个值也是一种类型，称为“值类型”。
 * TypeScript 推断类型时，遇到 const 命令声明的变量，如果代码里面没有注明类型，就会推断该变量是值类型。
 * const 命令声明的变量，如果赋值为对象，并不会推断为值类型。JavaScript 里面，const 变量赋值为对象时，属性值是可以改变的。
 * 
 * 父类型不能赋值给子类型, 子类型可以赋值给父类型
 */