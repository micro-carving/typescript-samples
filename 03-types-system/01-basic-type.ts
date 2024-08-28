// boolean
const b1: boolean = true;
const b2: boolean = false;

// string
const str1: string = "Hello";
const str2: string = `${str1} World`;

// number
const num1: number = 1;
const num2: number = 1.1;
const num3: number = 0xff; // 255

// bigint (ES2020)
const big1: bigint = 100n;
const big2: bigint = 0xfffn; // 255n
// ts-type-warning => Type 'number' is not assignable to type 'bigint'.
// const big3: bigint = 123;// error

// symbol (ES2015)
const sym1: symbol = Symbol("foo");

// object
const obj1: object = { foo: "bar" };
const obj2: object = [1, 2, 3];
const obj3: object = (n: number) => n + 1;

// null & undefined
const n1: null = null;
const u1: undefined = undefined;

// tsconfig.json (noImplicitAny = false and strictNullChecks = false) => any
// const n2 = null; // type: any
// const u2 = undefined; // type: any

// tsconfig.json (noImplicitAny = true and strictNullChecks = true) => null or undefined
const n2 = null; // type: null
const u2 = undefined; // type: undefined

/**
 * JavaScript 语言（注意，不是 TypeScript）将值分成 8 种类型。
 * boolean
 * string
 * number
 * bigint
 * symbol
 * object
 * undefined
 * null
 * TypeScript 继承了 JavaScript 的类型设计，以上 8 种类型可以看作 TypeScript 的基本类型。
 * 注意，上面所有类型的名称都是小写字母，首字母大写的 Number 、 String 、 Boolean 等在 JavaScript 语言中都
 * 是内置对象，而不是类型名称。
 * 另外，undefined 和 null 既可以作为值，也可以作为类型，取决于在哪里使用它们。
 * 这 8 种基本类型是 TypeScript 类型系统的基础，复杂类型由它们组合而成。
 */