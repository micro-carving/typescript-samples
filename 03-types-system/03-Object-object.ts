let obj: Object;

obj = true; // ok
obj = 42; // ok
obj = "Hello World"; // ok
obj = [1, 2]; // ok
obj = { foo: 123 }; // ok
obj = (n: number) => n * n; // ok

// obj = null; // error
// obj = undefined; // error

let o: object;
o = {foo: 123}; // ok
o = [1, 2]; // ok
o = (n: number) => n * n; // ok

// o = true; // error
// o = 42; // error
// o = "Hello World"; // error
// o = null; // error
// o = undefined; // error

const o1: object = { foo: 123 };
const o2: Object = { foo: 123 };

o1.toString(); // ok
// ts-type-warning => Property 'foo' does not exist on type 'object'.
// o1.foo; // error

o2.toString(); // ok
// ts-type-warning => Property 'foo' does not exist on type 'Object'.
// o2.foo; // error

/**
 * Object vs object
 * 
 * 大写的 Object 类型代表 JavaScript 语言里面的广义对象。所有可以转成对象的值，都是 Object 类型，这囊括了几乎所有的值。
 * 原始类型值、对象、数组、函数都是合法的 Object 类型。
 * 除了 undefined 和 null 这两个值不能转为对象，其他任何值都可以赋值给 Object 类型。无所不包的 Object 类型既不符合直觉，也不方便使用。
 * 
 * 小写的 object 类型代表 JavaScript 里面的狭义对象，即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值。
 * object 类型不包含原始类型值，只包含对象、数组和函数。
 * 大多数时候，我们使用对象类型，只希望包含真正的对象，不希望包含原始类型。所以，建议总是使用小写类型 object ，不使用大写类型 Object 。
 * 
 * 无论是大写的 Object 类型，还是小写的 object 类型，都只包含 JavaScript 内置对象原生的属性和方
 * 法，用户自定义的属性和方法都不存在于这两个类型之中。
 */