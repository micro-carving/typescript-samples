let age: number = 18;

// tsconfig.json (strictNullChecks = false)
// age = null;
// age = undefined;

// Compile without error, run with error.
// age.toString();

// tsconfig.json (strictNullChecks = true)
// ts-error-warning => Type 'null' is not assignable to type 'number'.
// age = null; // error
// ts-error-warning => Type 'undefined' is not assignable to type 'number'.
// age = undefined; // error

let nu: any = undefined; // ok
let nl: unknown = null; // ok

/**
 * undefined 和 null 既是值，又是类型。作为值，它们有一个特殊的地方：任何其他类型的变量都可以赋值为 undefined 或 null 。
 * JavaScript 的行为是，变量如果等于 undefined 就表示还没有赋值，如果等于 null 就表示值为空。所以，
 * TypeScript 就允许了任何类型的变量都可以赋值为这两个值。
 * 但是有时候，这并不是开发者想要的行为，也不利于发挥类型系统的优势。有可能出现编译时没有错误，运行时却出现错误的情况。
 * 
 * 为了避免这种情况，及早发现错误，TypeScript 提供了一个编译选项 strictNullChecks 。只要打开这个选项，
 * undefined 和 null 就不能赋值给其他类型的变量（除了 any 类型和 unknown 类型）。
 * 
 * 总之，打开 strictNullChecks 以后， undefined 和 null 只能赋值给自身，或者 any 类型和 unknown 类型的变量。
 */

