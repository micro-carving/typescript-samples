function hello(txt: string): void {
  console.log(`hello ${txt}`);
}

function helloWithoutReturn(txt: string) {
  console.log(`hello ${txt}`);
}

// way-1
const fc1 = function (txt: string) {
  console.log(`hello ${txt}`);
}

// way-2
const fc2: (txt: string) => void = function (txt: string) {
  console.log(`hello ${txt}`);
}

// (string: any, number: any) => number
type MyFun = (string, number) => number;

// type parameter names and actual parameter names can be different 
let f: (x: number) => number;
f = function (y: number) {
  return y;
}

// parameter aliasing
type MyFun2 = (txt: string) => void;

// omitting type definition
const hello2: MyFun2 = function (txt) {
  console.log(`hello ${txt}`);
}

// omitting type definition and parameter name, ts allows omitting parameters.
const hello3: MyFun2 = () => { }

let myFun3: (a: number, b: number) => number;

myFun3 = (a: number) => a; // ok
// ts-type-warning => Type '(a: number, b: number, c: number) => number' is not assignable to type '(a: number, b: number) => number'.
// Target signature provides too few arguments. Expected 3 or more, but got 2.
// myFun3 = (a: number, b: number, c: number) => a + b + c; // error

let myFun4 = (a: number) => 0;
let myFun5 = (b: number, s: string) => 0;
myFun5 = myFun4; // ok
// ts-type-warning => Type '(b: number, s: string) => number' is not assignable to type '(a: number) => number'.
// Target signature provides too few arguments. Expected 2 or more, but got 1.
// myFun4 = myFun5; // error

function add(x: number, y: number) {
  return x + y;
}

// type inference from function add
const myAdd: typeof add = function (x, y) {
  return x + y;
}

// object as a function definition
let objAdd: {
  (x: number, y: number): number;
};
// object function implementation
objAdd = function (x, y) {
  return x + y;
}


function fx(x: number) {
  console.log(x);
}
fx.version = "1.0.0";
// object function and attribute definition and implementation
let foo: {
  (x: number): void;
  version: string;
} = fx;


// way-1: object function definition and implementation
// definition addition object and implementation
const addition: {
  (x: number, y: number): number;
  (x: string, y: string): string;
  description: string;
} = ((x: number | string, y: number | string) => {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  }
  throw new Error('Invalid arguments');
}) as any;
// add description attribute to addition object
addition.description = 'addition function';
console.log(addition(1, 2));
console.log(addition('1', '2'));


// way-2: interface function definition and implementation
interface Fn {
  (x: number, y: number): number;
  (x: string, y: string): string;
  description: string;
}
let addFn: Fn = ((x: number, y: number): number => {
  return x + y;
}) as Fn;
addFn = ((x: string, y: string): string => {
  return x + y;
}) as Fn;
addFn.description = "addition function";
console.log(addFn(1, 2));
console.log(addFn('1', '2'));

/**
 * 函数的类型声明，需要在声明函数时，给出参数的类型和返回值的类型。
 * 如果不指定参数类型（比如上例不写 txt 的类型），TypeScript 就会推断参数类型，如果缺乏足够信息，就会推断该参数的类型为 any 。
 * 返回值的类型通常可以不写，因为 TypeScript 自己会推断出来。
 * 
 * 如果变量被赋值为一个函数，变量的类型有两种写法。
 * 写法一是通过等号右边的函数类型，推断出变量的类型；
 * 写法二则是使用箭头函数的形式，为变量指定类型，参数的类型写在箭头左侧，返回值的类型写在箭头右侧。
 * 
 * 函数类型没写参数名，导致 TypeScript 参数类型推断为 any 。函数类型里面的参数名与实际参数名，可以不一致。
 * 
 * 函数的实际参数个数，可以少于类型指定的参数个数，但是不能多于，即 TypeScript 允许省略参数。
 * 这是因为 JavaScript 函数在声明时往往有多余的参数，实际使用时可以只传入一部分参数。
 * 比如，数组的 forEach() 方法的参数是一个函数，该函数默认有三个参数 (item, index, array) => void ，实际上往往只使用第一个参数 (item) => void 。
 * 因此，TypeScript 允许函数传入的参数不足。
 * 
 * 如果一个变量要套用另一个函数类型，有一个小技巧，就是使用 typeof 运算符。这是一个很有用的技巧，任何需要类型的地方，都可以使用 typeof 运算符从一个值获取类型。
 * 
 * 函数类型还可以采用对象的写法。
 * 函数类型的对象写法: {(参数列表): 返回值类型}，这种写法平时很少用，但是非常合适用在一个场合：函数本身存在属性。
 * 函数类型也可以使用 Interface 来声明，这种写法就是对象写法的翻版
 */