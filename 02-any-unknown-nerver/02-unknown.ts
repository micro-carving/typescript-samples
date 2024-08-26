let a: unknown;

a = 10; // ok
a = 'hello'; // ok
a = true; // ok

let a1: unknown = 10; // ok

// unknown is a type-safe version of any.
// ts-error-warning => Type 'unknown' is not assignable to type 'boolean'.
// let a2:boolean = a1; // error

// ts-error-warning => Type 'unknown' is not assignable to type 'number'.
// let a3:number = a1; // error

let f1: unknown = { foo: 123 };
// ts-error-warning => 'f1' is of type 'unknown'.
// f1.foo; // error

let str1: unknown = 'hello';
// ts-error-warning => 'str1' is of type 'unknown'.
// str1.trim(); // error

let fun1: unknown = (n = 0) => n + 1; // ok
// ts-error-warning => 'fun1' is of type 'unknown'.
// fun1(1); // error

// unknown operator
let o1: unknown = 1;
// ts-error-warning => 'o1' is of type 'unknown'.
// o1 + 1; // error

// ==, ===, !==, !=, ||, &&, ??, !, typeof, instanceof
o1 === 1; // ok
console.log('typeof o1 => ', typeof o1); // ok
console.log('instanceof o1 => ', o1 instanceof Number); // ok

// type range check
if (typeof o1 === 'number') {
  console.log('o1 is number => ', o1 + 1); // ok
}

/**
 * 为了解决 any 类型“污染”其他变量的问题，TypeScript 3.0 引入了 unknown 类型。
 * 它与 any 含义相同，表示类型不确定，可能是任意类型，但是它的使用有一些限制，不像 any 那样自由，可以视为严格版的 any 。
 * unknown 跟 any 的相似之处，在于所有类型的值都可以分配给 unknown 类型。
 */

/**
 * unknown 类型只能赋值给 unknown 类型或 any 类型，不能赋值给其他类型。
 * unknown 类型变量能够进行的运算是有限的，只能进行比较运算（运算符 == 、 === 、 != 、 !== 、 || 、
 * && 、 ? ）、取反运算（运算符 ! ）、 typeof 运算符和 instanceof 运算符这几种，其他运算都会报错。
 */

/**
 * 总之， unknown 可以看作是更安全的 any 。一般来说，凡是需要设为 any 类型的地方，通常都应该优先考虑设为 unknown 类型。
 * 在集合论上， unknown 也可以视为所有其他类型（除了 any ）的全集，所以它和 any 一样，也属于 TypeScript 的顶层类型。
 */