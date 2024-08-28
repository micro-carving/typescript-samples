const array = []; // array: any[]
array;

array.push(1); // array: number[]
array;

array.push('hello'); // array: (number | string)[]
array;

type ArrayType = typeof array;

console.log(array);
console.log(typeof array);

const array2 = [123];

// ts-type-warning => Argument of type 'string' is not assignable to parameter of type 'number'.
// array2.push('hello');// error

/**
 * 如果数组变量没有声明类型，TypeScript 就会推断数组成员的类型。这时，推断行为会因为值的不同，而有所不同。
 * 如果变量的初始值是空数组，那么 TypeScript 会推断数组类型是 any[] 。
 * 数组变量 arr 的初始值是空数组，然后随着新成员的加入，TypeScript 会自动修改推断的数组类型。
 * 类型推断的自动更新只发生初始值为空数组的情况。如果初始值不是空数组，类型推断就不会更新。
 * 新成员如果不是这个类型，TypeScript 就会报错，而不会更新类型推断。
 */