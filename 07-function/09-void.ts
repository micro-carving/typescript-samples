function vFun(): void {
  console.log('hello world');

  // ts-type-warning => Type 'number' is not assignable to type 'void'.
  // return 0; // error
}

function uFun(): void {
  return undefined;
}

// tsconfig.json => "strictNullChecks": true,
function nFun(): void {
  // ts-type-warning => Type 'null' is not assignable to type 'void'.
  // return null; // error
}

type voidFunc = () => void;
const vf: voidFunc = () => {
  return 123;
}
// 
const res = vf();
console.log(res); // 123
// ts-type-warning => The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
// console.log(2 * res); // error

const src = [1, 2, 3];
const ret: number[] = [];
src.forEach(item => ret.push(item));

function vFun2(): void {
  // ts-type-warning => Type 'boolean' is not assignable to type 'void'.
  // return true; // error
}

const vFun3 = function (): void {
  // ts-type-warning => Type 'boolean' is not assignable to type 'void'.
  // return true; // error
}

function throwErr(): void {
  throw new Error('something wrong');
}

let fooFun:void = undefined;

// tsconfig.json => "strictNullChecks": true,
// Type 'null' is not assignable to type 'void'.
// let barFun:void = null; // error

/**
 * void 类型表示函数没有返回值。
 * 
 * void 类型允许返回 undefined 或 null（关闭编译选项 strictNullChecks） 。
 * 如果打开了 strictNullChecks 编译选项，那么 void 类型只允许返回 undefined 。如果返回 null ，就会报错。
 * 
 * 这是因为 JavaScript 规定，如果函数没有返回值，就等同于返回 undefined 。
 * 
 * 需要特别注意的是，如果变量、对象方法、函数参数是一个返回值为 void 类型的函数，那么并不代表不能赋值为有返回值的函数。
 * 恰恰相反，该变量、对象方法和函数参数可以接受返回任意值的函数，这时并不会报错。
 * 
 * 这是因为，这时 TypeScript 认为，这里的 void 类型只是表示该函数的返回值没有利用价值，或者说不应该使用该函数的返回值。只要不用到这里的返回值，就不会报错。
 * 这样设计是有现实意义的。举例来说，数组方法 Array.prototype.forEach(fn) 的参数 fn 是一个函数，而且这个函数应该没有返回值，即返回值类型是 void 。
 * 但是，实际应用中，很多时候传入的函数是有返回值，但是它的返回值不重要，或者不产生作用。
 * 
 * 注意，这种情况仅限于变量、对象方法和函数参数，函数字面量如果声明了返回值是 void 类型，还是不能有返回值。
 * 
 * 函数字面量声明了返回 void 类型，这时只要有返回值（除了 undefined 和 null ）就会报错。
 * 函数的运行结果如果是抛出错误，也允许将返回值写成 void 。
 * 
 * 除了函数，其他变量声明为 void 类型没有多大意义，因为这时只能赋值为 undefined 或者 null （假定没有打开 strictNullChecks ) 。
 */